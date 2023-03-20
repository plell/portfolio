import { useFrame, useThree} from "@react-three/fiber"
import { useEffect, useState } from "react"
import { OrbitControls } from "@react-three/drei"

let cursor = {
    x: 0,
    y: 0
}

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const parallaxRange = 2

export default function DefaultEnvironment(props)
{

    const [mouseIsDown, setMouseIsDown] = useState(null)
    const {camera} = useThree()

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mousedown', mouseDown)
        window.addEventListener('mouseup', mouseUp)
        resetCamera()

        return function cleanup() {
            removeEventListener('mousemove', mouseMove)
            removeEventListener('mousedown', mouseDown)
            removeEventListener('mouseup', mouseUp)
        } 
    }, [])

    useFrame((_, deltaTime) => {
        if (props.parallax && !mouseIsDown) {    
            camera.position.x += ((cursor.x * parallaxRange) - camera.position.x) * 2 * deltaTime
            // camera.position.y += (parallaxY - camera.position.y) * 2 * deltaTime    
        }
        
    })

    function resetCamera() {
        camera.position.set(0, 5, 10)
    }

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
            {props.controls && <OrbitControls makeDefault/>}
            <directionalLight
                position={[3, 2, 0]}
                intensity={1.5} />
            <ambientLight
                intensity={0.5} />
            </>
    )
}