import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./css/Cuisine.css"
import useSWR from "swr";

function Cuisine() {
  let params = useParams();
  const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  };

  const { data: cuisine, error } = useSWR(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${params.type}`, fetcher
    );
    if (error) {
      return <div>failed to load</div>;
    }
    if (!cuisine) {
      return <div>loading...</div>;
    }
  const variants = {
    animate: { opacity: 1 },
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <Grid
      className="grid"
      animate={variants.animate}
      initial={variants.initial}
      exit={variants.exit}
    >
      {cuisine.map((item) => {
        return (
          <Card className="card" key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
