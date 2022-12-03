const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const WEATHER_DATA = 'WEATHER_DATA';

export const concatData = (data) => {
  return {
    type: WEATHER_DATA,
    payload: data,
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetch(baseUrl)
      .then((data) => data.json())
      .then((data) => dispatch(concatData(data)));
  };
};
