import React from 'react'
import PropTypes from 'prop-types';

const CastItem = ({ cast }) =>
  <ul>
    {cast.map(({ name, id, character, profile_path }) =>
      <li key={id}><img src={`https://image.tmdb.org/t/p/w185${profile_path}`} alt={name} />
        <p>
          {name}
        </p>
        <p>
          Character: {character}
        </p>
      </li>
    )}
  </ul>

CastItem.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string
    })
  )
}

export default CastItem





