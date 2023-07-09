import React from 'react'
import Die from './Die'
import Confetti from 'react-confetti'



export default function App() {
  const [diceNumb, setDiceNumb] = React.useState(allNewDice())
  const [gameNumb, setGameNumb] = React.useState([])

  let endGame = 0;
  
  diceNumb.map(dice => dice.clicked ? endGame = endGame + 1 : endGame);


  function allNewDice(){
    const newDice = []
    for(let i =0; i< 10; i++){
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice.map((dice, index) => ({
      value: dice,
      clicked: false,
      id: index
      
    }))
  }

  function click(){
    setDiceNumb(diceNumb.map(dice => {
      if(dice.clicked){
        return {...dice}
      } else{
        return {...dice, value: Math.ceil(Math.random() * 6) }
      }
    }))
  }

  function reset(){
    setDiceNumb(allNewDice)
    setGameNumb([])
  }

  function diesClicked(id){
    let number = []
  
    setDiceNumb(dice => dice.map(die => {
      if(die.id == id && gameNumb.length == 0){
        number.push(die.value)

        return {...die, clicked: !die.clicked } 
      } else if(die.id == id && gameNumb[0] == die.value){
        return {...die, clicked: !die.clicked } 
      }

      else {
        return {...die}
      }
      
    }));

    if(gameNumb.length == 0){
      setGameNumb(number)
    }

    
    
  }

    const dieElements = diceNumb.map(dice => <Die value={dice.value} 
    key={dice.id} 
    id={dice.id} 
    click={diesClicked} 
    trueOrFalse={dice.clicked}
    />)

  
  return (
    <main>
      {endGame == 10 && <Confetti />}
      <h1>Tenzies</h1>
      <p className='text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='die-container'>
        {dieElements}
      </div>
      {endGame == 10 ? <button className='roll-dice' onClick={reset}>Reset Game</button> : <button className='roll-dice' onClick={click}>Roll</button> }
      
    </main>
  )
}
