import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Skills from "../3d/SkillsBall";
import Loading from "../pages/Loading";

const About3D = () => {
  return (
    <section className="about-3d">
      <Suspense fallback={<Loading />}>
        <div className="skills-3d">
          <Canvas camera={{ position: [0, 0, 18] }}>
            <Skills />
          </Canvas>
        </div>
      </Suspense>
    </section>
  );
};

export default About3D;
