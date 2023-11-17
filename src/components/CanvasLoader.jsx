import { Html, useProgress } from '@react-three/drei'
import { MutatingDots } from 'react-loader-spinner'

export default function Loader() {
    const { progress } = useProgress()
    return (
        <Html>
            <div className="flex flex-col justify-center items-center">
                <MutatingDots 
                    height="100"
                    width="100"
                    color="#e98a16"
                    secondaryColor= '#ffffff'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <span>{progress.toFixed(2)}%</span>
            </div>
        </Html>
    )
}