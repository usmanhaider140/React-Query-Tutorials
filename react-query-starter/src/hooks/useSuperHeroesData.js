import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

export const useSuperHeroesData = (onSuccess, onError, pollingInterval) => {
  return useQuery("superHeroes", fetchSuperHeroes, {
    onError,
    onSuccess,
    // select: ({ data }) => {
    //   const superHeroNames = data.map(({ name }) => name);
    //   return superHeroNames;
    // },
    // refetchInterval: pollingInterval,
    // refetchIntervalInBackground: true,
  });
};
