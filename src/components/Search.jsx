import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FormStyle } from './Styles';

export default function Search() {

  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input} />
      </div>
    </FormStyle>
  )
}
