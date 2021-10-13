import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
// import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";
import moonImage from "../assets/images/moon.jpg";
import useIsMobile from "../customHooks/useIsMobile";

const GlobeWithMoon = () => {
    const ismobile = useIsMobile();
    const grpRef = useRef();
    const moonTexture = useLoader(TextureLoader, moonImage);
    useFrame(({ clock }) => {
        grpRef.current.rotation.y = clock.getElapsedTime() * 0.18;
        // grpRef.current.rotation.x = clock.getElapsedTime() * 0.18;
        // grpRef.current.rotation.z = clock.getElapsedTime() * 0.18;
        // grpRef.current.rotation.x += 0.0002;
    });
    return (
        <group>
            {/* <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
            /> */}
            <Globe />
            <group ref={grpRef}>
                <mesh position={ismobile ? [3, 1.1, -1] : [4, 1.5, -1]}>
                    <sphereGeometry
                        attach="geometry"
                        args={ismobile ? [0.2, 16, 16] : [0.45, 12, 12]}
                    />
                    <meshStandardMaterial attach="material" map={moonTexture} />
                </mesh>
            </group>
        </group>
    );
};

export default GlobeWithMoon;
