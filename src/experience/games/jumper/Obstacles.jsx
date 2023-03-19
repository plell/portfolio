import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const speed = 0.2
const boxStartingPosition = 18

export default function Obstacles() {
    const cube = useRef()   
    const cube1 = useRef()   
    const cube2 = useRef()   

    const boxes = [
        {
            x: -2,
            ref:cube
        },
        {
            x: 0,
            ref:cube1
        },
        {
            x: 2,
            ref:cube2
        }
    ]

    useFrame(() => {
        boxes.forEach((b) => {
            if (b.ref.current.position.z < -10) b.ref.current.position.z = boxStartingPosition
            b.ref.current.position.z -= speed
        })
    })

    return <>
        
        {
            boxes.map((c, i) => {
                return <mesh
                    key={'mesh_'+i}
                    ref={c.ref}
                    position-x={c.x}
                    position-z={boxStartingPosition}>
                        <boxGeometry/>
                        <meshStandardMaterial
                            color={'white'}
                            />
                    </mesh>    
            })
        }
        
    </>
}