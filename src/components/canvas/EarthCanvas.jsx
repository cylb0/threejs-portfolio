import { Suspense, lazy } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"

import CanvasLoader from "../Loader"

import Earth from "./Earth"

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