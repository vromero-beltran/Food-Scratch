import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./css/Search.css";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <FaSearch className="fasearch"></FaSearch>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </form>
  );
}

export default Search;
