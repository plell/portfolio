import { extend, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

let cursor = {
    x: 0,
    y: 0
}

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

export default function DefaultEnvironment(props)
{
    const { camera, gl } = useThree()   

    const [mouseIsDown, setMouseIsDown] = useState(null)

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mousedown', mouseDown)
        window.addEventListener('mouseup', mouseUp)
    }, [])

    useFrame((_, deltaTime) => {
        if (props.parallax && !mouseIsDown) {
            const parallaxX = cursor.x
            const parallaxY = - cursor.y
    
            camera.position.x += (parallaxX - camera.position.x) * 2 * deltaTime
            camera.position.y += (parallaxY - camera.position.y) * 2 * deltaTime    
        }
        
    })

    function mouseMove(e) {
        cursor.x = (e.clientX / sizes.width) - 0.5
        cursor.y = (e.clientY / sizes.height) - 0.5
    }

    function mouseUp(e) {
        setMouseIsDown(false)
    }

    function mouseDown(e) {
        setMouseIsDown(true)
    }

    return (
        <>
            {props.controls && <orbitControls args={[camera, gl.domElement]} /> }
            <directionalLight
                position={[3, 2, 0]}
                intensity={1.5} />
            <ambientLight
                intensity={0.5} />
            </>
    )
}