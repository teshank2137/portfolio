import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

import GlobeWithMoon from "../3d/GlobeWithMoon";
import useIsMobile from "../customHooks/useIsMobile";

const Home = () => {
    const ismobile = useIsMobile();
    return (
        <div className="threed-container">
            <Canvas>
                <pointLight position={[-4, 3, 3]} args={["#ffd6b5", 1]} />
                <GlobeWithMoon />
                <Text
                    position={ismobile ? [-0.7, 0.23, 3] : [-1.33, 0.48, 3]}
                    scale={ismobile ? 0.6 : 1.5}
                >
                    Hi!
                </Text>
                <Text
                    position={ismobile ? [-0.7, 0.07, 3] : [-1.33, 0.142, 3]}
                    scale={ismobile ? 0.45 : 1}
                >
                    I'm
                </Text>
                <Text
                    position={ismobile ? [-0.18, 0.1, 3] : [-0.3, 0.2, 3]}
                    scale={ismobile ? 1.6 : 3}
                >
                    Teshank Raut
                </Text>
                <Text
                    position={ismobile ? [0.3, -0.05, 3] : [0.8, -0.2, 3]}
                    scale={ismobile ? 1 : 2}
                >
                    Full Stack Developer
                </Text>
            </Canvas>
        </div>
    );
};

export default Home;
