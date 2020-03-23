import React from "react";
import { Link, withRouter } from "react-router-dom";
import style from './FilmList.module.css'
import PropTypes from 'prop-types';

const FilmList = ({ list, location }) =>
  <ul className={style.list}>
    {list.map(({ title, id }) =>
      <li key={id}>
        <Link to={{
          pathname: `/movies/${id}`,
          state: { from: location }
        }}>{title}</Link >
      </li>
    )}
  </ul>

FilmList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        id: PropTypes.string
      }
    )
  )
}


export default withRouter(FilmList)