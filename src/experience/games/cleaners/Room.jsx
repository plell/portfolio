import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Obstacles from './Obstacles'

export default function Room() {
    const floor = useRef()   

    useFrame((state) => {
        // console.log('state',state)
    })

    return <>
        
        <Obstacles />

        <mesh
        onClick={(e) => {
            console.log('e',e)
        }}
        ref={floor}
        position-y={-1}
        rotation-x={- Math.PI * 0.5}
        scale={10}>
            <planeGeometry/>
            <meshStandardMaterial
                color={'greenyellow'}
                />
        </mesh>
    </>
}