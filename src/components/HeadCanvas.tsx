import { Suspense, useMemo, useRef, Component } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import type { MutableRefObject, ReactNode } from 'react'

type ProgressRef = MutableRefObject<number>
const headModel = `${import.meta.env.BASE_URL}assets/head.glb`
/* If WebGL or the model fails, the page must survive — render nothing instead. */
class GLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(err: unknown) {
    console.warn('3D model unavailable:', err)
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

function Head({ progress }: { progress: ProgressRef }) {
  const { scene } = useGLTF(headModel)
  const group = useRef<THREE.Group>(null)

  // Normalize: center the model at origin and scale to a consistent size,
  // regardless of the units the scan was exported in.
  const normalized = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    const targetHeight = 2.6
    const scale = targetHeight / size.y
    const wrapper = new THREE.Group()
    scene.position.sub(center)
    wrapper.add(scene)
    wrapper.scale.setScalar(scale)
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh
        mesh.castShadow = false
        mesh.receiveShadow = false
      }
    })
    return wrapper
  }, [scene])

  const smooth = useRef({ y: 0, x: 0 })

  useFrame((state, delta) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    const p = progress.current // 0 → 1 across the hero scroll track
    const pointer = state.pointer // normalized -1..1

    // Scroll does the big spin; pointer adds a subtle parallax; a slow idle sway keeps it alive.
    const targetY = p * Math.PI * 2 + pointer.x * 0.3 + Math.sin(t * 0.35) * 0.06
    const targetX = -0.06 + pointer.y * -0.14 + p * 0.18

    smooth.current.y = THREE.MathUtils.damp(smooth.current.y, targetY, 4.5, delta)
    smooth.current.x = THREE.MathUtils.damp(smooth.current.x, targetX, 4.5, delta)

    group.current.rotation.y = smooth.current.y
    group.current.rotation.x = smooth.current.x
    group.current.position.y = Math.sin(t * 0.9) * 0.045
  })

  return <primitive object={normalized} ref={group} />
}

export default function HeadCanvas({ progress }: { progress: ProgressRef }) {
  return (
    <GLBoundary>
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        camera={{ fov: 30, position: [0, 0.05, 4.4], near: 0.1, far: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Warm studio lighting — no external HDR needed */}
        <hemisphereLight args={['#fff8ef', '#c9b8a3', 0.85]} />
        <directionalLight position={[2.5, 3, 4]} intensity={2.1} color="#fff4e4" />
        <directionalLight position={[-3.5, 1, -1.5]} intensity={0.55} color="#dfe8ff" />
        <directionalLight position={[0, -2, -3]} intensity={0.35} color="#ffe9d6" />
        <Suspense fallback={null}>
          <Head progress={progress} />
          <ContactShadows position={[0, -1.55, 0]} opacity={0.28} scale={6} blur={2.6} far={3} color="#4a3720" />
        </Suspense>
      </Canvas>
    </GLBoundary>
  )
}

useGLTF.preload(headModel)
