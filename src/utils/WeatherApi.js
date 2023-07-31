class WeatherApi {
  constructor(key) {
    this._key = key;
  }
  async getWeather(ip) {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${ip}&days=14&key=${this._key}%20`
    );
    const data = await res.json();
    return data;
  }
}

const weatherApi = new WeatherApi("9de4ea156227409a8a922814232105");

export default weatherApi;
