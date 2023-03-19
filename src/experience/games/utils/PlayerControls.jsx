

import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'

const moveKeys = ['KeyA', 'KeyD', 'ArrowLeft', 'ArrowRight', 'Space']

let userMoveKey = ''
let playerAngle = 0
const playerSpeed = 0.2

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

export default function PlayerControls({ mouseControls, player }) {
    
    useFrame((_, deltaTime) => {
        move()
    })

    const listeners = useMemo(() => [
        {
            key: 'keydown',
            func: doKeyDown
        },
        {
            key: 'keyup',
            func: doKeyUp
        },
        {
            key: 'mousemove',
            func: mouseMove
        },
        {
            key: 'mousedown',
            func: mouseDown
        },
        {
            key: 'mouseup',
            func: mouseUp
        },
        {
            key: 'resize',
            func: resizeWindow
        }
    ],[])

    // mount and cleanup listeners
    useEffect(() => {
        listeners.forEach(l => {
            window.addEventListener(l.key, l.func)
        })
        
        return function cleanup() {
            listeners.forEach(l => {
                removeEventListener(l.key, l.func)
            })
        }
    }, [])

    function resizeWindow() {
         // Update sizes
         sizes.width = window.innerWidth
         sizes.height = window.innerHeight
    }

    function mouseUp(e) {
        
    }

    function mouseDown(e) {
        jump()
    }

    function mouseMove(e) {
        if (mouseControls) {
            player.current.position.x = (((e.clientX / sizes.width) - 0.5) * -1) * 12
        }
    }

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
        console.log('jump!')
    }
    
    function move() {
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
    
    return null

}