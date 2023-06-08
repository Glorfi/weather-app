class GeoApi {
  constructor(token) {
    this._token = token;
  }
  getUserIp() {
    return fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${this._token}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((er) => console.log(er));
  }
}

const geoApi = new GeoApi("66d94a998a374e8e9e05eefe549f5856");

export default geoApi;