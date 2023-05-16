import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
    const { theme } = useTheme();
    console.log(theme, "theme inside header function")

    return (
        <div style={{ backgroundColor: theme === 'light' ? "yellow" : 'blue' }}>
            <p>So the Current theme is - {theme} !</p>
        </div>
    )
}

export default Header