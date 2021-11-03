import Js from "../assets/icons/js.gif";
import Aws from "../assets/icons/FavoritesSvg/aws.svg";
import cpp from "../assets/icons/FavoritesSvg/cpp.svg";
import css from "../assets/icons/FavoritesSvg/css.svg";
import dart from "../assets/icons/FavoritesSvg/dart.svg";
import flutter from "../assets/icons/FavoritesSvg/flutter.svg";
import html from "../assets/icons/FavoritesSvg/html.svg";
import gcp from "../assets/icons/FavoritesSvg/gcp.svg";
import git from "../assets/icons/FavoritesSvg/git.svg";
import hub from "../assets/icons/FavoritesSvg/hub.svg";
import mongo from "../assets/icons/FavoritesSvg/mongo.svg";
import mysql from "../assets/icons/FavoritesSvg/mysql.svg";
import postgres from "../assets/icons/FavoritesSvg/postgres.svg";
import dj from "../assets/icons/FavoritesSvg/dj.svg";
import redux from "../assets/icons/FavoritesSvg/redux.svg";
import xd from "../assets/icons/xd.gif";
import react from "../assets/icons/react.gif";
import py from "../assets/icons/py.gif";
import three from "../assets/icons/Threejs-logo.svg";
import node from "../assets/icons/FavoritesSvg/nodejs.svg";
import ex from "../assets/icons/FavoritesSvg/ex.png";

import SingleLogo from "../components/singleLogo";

const marqueeContents = [
  postgres,
  mongo,
  react,
  Js,
  three,
  html,
  css,
  dj,
  py,
  flutter,
  dart,
  cpp,
  git,
  hub,
  redux,
  mysql,
  node,
  ex,
  xd,
  Aws,
  gcp,
];

const MarqueeContent = () => {
  return marqueeContents.map((item) => <SingleLogo key={item} logo={item} />);
};

export default MarqueeContent;
