import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header"
import { Switch, Route, Redirect } from 'react-router-dom';
import style from "./App.module.css"

const Home = lazy(() => import('./components/HomePage/HomePage' /* webpackChunkName: "home" */))
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */))
const SingleMovie = lazy(() => import("./components/SingleMovie/SingleMovie" /* webpackChunkName: "single-movie-page" */))

const App = () =>
  <div className={style.container}>
    <Header />
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:id" component={SingleMovie} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>

export default App