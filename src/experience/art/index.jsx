import DefaultEnvironment from '../DefaultEnvironment'

export default function Art() {
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
