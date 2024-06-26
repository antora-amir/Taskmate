import Logo from "../assets/logo.png"
const Header = ({ theme, setTheme, children }) => {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Taskmate" />
                <span>{children}</span>
                <span>Taskmate</span>
            </div>
            <div className="themeSelector">
                <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
                <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
                <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
                <span className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
                <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} onClick={() => setTheme("gradientTwo")}></span>
                <span className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}></span>

            </div>
        </header>
    )
}

export default Header
