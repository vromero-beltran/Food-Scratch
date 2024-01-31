import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <Fa></Fa>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </FormStyle>
  );
}

const Fa = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;

const FormStyle = styled.form`
    margin: 0rem 2rem;
    position: relative;
    width: 100%;
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 50%
        transform: translateY(-50%);
        color: white;
    }
`;

export default Search;
