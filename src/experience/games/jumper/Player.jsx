
// import * as THREE from 'three'
// import { useFrame, useThree } from '@react-three/fiber'
import { useRef} from 'react'
import PlayerControls from '../utils/PlayerControls'

export default function Player() {
    const player = useRef()

    return <>
        
        <PlayerControls
            mouseControls
            player={player}
        />

        <mesh
            ref={player}
            position-y={-0.5}
            position-z={-4}>
            <boxGeometry/>
            <meshNormalMaterial color="red"/>
        </mesh>
    </>
}