import { useState, useRef } from 'react'
import useInput from '../ise-input.js'
const SimpleInput = (props) => {
  const nameInputRef = useRef()

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'))

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  ///////////////////////////////////////////////////////////////////////////
  const formSubmitHandler = (e) => {
    e.preventDefault()

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    const enteredValue = nameInputRef.current.value
    console.log(enteredValue)

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const nameInputClasses1 = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangedHandler}
          ref={nameInputRef}
          type="text"
          id="name"
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Something Is Xrong</p>}
      </div>
      {/* this is email field */}
      <div className={nameInputClasses1}>
        <label htmlFor="name">Email</label>
        <input
          onChange={emailChangedHandler}
          ref={nameInputRef}
          type="text"
          id="name"
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Something Is Xrong</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
