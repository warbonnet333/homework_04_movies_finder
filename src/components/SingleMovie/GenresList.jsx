import React from "react";
import { v4 as uuidv4 } from 'uuid';

const GenresList = ({ array }) =>
  <ul>
    {array.map(({ name }) => <li key={uuidv4()}>{name}</li>)}
  </ul>

export default GenresList


