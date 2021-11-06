import { useState, useEffect } from "react";
import techie from "../assets/images/Techie.png";
import smartAttendance from "../assets/images/smartattendance.png";
import stockprediction from "../assets/images/stonks.png";
import automation from "../assets/images/automation.png";
import portfolio from "../assets/images/port.JPG";
import sort from "../assets/images/sort.JPG";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let project = [
      {
        title: "Find Techie",
        description:
          "A Twitter bot that scans Twitter for job/intern posting and retweets top tweets daily. If the recruiter tags him in his/her tweet it retweets the tweet",
        image: techie,
        link: "https://twitter.com/FindTechie",
      },
      {
        title: "Smart Attendance App",
        description:
          "A mobile app in which the user can track and mark attendance using face verification. Read more on Github",
        image: smartAttendance,
        github: "https://github.com/teshank2137/smartAtendence",
      },
      {
        title: "Stock Market Prediction API",
        description:
          "An API Which predicts the next day's closing price of a stock also using algorithmic trading and Machine Learning, it gives buy & sell flags. Read more on github",
        image: stockprediction,
        github: "https://github.com/teshank2137/stockprediction",
      },

      {
        title: "Algorithm Visualizer",
        description:
          "Web App to visualize the searching and sorting algorithms",
        image: sort,
        link: "https://teshank2137.github.io/#/",
      },
      {
        title: "My Portfolio",
        description:
          "An interactive 3D-portfolio website built using Reactjs and Threejs showcasing my work with proper use of UI/ UX concepts",
        image: portfolio,
        link: "https://teshankraut.vercel.com",
        github: "https://github.com/teshank2137/portfolio",
      },
      {
        title: "Project Automation",
        description:
          "A command line tool for windows which automates project initialization process for you. Read more on Github",
        image: automation,
        // link: "https://teshankraut.vercel.com",
        github: "https://github.com/teshank2137/Project_automation",
      },
    ];
    setProjects(project);
  }, []);

  return projects;
};

export default useProjects;
