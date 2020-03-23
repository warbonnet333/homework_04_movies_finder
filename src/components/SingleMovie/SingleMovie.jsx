import React, { Component } from "react";
import * as fetchAPI from '../../service/fetcheAPI'
import PageSingleMovie from './PageSingleMovie'
import getIdFromProps from '../../helpers/getIdFromProps'


export default class SingleMovie extends Component {
  state = {
    film: null,
    id: ""
  }

  componentDidMount() {
    const id = getIdFromProps(this.props)
    fetchAPI.fetchFilmById(id).then(film => this.setState({ film, id }))
  }

  goBackClick = () => {
    this.props.history.push(this.props.location.state ? this.props.location.state.from : "/")
  }

  render() {
    const { film } = this.state
    return (
      <>
        <button type="button" onClick={this.goBackClick}>Go back</button>
        <PageSingleMovie {...film} />
      </>
    )
  }
}