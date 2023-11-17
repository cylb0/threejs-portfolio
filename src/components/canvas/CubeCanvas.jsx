import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Float, OrbitControls, Preload } from '@react-three/drei' 
import { TextureLoader } from 'three'

import CanvasLoader from '../CanvasLoader'

const Cube = ({ data }) => {

    const textures = Object.values(data).map(element => (
        useLoader(TextureLoader, element.icon)
    ))

    const renderMaterials = () => {
        const materials = []
        for (let i = 0 ; i < 6 ; i++) {
            materials.push(<meshStandardMaterial
                key={i} 
                map={textures[i % textures.length]} attach={`material-${i}`}
            />)
        }
        return materials
    }
    
    const meshRef = useRef()
    useFrame(() => {
        meshRef.current.rotation.x += 0.03
        meshRef.current.rotation.y += 0.02
    })

    return (
        <Float 
            speed={1} 
            rotationIntensity={1} 
            floatIntensity={1}>
            <ambientLight intensity={3} />
            <directionalLight position={[0, 0, 3]} />
            <mesh castShadow receiveShadow scale={1.2} ref={meshRef}>
                <boxGeometry args={[2, 2, 2]} />
                {renderMaterials()}
            </mesh>
        </Float>
    )
}

export default function CubeCanvas({ data }) {
    return (
        <Canvas
            frameloop="always"
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                />
                <Cube data={data} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
} 