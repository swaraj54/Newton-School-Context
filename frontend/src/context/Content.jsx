import React from 'react';
import {     } from './ThemeContext';

const Content = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <div>Content hi content - {theme}</div>
            <button style={{ backgroundColor: theme == "light" ? 'black' : "yellow", color: theme === 'light' ? 'white' : 'black' }} onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button >
        </>
    )
}

export default Content