import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Terrain from './Terrain'
import { MeshReflectorMaterial } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Room() {
    const floor = useRef()   

    useFrame((state) => {
        // console.log('state',state)
    })

    return <>
        
        <Terrain />

        
        {/* floor */}
        <RigidBody type="fixed" restitution={ 1 } >
        <mesh
        ref={floor}
        position-z={-30}
        position-y={-1}
        rotation-x={- Math.PI * 0.5}
        scale={80}>
            <planeGeometry/>
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000,1000]}
                mixBlur={1}
                mirror={0.5}
            />
            </mesh>
            </RigidBody>
    </>
}