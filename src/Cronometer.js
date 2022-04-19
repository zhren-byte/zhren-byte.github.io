import React from "react";
import "./Cronometer.css";

function App() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);
  const [name, setName] = React.useState("");
  const [cronos, setCronos] = React.useState([]);
  const [crono, setCrono] = React.useState("");
  function newCrono(e) {
    e.preventDefault();
    const newCrono = {
      id: Date.now(),
      text: crono,
      time: 0,
    };
    setCronos([...cronos].concat(newCrono));
    setCrono("");
  }
  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="App text-center">
      <div className="fixed-bottom border-primary bg-dark text-white">
      <form  onSubmit={newCrono}>
        <input
          type="text"
          className="text btn-primary text-center"
          id="btn-cronometro"
          onChange={(e) => setCrono(e.target.value)}
          value={crono}
        />
        <button
          type="submit"
          className="btn btn-primary m-3"
          id="btn-cronometro"
          style={{ fontSize: '1.2em', fontWeight: 'bold', width: '30px', height: '30px' , overflow: 'hidden', padding: '0 0 0 0'}}
          // onClick={() => setNewTimer(e.target.value)}
        >
          +
        </button>
      </form>
      </div>
      <hr />
      <div className="container" id="cronometers">
        <div className="card border-primary mx-auto bg-dark m-3 p-3 text-white">
          <span className="card-title h3">{name}</span>
          <div className="card-text h4 m-3">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
          </div>

          <div className="btn-group mb-2 mt-2">
            {!timerOn && time === 0 && (
              <button
                className="btn btn-primary"
                onClick={() => setTimeOn(true)}
              >
                Start
              </button>
            )}
            {timerOn && (
              <button
                className="btn btn-primary"
                onClick={() => setTimeOn(false)}
              >
                Stop
              </button>
            )}
            {!timerOn && time !== 0 && (
              <button
                className="btn btn-primary"
                onClick={() => setTimeOn(true)}
              >
                Resume
              </button>
            )}
            {!timerOn && time > 0 && (
              <button className="btn btn-primary" onClick={() => setTime(0)}>
                Reset
              </button>
            )}
          </div>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese aqui el nombre..."
          />
        </div>
        {cronos.map((crono) => (
          <div className="card border-primary bg-dark mx-auto m-3 p-3 text-white">
            <span className="card-title h3">{crono.text}</span>
            <div className="card-text h4 m-3">
              <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div className="btn-group mb-2 mt-2">
              {!timerOn && time === 0 && (
                <button
                  className="btn btn-primary"
                  onClick={() => setTimeOn(true)}
                >
                  Start
                </button>
              )}
              {timerOn && (
                <button
                  className="btn btn-primary"
                  onClick={() => setTimeOn(false)}
                >
                  Stop
                </button>
              )}
              {!timerOn && time !== 0 && (
                <button
                  className="btn btn-primary"
                  onClick={() => setTimeOn(true)}
                >
                  Resume
                </button>
              )}
              {!timerOn && time > 0 && (
                <button className="btn btn-primary" onClick={() => setTime(0)}>
                  Reset
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
