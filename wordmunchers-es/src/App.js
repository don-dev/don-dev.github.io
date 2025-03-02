import './App.css';
import useEventListener from '@use-it/event-listener'
import React, { useState } from 'react';
import verbs from './data/verbs';
import dog from './dog.png';

function App() {
const squares = verbs;
const startingSquare = Math.floor(Math.random() * squares.length);
const answerSquare = (localStorage.getItem('nextAnswerSquare'))? Number(localStorage.getItem('nextAnswerSquare')) : Math.floor(Math.random() * squares.length);
const nextAnswerSquare = Math.floor(Math.random() * squares.length);
const toMatchWord = squares[answerSquare].wordEN;
const nextToMatchWord = squares[nextAnswerSquare].wordES;
const [selectedSquare, setSelectedSquare] = useState(squares[startingSquare]);
const [timer, setTimer] = useState((localStorage.getItem('timer'))? Number(localStorage.getItem('timer')) : 120000);
const [board, setBoard] = useState(squares.map((el,index) => {
	return {
		...el,
		answer: toMatchWord,
		nextAnswer: nextToMatchWord,
		show: index % nextAnswerSquare === 0 || el.wordEN === toMatchWord
	}
}))
const [lives, setLives] = useState(3);

//set local storage for next challange and previous answers
localStorage.setItem('level', 0)
localStorage.setItem('startingSquare', startingSquare)
localStorage.setItem('answerSquare', answerSquare)
localStorage.setItem('nextAnswerSquare', nextAnswerSquare)

//interval for timer
setInterval(()=>{
	let _timer = timer - 1000
	if (timer <= 0){
		localStorage.setItem('timer', 120000)
		alert('GAME OVER: You ran out of time!')
		alert('You reached Level: ' + localStorage.getItem('level'))
		localStorage.setItem('level', 0)
		window.location.href = window.location.href
	}
	localStorage.setItem('timer', _timer)
	setTimer(_timer)
},997)

function getLives() {
	let liveElements = [];
	for (var i = 0; i < lives; i++){
		liveElements.push({id: i})
	}
	return liveElements.map((el,i)=>(
			<div key={i}>
				<img src={dog} key={i}/>
			</div>
	))
}
// function to handle spacebar key press for "eating" words
const handleKeypress = (event) => {
	switch (event.key) {
		case "ArrowLeft":
			// Left pressed
			if (selectedSquare.id - 2 < 0)
				return
			setSelectedSquare(squares[selectedSquare.id - 2]);
			setBoard(squares.map((el,index) => {
				const selectionEl = board[index]
				return {
					...el,
					nextAnswer: selectionEl.nextAnswer,
					answer: selectionEl.answer,
					dir: ' left',
					show: board[index].show 
				}
			}))
			break;
		case "ArrowRight":
			// Right pressed
			if (selectedSquare.id === 54)
				return
			setSelectedSquare(squares[selectedSquare.id ]);
			setBoard(squares.map((el,index) => {
				const selectionEl = board[index]
				return {
					...el,
					nextAnswer: selectionEl.nextAnswer,
					answer: selectionEl.answer,
					dir: ' right',
					show: board[index].show 
				}
			}))
			break;
		case "ArrowUp":
			// Up pressed
			if (selectedSquare.id - 10 <= 0)
				return
			setSelectedSquare(squares[selectedSquare.id - 10]);
			setBoard(squares.map((el,index) => {
				const selectionEl = board[index]
				return {
					...el,
					nextAnswer: selectionEl.nextAnswer,
					answer: selectionEl.answer,
					dir: ' up',
					show: board[index].show 
				}
			}))
			break;
		case "ArrowDown":
			// Down pressed
			if (selectedSquare.id + 8 > 54)
				return
			setSelectedSquare(squares[selectedSquare.id + 8]);
			setBoard(squares.map((el,index) => {
				const selectionEl = board[index]
				return {
					...el,
					nextAnswer: selectionEl.nextAnswer,
					answer: selectionEl.answer,
					dir: ' down',
					show: board[index].show 
				}
			}))
			break;
	}
	if (event.key === ' ') {
		// check if the selected word is a valid word
		// if it is, remove the word from the board
		// if it is not, subtract a life from the player
		// if the player has no lives left, end the game
		if (selectedSquare.wordEN === board[0].answer) {
			localStorage.setItem('timer', 120000)
			localStorage.setItem('level', Number(localStorage.getItem('level')) + 2)
			localStorage.setItem('startingSquare', nextAnswerSquare)
			localStorage.setItem('nextAnswerSquare', Math.floor(Math.random() * squares.length))
			alert('Nice one!')
			window.location.href = window.location.href
		} else {
			if (selectedSquare.show === false)
				return
			if (lives === 1) {
			alert('GAME OVER')
			window.location.href = window.location.href
				return
			} else {
				let sum = lives - 1
				setLives(sum);
				setBoard(squares.map((el,index) => {
					const selectionEl = board[index]
					return {
						...el,
						nextAnswer: selectionEl.nextAnswer,
						answer: selectionEl.answer,
						show: (board[index].id === selectedSquare.id)? false : board[index].show
					}
				}))
			}
		}
	}
};
 useEventListener('keydown', handleKeypress);
  return (

    <div className="App" tabIndex={0}>
      <header className="App-header">
        <p>
	  WordMunchers ES
        </p>
      </header>
	  <div className="app-body">
		<div className="app-board">
			{ board && board.map((square, index) => (
				<div
					key={index}
					className={
						`tile ${square.show} ${index % 2 === 0 ? 'white' : 'black'}
						${(selectedSquare.id === squares[index].id)? 'active' : ''}
						${square.dir}
						`}
					onClick={() => {
					}}
				>
					<p>	{square.wordES} </p>
					
				</div>
			))}
	  <div className="board-display">
		  <div className="left-display">
			  <h2>Timer: {timer}</h2>
		  </div>
		  <div className="center-display">
			  <h3>Find: "	{board[0].answer} " in Spanish</h3>
			  <div className='lives'>
				  <h4>Lives: </h4>
				  {
					  getLives()
				  }
			  </div>
		  </div>
		  <div className="right-display">
			  <h3>Next Word: " {board[0].nextAnswer}"</h3>
		  </div>
	  </div>
		</div>
	  </div>
			<div className="controls-panel">
				<b>Directions:</b>
				<p>Use the spacebar to eat a word and arrow keys to move around!</p>
			</div>
    </div>
  );
}

export default App;
