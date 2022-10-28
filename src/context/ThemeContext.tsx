import React, { createContext } from "react";

// export const themeContext=createContext(null);
// const Provider=themeContext.Provider({ value: null, children: <></> });

export enum ThemeValues {
    primary= 'is-primary',
    secondary= 'is-secondary',
    link= 'is-link',
    success= 'is-success',
    warning= 'is-warning',
    danger= 'is-danger'
};

export type TypeTheme = 
    ThemeValues.danger | 
    ThemeValues.link | 
    ThemeValues.primary | 
    ThemeValues.secondary | 
    ThemeValues.success
    ThemeValues.warning;

interface IThemeContext {
    theme: TypeTheme;
    changeTheme?: React.Dispatch<React.SetStateAction<TypeTheme>>;
};

interface ICreateProvider extends React.PropsWithChildren {
    value?: IThemeContext;
};

const INIT_VALUE_THEME_CONTEXT: IThemeContext = { 
    theme: ThemeValues.link,
    // changeTheme: () => void;
};

export const ThemeContext=createContext<IThemeContext>(INIT_VALUE_THEME_CONTEXT);

export const ThemeProvider:React.FC<ICreateProvider> = ({value=INIT_VALUE_THEME_CONTEXT, children}) => {

    const [theme, setTheme]=React.useState<TypeTheme>(ThemeValues.link);

    console.log(theme)

    return (
        <ThemeContext.Provider value={{theme, changeTheme: setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};