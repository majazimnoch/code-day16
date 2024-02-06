# Quiz made in React
## Intro
This is the sixteenth project of my 30-day coding challenge. The project includes following tech stuff: React, Hook "useState", "useRef".

## Idea
The idea was to make a simple geography quiz using some React Hooks, to become more familiar with their usage and logic. 

## Breaking down the code
I use a hook called `useState` often. I have 5 state variables:

 `index`: Keeps track of the current question index
 `question`: Holds the current question data
`lock`: Controls whether user response should be accepted
`score`: Keeps track of the user's score
`result`: Indicate whether the quiz has ended

I use `useRef` variables for each option to mark correct/wrong answer.

I have functions:
`checkAns`: check the user's answer, updates the score and highlits wrong/correct answer
`next`: moves to the next question, resets styling and unlocks user's input 
`reset`: resets the quiz to the initial state

## Demo
Click <a href="https://startling-jalebi-1a3618.netlify.app/"> here </a>.
