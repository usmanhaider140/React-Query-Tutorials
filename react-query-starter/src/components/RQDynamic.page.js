import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchSuperHeroData = (id) => {
  const heroId = id;
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const RQDynamicParallel = ({ heroesId }) => {
  const results = useQueries(
    heroesId.map((heroId) => {
      return {
        queryKey: ["superHeroData", heroId],
        queryFn: () => fetchSuperHeroData(heroId),
      };
    })
  );
  console.log(results);
  return <div>RQDynamic.page</div>;
};
