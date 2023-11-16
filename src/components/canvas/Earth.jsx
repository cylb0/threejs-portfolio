import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

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

export default Earth