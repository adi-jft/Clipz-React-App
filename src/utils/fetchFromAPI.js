import axios from "axios";

const base_url="https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    regionCode: "IN",
    maxResults: '50',
    order: 'date'
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${base_url}/${url}`, options);
    return data;
}