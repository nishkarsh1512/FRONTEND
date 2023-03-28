import React, { useReducer } from 'react'

const initialInputState = {
  value: '',
  isTouched: false,
}

const inputStateReducer = (state, action) => {
  if (action.type == 'INPUT') {
    return { value: action.value, isTouched: state.isTouched }
  }

  return inputStateReducer
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState,
  )
  const valueIsValid = validateValue(inputState.value)

  const valueChangeHandler = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    valueChangeHandler,
  }
}

export default useInput
