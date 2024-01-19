import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion"

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );
        const recipes = await data.json();
        setCuisine(recipes.results);
    }
    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);
    // const variants = {
    //     animate: { opacity:  1},
    //     initial: { opacity: 0 },
    //     exit: { opacity: 0 },
    //     transition: { duration: 0.5 }
    // };

    return (
        <Grid>
            {cuisine.map((item) => {
                return(
                    <Card key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
};

const Grid = styled(motion.div)`
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

export default Cuisine