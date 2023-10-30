import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Stars = ({ isMobile }) => {
    const monitor = useGLTF('./need_some_space/scene.gltf')

    const myMesh = useRef()

    useFrame(() => {
        myMesh.current.rotation.y += (isMobile ? 0.001 : 0.002)
    })

    return (
        <mesh ref={myMesh}>
            <primitive 
                object={monitor.scene}
                scale={150}
                position={[-190, -235, 215]}
                rotation={[0, 0, 0.1]} 
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
            frameloop="always"
            shadows
            camera={{ position: [10, 0, 0], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={true}
                    maxDistance={250}
                />
                <Stars isMobile={isMobile} />
            </Suspense>
                {/* <axesHelper /> */}
            <Preload all />
        </Canvas>
    )
}