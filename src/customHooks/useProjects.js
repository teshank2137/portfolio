import { useState, useEffect } from "react";
import techie from "../assets/images/Techie.png";
import smartAttendance from "../assets/images/smartattendance.png";
import stockprediction from "../assets/images/stonks.png";
import fanmerch from "../assets/images/fanmerch.png";
import portfolio from "../assets/images/port.JPG";
import sort from "../assets/images/sort.JPG";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let project = [
      {
        title: "Fan Merch",
        description: [
          "A conceptual website for social media influencers to sell their merch.",
          "Built with ReactJS, Django-Rest-Framework, MySQL and Razorpay.",
        ],
        image: fanmerch,
        link: "https://fan-merch.vercel.app/",
        github: "https://github.com/teshank2137/fanMerch",
      },
      {
        title: "Find Techie",
        description: [
          "A Twitter bot that scans Twitter for job/intern posting and retweets top tweets daily.",
          "If the recruiter tags him in his/her tweet it retweets the tweet",
          "Built with Python and Tweepy.",
        ],
        image: techie,
        link: "https://twitter.com/FindTechie",
      },
      {
        title: "Smart Attendance App",
        description: [
          "A mobile app in which the user can track and mark attendance using face verification.",
          "Teacher can manage and store the attendance of the students.",
          "Built with Flutter, Django-Rest-Framework and MySQL",
        ],
        image: smartAttendance,
        github: "https://github.com/teshank2137/smartAtendence",
      },
      {
        title: "Stock Market Prediction API",
        description: [
          "An API Which predicts the next day's closing price of a stock.",
          "Using algorithmic trading and Machine Learning, it gives buy & sell flags.",
          "Built with Python, Scikit-Learn, Flask",
        ],
        image: stockprediction,
        github: "https://github.com/teshank2137/stockprediction",
      },

      {
        title: "Algorithm Visualizer",
        description: [
          "Web App to visualize the searching and sorting algorithms",
          "Built with Flutter",
        ],
        image: sort,
        link: "https://teshank2137.github.io/#/",
      },
      {
        title: "My Portfolio",
        description: [
          "An interactive 3D-portfolio showcasing my work and skills.",
          "Built using ReactJS, ThreeJS, CSS3 and lots of ❤️ love.",
        ],
        image: portfolio,
        link: "https://teshankraut.me",
        github: "https://github.com/teshank2137/portfolio",
      },
    ];
    setProjects(project);
  }, []);

  return projects;
};

export default useProjects;
