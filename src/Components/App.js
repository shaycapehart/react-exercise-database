import React, { Fragment, useState, useEffect } from 'react'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises/Exercises'
import { muscles, exercises } from '../store.js'

export default function App() {
  const [exercisesState, setExercisesState] = useState([])
  const [categoryState, setCategoryState] = useState('')
  const [exerciseState, setExerciseState] = useState({})

  useEffect(() => {
    setExercisesState(exercises)
  }, [])

  function getExcersisesByMuscle(exercises) {
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  const handleExerciseSelected = id => {
    setExerciseState(exercisesState.find(ex => ex.id === id))
  }

  const handleNewExercise = exercise => {
    exercise.id = exercisesState.length.toString()
    setExercisesState(exercisesState.concat(exercise))
  }

  const exercisesByMuscle = getExcersisesByMuscle(exercisesState)

  return (
    <Fragment>
      <Header handleNewExercise={handleNewExercise} muscles={muscles} />

      <Exercises
        exercise={exerciseState}
        exercises={exercisesByMuscle}
        category={categoryState}
        onSelect={handleExerciseSelected}
      />

      <Footer
        muscles={muscles}
        category={categoryState}
        setCategory={setCategoryState}
      />
    </Fragment>
  )
}
