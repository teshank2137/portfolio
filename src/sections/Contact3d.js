import Dog from "../3d/Dog";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Contact3d = () => {
  return (
    <div className="contact-3d">
      <Canvas camera={{ position: [0, 3, 5] }}>
        <ambientLight />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Dog />
      </Canvas>
    </div>
  );
};
export default Contact3d;
