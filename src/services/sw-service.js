import axios from "axios";

export const getPeople = (id) => {
  return axios
    .get(`https://swapi.dev/api/people/${id}/`)
    .then((res) => res.data);
};

export const getPlanet = (id) => {
  return axios
    .get(`https://swapi.dev/api/planets/${id}/`)
    .then((res) => res.data);
};

export const getStarships = (id) => {
  return axios
    .get(`https://swapi.dev/api/starships/${id}/`)
    .then((res) => res.data);
};

export const getImg = {
  getPeopleImg(id) {
    return axios
      .get(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)
      .then((res) => res)
      .catch((err) => err);
  },
  getPlanetImg(id) {
    return axios
      .get(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`)
      .then((res) => res)
      .catch((err) => err);
  },
  getStarshipImg(id) {
    return axios
      .get(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
      .then((res) => res)
      .catch((err) => err);
  },
};
