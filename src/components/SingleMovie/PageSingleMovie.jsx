import React from "react";
import GenresList from './GenresList'
import styles from '../SingleMovie/SingleMovie.module.css'
import PropTypes from 'prop-types';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'


const PageSingleMovie = ({ title, genres, overview, popularity, poster_path, id }) =>
  <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} />
      </div>
      <div className={styles.descr}>
        <h2>{title}</h2>
        <h3>Genres</h3>
        {genres && <GenresList array={genres} />}
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Popularity</h3>
        <p>{popularity}</p>
      </div>
    </div>
    <AdditionalInfo id={id} />
  </>

PageSingleMovie.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ),
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string
}

export default PageSingleMovie


