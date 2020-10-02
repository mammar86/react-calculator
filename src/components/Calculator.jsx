import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(0)
  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const [operator, setOperator] = useState(null)

  function clearDisplay() {
    //when user clicks AC button:
    // 1 display should be reset to 0
    // first Input reset to 0
    // second Input reset to 0
    //set Operator to null
    setDisplay(0)
    setFirstInput('')
    setSecondInput('')
    setOperator(null)
  }

  function buttonValue(event) {
    if (operator === null) {
      if (firstInput.includes('.') && event.target.textContent === '.') {
        const error = new Audio(
          'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav'
        )
        error.play()
      } else {
        setFirstInput(`${firstInput}${event.target.textContent}`)
        setDisplay(`${firstInput}${event.target.textContent}`)
      }
    } else {
      if (secondInput.includes('.') && event.target.textContent === '.') {
        const error = new Audio(
          'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav'
        )
        error.play()
      } else {
        setSecondInput(`${secondInput}${event.target.textContent}`)
        setDisplay(`${secondInput}${event.target.textContent}`)
      }
    }
  }

  function getOperator(event) {
    setOperator(event.target.textContent)
  }

  function executeCalculations() {
    let result
    if (operator === '+') {
      result = Number(firstInput) + Number(secondInput)
    } else if (operator === '−') {
      result = Number(firstInput) - Number(secondInput)
    } else if (operator === '×') {
      result = Number(firstInput) * Number(secondInput)
    } else if (operator === '÷') {
      result = Number(firstInput) / Number(secondInput)
    }
    setDisplay(result)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clearDisplay}>
            AC
          </button>
          <button className="button fn" onClick={getOperator}>
            &#177;
          </button>
          <button className="button fn" onClick={getOperator}>
            &#37;
          </button>
          <button className="button op" onClick={getOperator}>
            &#247;
          </button>
          <button className="button" onClick={buttonValue}>
            7
          </button>
          <button className="button" onClick={buttonValue}>
            8
          </button>
          <button className="button" onClick={buttonValue}>
            9
          </button>
          <button className="button op" onClick={getOperator}>
            &#215;
          </button>
          <button className="button" onClick={buttonValue}>
            4
          </button>
          <button className="button" onClick={buttonValue}>
            5
          </button>
          <button className="button" onClick={buttonValue}>
            6
          </button>
          <button className="button op" onClick={getOperator}>
            &#8722;
          </button>
          <button className="button" onClick={buttonValue}>
            1
          </button>
          <button className="button" onClick={buttonValue}>
            2
          </button>
          <button className="button" onClick={buttonValue}>
            3
          </button>
          <button className="button op" onClick={getOperator}>
            &#43;
          </button>
          <button className="button x2" onClick={buttonValue}>
            0
          </button>
          <button className="button" onClick={buttonValue}>
            .
          </button>
          <button className="button op" onClick={executeCalculations}>
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}
