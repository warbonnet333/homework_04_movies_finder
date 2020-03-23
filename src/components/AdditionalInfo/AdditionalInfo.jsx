import React, { Suspense, lazy } from "react"
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import style from './AdditionalInfo.module.css'

const Cast = lazy(() => import("../Cast/Cast" /* webpackChunkName: "cast" */))
const Reviews = lazy(() => import("../Reviews/Reviews" /* webpackChunkName: "reviews" */))

const AdditionalInfo = ({ id, location }) =>
  <div className={style.container}>
    <h3>Additional information</h3>
    <ul className={style.info}>
      <li><Link to={{
        pathname: `/movies/${id}/cast`,
        state: location.state
          ? { from: location.state.from }
          : { from: "/" }

      }}>Cast</Link></li>
      <li><Link to={{
        pathname: `/movies/${id}/reviews`,
        state: location.state
          ? { from: location.state.from }
          : { from: "/" }
      }}>Reviews</Link></li>
    </ul>
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/movies/:id/cast" component={Cast} />
        <Route path="/movies/:id/reviews" component={Reviews} />
      </Switch>
    </Suspense>
  </div >

export default withRouter(AdditionalInfo)