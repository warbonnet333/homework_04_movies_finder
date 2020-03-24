import React, { Component } from "react"
import * as fetchAPI from '../../service/fetcheAPI'
import getIdFromProps from '../../helpers/getIdFromProps'
import ReviewsList from "./ReviewsList"


export default class Reviews extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    const id = getIdFromProps(this.props)
    fetchAPI.fetchReviewsById(id)
      .then(({ results }) => this.setState({ results }))
      .catch(console.log)
  }


  render() {
    const { results } = this.state
    return results.length ? <ReviewsList reviews={results} /> : <h3>We dont have reviews, sorry</h3>
  }
}