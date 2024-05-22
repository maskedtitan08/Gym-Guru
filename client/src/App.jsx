import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ExerciseDetail from "./components/ExerciseDetail"
import Footer from './components/Footer'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
      <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
