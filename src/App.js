import React, { useState } from 'react';
import './App.scss';
import Axios from 'axios';

import { GetDate } from './Widgets/Date';
import GetSVG from './Widgets/GetSvg';
const apiURL = {
  key: 'f2e49eb09ac886ba0837ff27886750ca',
  base: 'https://api.openweathermap.org/data/2.5',
};
const App = () => {
  const [query, setQuery] = useState('');
  const [data, setdata] = useState({});
  const [weather, setWeather] = useState({});
  const [wind, setwind] = useState({});
  const [coordinate, setCoordinate] = useState({});
  const [name, setName] = useState('');

  const search = (evt) => {
    if (evt.key === 'Enter') {
      if (query === '') {
        alert('Enter Your City Name \n Example: Paris');
      } else {
        Axios.get(
          `${apiURL.base}/weather?q=${query}&units=metric&APPID=${apiURL.key}`
        )
          .then((response) => {
            setdata(response.data);
            setwind(response.data.wind);
            setCoordinate(response.data.coord);
            setWeather(response.data.weather[0]);
            setName(response.data.name);
            setQuery('');
          })
          .catch((err) => {
            alert(
              `Check your city name Properly \n ${query} is not found in our API`
            );
            setQuery('');
          });
      }
    }
  };

  const onInputChange = (e) => {
    let input = e.target.value;
    setQuery(input);
  };
  return (
    <div className='app bg'>
      <main>
        <h1>Today's Weather Update</h1>
        <div className='date'>
          <GetDate />
        </div>
        <div className='search-box'>
          <input
            type='text'
            placeholder='Enter Your City Name'
            className='search-bar'
            onChange={(e) => onInputChange(e)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {JSON.stringify(data) !== '{}' ? (
          <div className='data_box'>
            <div className='location-box'>
              <div className='location'>
                {name},{data.sys.country}
              </div>
            </div>
            <div className='coordinates'>
              <span>
                <strong>Longitude</strong> : {coordinate.lon}
              </span>
              <span>
                <strong>Latitude</strong> : {coordinate.lat}
              </span>
            </div>
            <div className='weather-box'>
              <div className='indicator-Icon'>
                <GetSVG type={weather.main} />
              </div>
              <div className='temp'>
                <h1>{Math.round(data.main.temp)}</h1>
                <span>° C</span>
              </div>
              <div className='weather'>
                <strong>{weather.description}</strong>
              </div>
              <div className='small_Panel'>
                <div className='wind'>
                  <div className='indicator-Icon'>
                    <GetSVG type='Wind' />
                  </div>
                  <span>
                    Wind : <strong>{wind.speed}</strong>
                  </span>
                </div>
                <div className='humidity'>
                  <div className='indicator-Icon'>
                    <GetSVG type='Humidity' />
                  </div>
                  <span>
                    Humidity : <strong>{data.main.humidity}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h3>Wanted to Find out Your City's Weather then Search for it</h3>
        )}
      </main>
    </div>
  );
};

export default App;
