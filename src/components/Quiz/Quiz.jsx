import React from 'react'
import './QuizCss.css'

const Quiz = () => {
  return (
    <div className='container'>
      <h1> Quiz App</h1>
      <hr />
      <h2>Question A</h2>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
