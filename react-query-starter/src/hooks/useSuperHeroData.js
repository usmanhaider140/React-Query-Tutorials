import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeroData = (props) => {
  console.log(props);
  const heroId = props.queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const useSuperHeroData = (heroId) => {
  return useQuery(["superHeroData", heroId], fetchSuperHeroData);
};
