import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect, useMemo } from 'react'
import { Text, Float } from '@react-three/drei'

const speed = 0.3
const boxStartingPosition = -68
const swingSpeed = 1
const swingRange = 6
const terrainSpacingX = 2
const terrainSpacingY = 20

export default function Terrain() {
    const [loading, setLoading] = useState(true)
    const [terrain, setTerrain] = useState([])

    const group1 = useRef()
    const group2 = useRef()
    const group3 = useRef()
    const group4 = useRef()
    
    const groups = [{
            ref: group1,
            startingPosition: boxStartingPosition,
        },
        {
            ref: group2,
            startingPosition: boxStartingPosition - terrainSpacingY,
        },
        {
            ref: group3,
            startingPosition: boxStartingPosition - terrainSpacingY * 2,
        },
        {
            ref: group4,
            startingPosition: boxStartingPosition - terrainSpacingY * 3,
        },
    ]

    useEffect(() => {
        initTerrain(groups.length)
        setLoading(false)
    },[])

    useFrame((state, delta) => {
        if (loading) return

        groups.forEach((g,i) => {
            const group = g.ref

            if (group.current.position.z > 10) {
                group.current.position.z = boxStartingPosition
                newTerrain(i)
            }

            group.current.position.x = ((Math.sin(state.clock.elapsedTime * swingSpeed) - 0.5) * swingRange) + 2
            group.current.position.z += speed
        })
    })

    function initTerrain(rowAmount) {
        const initTerrain = [] 
        for (let i = 0; i < rowAmount; i++){
            const row = []
            const boxNumber = Math.floor(Math.random() * 6) + 1
            for (let i = 0; i < boxNumber; i++){
                row.push({
                    x: i * terrainSpacingX - (((boxNumber * terrainSpacingX)/2) - terrainSpacingX/2)
                })
            }
            initTerrain.push(row)
        }
        
        setTerrain(initTerrain)
    }

    function newTerrain(index) {
        const row = []
        const boxNumber = Math.floor(Math.random() * 6) + 1

        for (let i = 0; i < boxNumber; i++){
            row.push({
                x: i * terrainSpacingX - (((boxNumber * terrainSpacingX)/2) - terrainSpacingX/2)
            })
        }

        const terrainClone = [...terrain]
        terrainClone.splice(index, 1, row)
        
        setTerrain(terrainClone)
    }


    return <>
        {groups.map((g, i) => {
            return <group
                key={'group_'+i}
                position-z={g.startingPosition}
                ref={g.ref}>
            {
                terrain[i]?.map((c, ii) => {
                        return <mesh
                        key={'mesh_'+ii}
                        position-x={c.x}
                        >
                            <boxGeometry/>
                            <meshStandardMaterial
                                color={'white'}
                                />
                        </mesh>            
                    })
            }
        </group>
        })}
        
        
             {/* <Float
                speed={5}
                // floatIntensity={2}
                // floatingRange={10000}
            >
                <Text
                    font="./fonts/aclonica-v18-latin-regular.woff"
                    position-y={1.6}
                    fontSize={1}
                    // maxWidth={1}
                    textAlign={'center'}
                >
                    here i come!

                    <meshNormalMaterial/>
                </Text>
            </Float> */}
        
    </>
}