import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MovieDetail from './pages/MovieDetail'
import './App.css'

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/movies" Component={MoviesPage} />
          <Route path="/movies/:id" Component={MovieDetail} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
