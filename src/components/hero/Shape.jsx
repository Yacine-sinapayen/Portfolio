import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  const mainColor2 = getComputedStyle(document.documentElement).getPropertyValue(
    "--main-color-1"
  );
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.6}>
        <MeshDistortMaterial
          color={mainColor2}
          attach="material"
          distort={0.4}
          speed={2}
        />
      </Sphere>
      <directionalLight position={[1, 2, 3]} intensity={4} />
    </>
  );
};

export default Shape;