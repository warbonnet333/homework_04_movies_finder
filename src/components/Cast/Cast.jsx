import React, { Component } from 'react'
import * as fetchAPI from "../../service/fetcheAPI"
import getIdFromProps from '../../helpers/getIdFromProps'
import CastItem from "./CastItem"

export default class Cast extends Component {
  state = { cast: [] }

  componentDidMount() {
    const id = getIdFromProps(this.props)
    fetchAPI.fetchCastById(id)
      .then(({ cast }) => this.setState({ cast }))
      .catch(console.log)
  }

  render() {
    const { cast } = this.state
    return (
      cast.length && <CastItem cast={cast} />
    )
  }
}