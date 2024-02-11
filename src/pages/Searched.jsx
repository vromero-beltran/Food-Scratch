import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useSWR from "swr";
import "./css/Searched.css"

function Searched() {
  let params = useParams();
  const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  };

  const { data: searchedRecipes, error } = useSWR(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params.search}`, fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (!searchedRecipes) {
    return <div>loading...</div>;
  }
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        console.log(item.id);
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img className="img" src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched;
