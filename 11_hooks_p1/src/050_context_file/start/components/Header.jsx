import { useContext } from "react";
import { ThemeContext } from "../Example";

const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);
  const THEMES = ['light', 'dark', 'red'];
  const changeTheme = (e) => setTheme(e.target.value)
    return (
        <header className={`content-${theme}`}>
        {THEMES.map((t) => {
          return (
            <label>
              <input type="radio" key={t} value={t} checked={theme === t} onChange={changeTheme}/>
              {t}
            </label>
          )
        })}
      </header>
    );
};

export default Header;
