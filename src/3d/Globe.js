import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import earth from "../assets/images/earthmap4k.jpg";
import earthBump from "../assets/images/earthbump4k.jpg";
import clouds from "../assets/images/earthclouds4k.png";
import useIsMobile from "../customHooks/useIsMobile";

const Globe = () => {
    const earthRef = useRef();
    const cloudRef = useRef();
    const ismobile = useIsMobile();

    const [earthTexture, bump, cloud] = useLoader(TextureLoader, [
        earth,
        earthBump,
        clouds,
    ]);
    useFrame(({ clock }) => {
        // earthRef.current.rotation.x = clock.getElapsedTime() * -0.001;
        earthRef.current.rotation.y = clock.getElapsedTime() * 0.06;
        // cloudRef.current.rotation.x = clock.getElapsedTime() * 0.02;
        cloudRef.current.rotation.y = clock.getElapsedTime() * 0.22;
    });
    return (
        <group>
            <mesh ref={earthRef}>
                <sphereGeometry
                    attach="geometry"
                    args={ismobile ? [1, 16, 16] : [2.2, 32, 32]}
                />
                <meshPhongMaterial
                    attach="material"
                    map={earthTexture}
                    bumpMap={bump}
                    specular={0x222222}
                    bumpScale={0.3}
                    shininess={25}
                />
            </mesh>
            <mesh ref={cloudRef}>
                <sphereGeometry
                    attach="geometry"
                    args={ismobile ? [1.1, 16, 16] : [2.3, 32, 32]}
                />
                <meshPhongMaterial
                    attach="material"
                    map={cloud}
                    transparent={true}
                    specular={0x222222}
                    opacity={0.8}
                    shininess={25}
                />
            </mesh>
        </group>
    );
};

export default Globe;
