import { StyledAbout } from "./styles/StyledAbout";
import AboutText from "../sections/AboutText";
import About3D from "../sections/About3D";

const About = () => {
  return (
    <StyledAbout className="about">
      <AboutText />
      <About3D />
    </StyledAbout>
  );
};

export default About;
