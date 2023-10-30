import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
    const { progress } = useProgress()
    return (
        <Html>
            <span>{progress.toFixed(2)}%</span>
        </Html>
    )
}