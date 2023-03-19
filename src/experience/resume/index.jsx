import DefaultEnvironment from '../DefaultEnvironment'
import { Html } from '@react-three/drei'

export default function Resume() {
  return (
    <>
      <DefaultEnvironment />
      
      <mesh>
        <boxGeometry />
        <meshStandardMaterial/>
      </mesh>
    </>
  );
}
