import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

a {
  text-decoration: none;
}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url("https://i0.wp.com/lgvpa.org/wp-content/uploads/2019/07/andrew-ruiz-kmAAlcld6wA-unsplash.jpg?fit=1568%2C1047&ssl=1")
    center/cover no-repeat; */
  background: #000 ${({ img }) => `url(${img})`}center / cover no-repeat;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// const API_KEY = process.env.VITE_API_KEY;
const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState(null);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.errror(e);
    }
  };

  const handleCityChange = (city) => {
    if (city === "current") setCity(null);
    else setCity(city);
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);
  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  const getBackground = () => {
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_KEY}`;
    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => {
        setBackground(full);
      });
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      getBackground();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  console.log(background);

  return (
    <>
      <GlobalStyles />
      <Wrapper img={background}>
        <Contents>
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </>
  );
};

export default App;
