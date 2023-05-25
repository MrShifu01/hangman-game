import "../index.css"
import { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
  // setting the base theme as luxury
    const [theme, setTheme] = useState('luxury');
    // switch themes
    const toggleTheme = () => {
      setTheme(theme === 'luxury' ? 'lemonade' : 'luxury');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
      document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    return (
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on"><i className='bx bxs-moon'></i></div>
        <div className="swap-off"><i className='bx bxs-sun' ></i></div>
      </label>
    );
  }