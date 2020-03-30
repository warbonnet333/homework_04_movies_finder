import React, { Component } from 'react'
import * as fetchAPI from "../../service/fetcheAPI"
import getIdFromProps from '../../helpers/getIdFromProps'
import CastList from "./CastList"

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
    return cast.length && <CastList cast={cast} />
  }
}