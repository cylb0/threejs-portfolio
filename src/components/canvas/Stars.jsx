import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const Stars = ({ isMobile }) => {
    const stars = useGLTF('./need_some_space/scene.gltf')

    const myMesh = useRef()

    useFrame(() => {
        myMesh.current.rotation.y += (isMobile ? 0.001 : 0.0005)
    })

    return (
        <mesh ref={myMesh}>
            <primitive 
                object={stars.scene}
                scale={150}
                position={[-190, -270, 215]}
                rotation={[0, 0, 0.1]} 
            />
        </mesh>
    )
}

export default Stars