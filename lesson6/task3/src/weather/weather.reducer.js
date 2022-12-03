import { WEATHER_DATA, getWeatherData } from './weather.actions';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case WEATHER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default weatherReducer;
