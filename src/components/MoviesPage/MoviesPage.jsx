import React, { Component } from "react";
import * as fetchAPI from '../../service/fetcheAPI'
import FilmList from '../HomePage/FilmList/FilmList'
import getQueryFromLocation from '../../helpers/getQFromLoc'
import style from './MoviesPage.module.css'



export default class MoviesPage extends Component {
  state = {
    results: [],
    value: ""
  }

  componentDidMount() {
    const qsValue = getQueryFromLocation(this.props.location)

    if (qsValue) {
      fetchAPI.fetchFilmsByQuery(qsValue)
        .then(({ results }) => this.setState({ results }))
        .catch(console.log)
      return
    }
  }

  hendleChange = (e) => {
    const { value } = e.target

    if (value) {
      return this.props.history.push({
        ...this.props.location,
        search: `query=${value}`
      })
    }

    this.props.history.push({
      ...this.props.location,
      search: ''
    })

  }


  hendleSubmit = (e) => {
    e.preventDefault()
    const qsValue = getQueryFromLocation(this.props.location)

    fetchAPI.fetchFilmsByQuery(qsValue)
      .then(({ results }) => this.setState({ results }))
      .catch(console.log)
  }

  render() {
    const { results, value } = this.state
    const qsValue = getQueryFromLocation(this.props.location)
    return (
      <div className={style.moviesPage} >
        <h2>Movies Page</h2>

        <form onSubmit={this.hendleSubmit} className={style.form}>
          <input type="text" value={qsValue ? qsValue : value} onChange={this.hendleChange} placeholder="Try to find here" required />
          <input className={style.subm} type="submit" value="Search" />
        </form>
        {results.length > 0 && <FilmList list={results} />
        }
      </div>

    )
  }
}