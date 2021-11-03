import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import singleRoom from "../assets/3d/scene1.glb";
import useIsMobile from "../customHooks/useIsMobile";

const SingleRoom = () => {
    const ismobile = useIsMobile();
    const gltf = useLoader(GLTFLoader, singleRoom);
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.rotation.y =
            Math.sin(clock.getElapsedTime() * 0.2) * 0.4 + 0.9;
        ref.current.rotation.x = 0.25;
    });
    return (
        <>
            <ambientLight intensity={0.26} />
            <primitive
                object={gltf.scene}
                position={[0, 0, 0]}
                scale={ismobile ? 0.38 : 0.5}
                ref={ref}
            />
        </>
    );
};

export default SingleRoom;
