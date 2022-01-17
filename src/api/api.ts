import axios from "axios";

const API = axios.create({baseURL: "https://api.jikan.moe/v3"});

//fetch all animes
export const getAllAnimes = (query: string , page:number|undefined = 1) => API.get(`/search/anime?q=${query}&page=${page ? page : 1}&limit=12`);

//fetch anime by id
export const getAnime = (id: any) => API.get(`/anime/${id}`);



