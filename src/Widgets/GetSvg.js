import React from 'react';
import { ReactSVG } from 'react-svg';
import Sunny from '../assets/svg/wi-day-sunny.svg';
import Cloudy from '../assets/svg/wi-cloudy.svg';
import Rainy from '../assets/svg/wi-rain.svg';
import Wind from '../assets/svg/wi-strong-wind.svg';
import Humidity from '../assets/svg/wi-humidity.svg';

const GetSvg = ({ type }) => {
  const Svg = (icon) => {
    let templete = null;
    switch (icon) {
      case 'Sunny':
        templete = <ReactSVG src={Sunny} className='icon' />;
        break;
      case 'Clouds':
        templete = <ReactSVG src={Cloudy} className='icon' />;
        break;
      case 'Rain':
        templete = <ReactSVG src={Rainy} className='icon' />;
        break;
      case 'Wind':
        templete = <ReactSVG src={Wind} className='icon' />;
        break;
      case 'Humidity':
        templete = <ReactSVG src={Humidity} className='icon' />;
        break;
      default:
        templete = <ReactSVG src={Sunny} className='icon' />;
    }
    return templete;
  };
  return <div className='svgIcon'>{Svg(type)}</div>;
};

export default GetSvg;
