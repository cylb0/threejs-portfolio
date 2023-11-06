import { Suspense, useRef} from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Earth = () => {
    const earth = useGLTF('./earth_light/scene.gltf')
    const meshRef = useRef()
    const earthScale = 2.5
    const position = [-earthScale, -earthScale, -earthScale]

    useFrame(() => {
        meshRef.current.rotation.y += 0.002
    })

    return (
        <mesh 
            ref={meshRef}
        >
            <primitive 
                object={earth.scene}
                scale={earthScale}
                position={position}
                rotation={[0, 0, 0]}
            />
        </mesh>
    )
}

export default function EarthCanvas() {

    return (
        <Canvas
            frameloop="always"
            shadows
            camera={{ 
                position: [0, 0, 10],
                fov: 50 
            }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <group
                    position={[0, 0, 0]} 
                    rotation={[0, 0, -0.4]}
                >
                    <OrbitControls
                        enableZoom={false}
                        enableRotate={true}
                        maxPolarAngle={Math.PI /2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Earth />
                </group>
            </Suspense>
            <Preload all />
            <directionalLight position={[5, 0, 2]} intensity={3} />
        </Canvas>
    )
}