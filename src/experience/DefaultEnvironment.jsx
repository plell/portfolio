import { extend, useFrame, useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

export default function DefaultEnvironment(props)
{
    const { camera, gl } = useThree()

    const three = useThree()

    useEffect(() => {
    }, [])
    
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