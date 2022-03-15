import Marquee from "react-fast-marquee";
import JobCard from "../components/Card";
import ReactCardCarousel from "react-card-carousel";
import MarqueeContent from "../sections/marqueeContents";
import SkillText from "../sections/SkillText";
import StyledSkill from "./styles/StyledSkill";

const SkillPage = () => (
  <StyledSkill>
    <div className="skill-container">
      <SkillText />
      <div className="cards">
        <ReactCardCarousel>
          <JobCard
            position="Software Development Intern"
            compName="Geniobits"
            timestamp="Dec 2021-Mar 2022"
            description={[
              "Built and Designed Rest API using Django",
              "Researched and implemented UI/UX for a website in React",
              "Integrated PayTM payment gateway for web applications",
            ]}
          />
          <JobCard
            style={{ width: "22rem", height: "18rem" }}
            position="Full Stack Developer"
            compName="D.Y. Patil Robotics and A.I. Club"
            timestamp="Aug 2020-Feb 2022"
            description={[
              "Lead Team for various web/app projects",
              "Organized HashCode 2021",
            ]}
          />
        </ReactCardCarousel>
      </div>
    </div>
    <div className="marquee-container">
      <Marquee gradient={false} pauseOnHover={true}>
        <MarqueeContent />
      </Marquee>
    </div>
  </StyledSkill>
);

export default SkillPage;
