import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {

    return React.useContext(ThemeContext);
};