import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import dog from "../assets/3d/dog.glb";
import useIsMobile from "../customHooks/useIsMobile";

const Dog = () => {
  const gltf = useLoader(GLTFLoader, dog);
  const ref = useRef();
  const ismobile = useIsMobile();
  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });
  return (
    <primitive
      object={gltf.scene}
      position={ismobile ? [0, -0.2, 0] : [0, 0, 0]}
      scale={ismobile ? 0.7 : 0.5}
      ref={ref}
    />
  );
};

export default Dog;
