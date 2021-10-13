import "./navbar.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../components/logo";
import { NavButton } from "../components/nav-button";

export const NavBar = () => {
    const toggleVisibility = () => {
        const el = document.querySelector(".navbar");
        el.style.display = "none";
        const se = document.querySelector(".menu-icon");
        se.style.display = "block";
    };
    return (
        <section className="navbar">
            <button className="icon-close" onClick={toggleVisibility}>
                <CloseIcon />
            </button>
            <button className="logo">
                <Logo />
            </button>
            <div className="nav-buttons">
                <ul>
                    <li className="nav-tile">
                        <NavButton value="Home" icon={<HomeIcon />} />
                    </li>
                    <li className="nav-tile">
                        <NavButton value="About" icon={<InfoIcon />} />
                    </li>
                    <li className="nav-tile">
                        <NavButton value="My Skills" icon={<SchoolIcon />} />
                    </li>
                    <li className="nav-tile">
                        <NavButton value="Work" icon={<WorkIcon />} />
                    </li>
                    <li className="nav-tile">
                        <NavButton
                            value="Contact"
                            icon={<AlternateEmailIcon />}
                        />
                    </li>
                </ul>
            </div>
            <div className="socials">
                <li>
                    <a
                        target="_blank"
                        href="https://github.com/teshank2137"
                        rel="noreferrer"
                    >
                        I
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://github.com/teshank2137"
                        rel="noreferrer"
                    >
                        I
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://github.com/teshank2137"
                        rel="noreferrer"
                    >
                        I
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://github.com/teshank2137"
                        rel="noreferrer"
                    >
                        I
                    </a>
                </li>
            </div>
        </section>
    );
};
