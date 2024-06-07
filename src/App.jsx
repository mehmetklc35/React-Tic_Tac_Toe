import Player from "./components/Player.jsx";

function App() { 
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player İnitialName="Player 1" symbol="X" />        
        <Player İnitialName="Player 2" symbol="O" />        
        
      </ol>
      GAME BOARD
      
    </div>
    LOG
  </main>;
  
}

export default App
