import { extend, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import Player from "./Player"
import Room from "./Room"
import DefaultEnvironment from "../../DefaultEnvironment"

export default function Cleaners()
{
    const three = useThree()

    useEffect(() => {
        three.camera.position.set(0, 5, -10)
    }, [])
    

    // each frame
    useFrame((state, delta) => {

        // const et = state.clock.elapsedTime
        // const range = 10
        // state.camera.position.x = Math.sin(et)*range
        // state.camera.position.z = Math.cos(et)*range
        // cube.current.rotation.y += delta
        // group.current.rotation.y += delta
        
        // state.camera.lookAt(0,0,0)
    })
    
    return (
        <>
            <DefaultEnvironment />

            <Player />
            <Room />

            </>
    )
}