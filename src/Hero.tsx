import React from 'react';
import { IHeroComp } from './types';
import { ThemeContext, ThemeValues, TypeTheme } from './context/ThemeContext';
import { useTheme } from './customHooks/useTheme';

const Hero: React.FC<IHeroComp> = ({title, subtitle}) => {

  // const { theme } = React.useContext(ThemeContext);
  const {theme, changeTheme} = useTheme(); //Utilizando el customHoook
  console.log({theme});

  return (
    // <section className="hero is-link">
    <>
      <section className={`hero ${theme}`} style={{marginBottom: '.4rem'}} >
        <div className="hero-body">
          <p className="title">
            {title}
          </p>
          {
            subtitle && (
              <p className="subtitle">
                {subtitle}
              </p>
            )
          }
        </div>
      </section>
      <div className={`select ${theme}`} style={{marginBottom: '.4rem'}}>
        {/* Como changeTheme es opcional, ts pide una validación: preguntar si viene  */}
        <select name="" id="" onChange={({target})=>changeTheme && changeTheme(target.value as TypeTheme)} >
          <option value={ThemeValues.link}>Link</option>
          <option value={ThemeValues.primary}>Primary</option>
          <option value={ThemeValues.secondary}>Secondary</option>
          <option value={ThemeValues.success}>Succcess</option>
          <option value={ThemeValues.warning}>Warning</option>
          <option value={ThemeValues.danger}>Danger</option>
        </select>
      </div>
    </>
  );
};

export default Hero;