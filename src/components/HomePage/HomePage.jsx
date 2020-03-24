import React, { Component } from "react";
import * as fetchAPI from '../../service/fetcheAPI'
import FilmList from "./FilmList/FilmList";
import style from "./HomePage.module.css"

export default class HomePage extends Component {
  state = {
    filmsList: []
  }

  componentDidMount() {
    fetchAPI.fetchPopularFilms()
      .then(({ results }) => this.setState({ filmsList: results }))
      .catch(console.log)
  }


  render() {
    const { filmsList } = this.state
    return (
      <div className={style.homePage}>
        <h2>Trending now</h2>
        <FilmList list={filmsList} />
      </div>
    )
  }
}