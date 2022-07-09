import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FormStyle } from './Styles';

export default function Search() {
  return (
    <FormStyle>
      <div>
        <FaSearch></FaSearch>
        <input type="text" />
      </div>
    </FormStyle>
  )
}
