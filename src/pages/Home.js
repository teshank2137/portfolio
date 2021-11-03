import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import "./styles/home.css";
import useIsMobile from "../customHooks/useIsMobile";
import SingleRoom from "../3d/SingleRoom";
import font from "../assets/fonts/Poppins-Bold.ttf";

const Home = () => {
  const ismobile = useIsMobile();
  const color = "white";
  const textBlur = 0.005;
  return (
    <div className="home">
      <Canvas>
        {!ismobile ? (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
          />
        ) : null}
        <pointLight position={[-4, 3, 3]} args={["#aaa", 0.3]} />

        <SingleRoom />
        <group>
          <Text
            color={color}
            position={ismobile ? [-0.67, 0.25, 3] : [-1.43, 0.48, 3]}
            scale={ismobile ? 0.9 : 1.5}
            outlineBlur={textBlur}
            font={font}
          >
            Hi!
          </Text>
          <Text
            color={color}
            position={ismobile ? [-0.51, 0.25, 3] : [-1.44, 0.14, 3]}
            scale={ismobile ? 0.9 : 1}
            outlineBlur={textBlur}
            font={font}
          >
            I'm
          </Text>
          <Text
            color={color}
            position={ismobile ? [-0.1, 0.1, 3] : [-0.3, 0.203, 3]}
            scale={ismobile ? 1.8 : 3}
            outlineBlur={textBlur}
            font={font}
          >
            Teshank Raut
          </Text>
          <Text
            color={color}
            position={ismobile ? [0.1, -0.08, 3] : [0.8, -0.18, 3]}
            scale={ismobile ? 1.1 : 2}
            outlineBlur={textBlur}
            font={font}
          >
            Full Stack Developer
          </Text>
        </group>
      </Canvas>
    </div>
  );
};

export default Home;
