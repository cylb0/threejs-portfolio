import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Stars = ({ isMobile }) => {
    const monitor = useGLTF('./need_some_space/scene.gltf')

    return (
        <mesh>
            <primitive 
                object={monitor.scene}
                scale={isMobile ? 100 : 100}
                position={isMobile ? [-100, -150, 150] : [-180, -110, 110]}
                rotation={isMobile ? [0, 0, -0.1] : [0, 0, -0.3]} 
            />
        </mesh>
    )
}

export default function StarsCanvas() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event) => {
            console.log("change")
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [10, 0, 0], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    zoomSpeed={1.5}
                />
                <Stars isMobile={isMobile} />
            </Suspense>
                {/* <axesHelper /> */}
            <Preload all />
        </Canvas>
    )
}