import "./App.css";
import Botones from "./botones";
import Tabla from "./tabla";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row mt-5">   
          <h1>BattleShip with React</h1>         
          </div>
          <div className="row">
            <Tabla />
          </div>
          {/* <div className="row">
            <Botones />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
