
// import * as THREE from 'three'
// import { useFrame, useThree } from '@react-three/fiber'
import { TransformControls, PivotControls, Html } from '@react-three/drei'
import { useRef} from 'react'
import PlayerControls from '../utils/PlayerControls'

import { RigidBody } from '@react-three/rapier'

export default function Player() {
    const player = useRef()
    const rigidBody = useRef()

    return <>
        <PlayerControls
            mouseControls
            player={player}
            rigidBody={rigidBody}
        />

        <RigidBody 
            // colliders="ball"
            ref={rigidBody}
            position-y={-0.5}
            position-z={4}>
            
            <mesh ref={player}>
                <boxGeometry/>
                <meshNormalMaterial color="red" />
                <Html
                    position={[1, 1, 0]}
                    wrapperClass={'label'}
                    center
                    distanceFactor={10}
                    occlude={[player]}
                >
                    Hello
                </Html>
                </mesh>
            </RigidBody>
{/*     
        <TransformControls
            object={player}
            mode="translate"
            // mode="rotate"
            // mode="scale"
        /> */}
    </>
}