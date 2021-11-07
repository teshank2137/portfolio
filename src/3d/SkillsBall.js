import { useFrame, extend } from "@react-three/fiber";
import TextSprite from "@seregpie/three.text-sprite";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
extend({ TextSprite });

const Skills = () => {
  const getPos = (k) => {
    let a = Math.random();
    let b = Math.random();
    return b > 0.5 ? a * k : a * -1 * k;
  };
  const skills = [
    "Python",
    "JavaScript",
    "Dart",
    "Django",
    "Flutter",
    "React",
    "Redux",
    "Nodejs",
    "Express",
    "HTML",
    "CSS",
    "SQL",
    "NO SQL",
    "ThreeJs",
    "Flask",
    "GCP",
    "AWS",
    "Machine Learning",
    "C/C++",
    "Java",
    "Data Science",
    "npm",
    "Git",
    "Github",
    "MySQL",
    "Postgres",
    "MongoDB",
  ];
  const g = useRef();
  useFrame(() => {
    g.current.rotation.x += 0.004;
    g.current.rotation.y += 0.004;
    // g.current.rotation.z += 0.001;
  });
  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} />
      <pointLight position={[-2, 2, 2]} args={["#fff", 0.3]} />
      <group ref={g} position={[0.35, 0, 0]} scale={0.8}>
        {skills.map((a, i) => {
          return (
            <textSprite
              text={a}
              key={i}
              fontSize={0.33}
              position={[getPos(3), getPos(3), getPos(3)]}
              color={i % 2 === 0 ? "#FAFF81" : "#E06D06"}
            />
          );
        })}
      </group>
    </>
  );
};

export default Skills;
