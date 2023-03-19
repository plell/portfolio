
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'

const moveKeys = ['KeyA', 'KeyD', 'ArrowLeft', 'ArrowRight', 'Space']


let userMoveKey = ''
let playerAngle = 0
const playerSpeed = 0.2
const boundaries = 5

export default function Player() {
    const player = useRef()

     // each frame
    useFrame((state, delta) => {

         movePlayer()
        //  player.current.position.y = Math.sin(state.clock.elapsedTime*4)
    })
    

    useEffect(() => {
        window.addEventListener('keydown', (e) =>
        {
            doKeyDown(e)
        })
        
        window.addEventListener('keyup', (e) =>
        {
            doKeyUp(e)
        })
    }, [])

    function doKeyDown(e) {
        if (moveKeys.includes(e.code) && userMoveKey !== e.code) {
            userMoveKey = e.code
        }
    }

    function doKeyUp(e) {
        
        if (moveKeys.includes(e.code) && userMoveKey === e.code) {
            resetMoveKey()
        }
    }

    function resetMoveKey() {
        userMoveKey = ''
    }

    function jump() {
        
    }
    
    function movePlayer() {
        if (userMoveKey) {
            // apply angle
            if (userMoveKey === 'Space') {
                jump()
                return
            }

            if (userMoveKey === 'KeyA' || userMoveKey === 'ArrowLeft') turnLeft()
            else if (userMoveKey === 'KeyD' || userMoveKey === 'ArrowRight') turnRight()
            else if (userMoveKey === 'KeyW' || userMoveKey === 'ArrowUp') turnUp()
            else if (userMoveKey === 'KeyS' || userMoveKey === 'ArrowDown') turnDown()
            
            // apply rotation
            if (player.current.rotation.y !== playerAngle) player.current.rotation.y = playerAngle
            
            player.current.translateZ(playerSpeed)    
        }
      }


    function turnRight() {
        // turn chai
        
        playerAngle = Math.PI * -0.5
    }
    function turnLeft() {
        playerAngle = Math.PI * 0.5
    }

    function turnUp() {
        playerAngle = 0
    }
    function turnDown() {
        
        playerAngle = Math.PI
    }
    
    

    return <>
        <mesh
            ref={player}
            position-y={-0.5}
            position-z={-4}>
            <boxGeometry/>
            <meshNormalMaterial color="red"/>
        </mesh>
    </>
}