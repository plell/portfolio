import { Canvas } from '@react-three/fiber'

import Games from "./games"
import Writing from "./writing"
import Resume from "./resume"
import Music from "./music"
import Art from './art'

import {
    Routes,
    Route
} from "react-router-dom";



export default function Experience()
{
    return (
        <Canvas
            camera={{
                // zoom:100,
                fov: 64,
                near: 0.1,
                far: 200,
                position:[0,5,-10]
            }}>
            <Routes>
                <Route element={<Games />} index path='/games' />
                <Route element={<Music />} path='/music' />
                <Route element={<Writing />} path='/writing' />
                <Route element={<Resume />} path='/resume' />
                <Route element={<Art />} path='/art' />
            </Routes>
        </Canvas>
    )
}