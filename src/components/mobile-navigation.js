import MenuIcon from "@mui/icons-material/Menu";

const MenuMobile = () => {
    const toggleVisibility = () => {
        const el = document.querySelector(".navbar");
        el.style.display = "flex";
        const se = document.querySelector(".menu-icon");
        se.style.display = "none";
    };
    return (
        <button className="mobile menu-icon" onClick={toggleVisibility}>
            <MenuIcon />
        </button>
    );
};

export default MenuMobile;
