import React, {useState} from "react";
import Score from "./components/Score";
import UserPick from "./components/UserPick";
import OpponentPick from "./components/OpponentPick";
import Footer from "./components/Footer";

function App() {
  const [scoreUser, setScoreUser] = useState(0)
  const [scorePC, setScorePC] = useState(0)
  const options = ["r", "p", "s"];
  const [userChoice, setUserChoice] = useState("")
  const [pcChoice, setPCChoice] = useState("")
  const [result, setResult] = useState("")

  // What happens when the user clicks on one of the RPS options
  function userPicked(choice) {
    setUserChoice(choice)
    setPCChoice(options[Math.floor(Math.random() * 3)])
  }

  function userWins() {
    setResult("You win!")
    setScoreUser(prevScore => prevScore + 1)
  }

  function userLooses() {
    setResult("You lose!")
    setScorePC(prevScore => prevScore + 1)
  }

  // Logic of the game (comparing choices of user and PC)
  function game() {
    console.log(pcChoice)
   switch (userChoice + pcChoice) {
    case "rs":
    case "pr":
    case "sp":
      userWins()
      break;
    case "sr":
    case "rp":
    case "ps":
      userLooses()
      break;
    case "rr":
    case "pp":
    case "ss":
      setResult("It's a tie!")
      break;
   }
  }

  // Play the game everytime the user picks a choice
  React.useEffect(() => {
    game()
  }, [userChoice]);
  
  return (
    <div className="App">
      <Score scoreUser={scoreUser} scorePC={scorePC}/>
      {/* Logic for what displays before and after the user chooses */}
      <div className="game-field" >
        <div className="user-pick">
          <h3 className="pick-title">{userChoice === "" ? "ROCK! PAPER! SCISSORS! GO!" : "YOUR PICK"}</h3>
          {userChoice === "" ? <div className="user-options">
            <UserPick selection={() => userPicked("r")} id="user-rock" />
            <UserPick selection={() => userPicked("p")} id="user-paper" />
            <UserPick selection={() => userPicked("s")} id="user-scissors" />
          </div> : <OpponentPick option={userChoice}/> }
        </div>        
        {result !== "" && 
        <div className="result-btn">
          <p className="result">{result}</p>
          <button className="new-game-btn" onClick={()=> {
            setResult("")
            setUserChoice("")
            setPCChoice("")
          }}>NEW ROUND</button>
        </div>}
        {userChoice !== "" && <OpponentPick option={pcChoice} titleDisplay={true}/>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
