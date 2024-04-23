import React, { useState, useEffect } from "react";
import "./stopwatch.css";
const Stopwatch = () => {
  // state para guardar o tempo
  const [time, setTime] = useState(0);

  // Checar se está parado ou não 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // Mudar o tempo de 0 para 1
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Horas
  const hours = Math.floor(time / 360000);

  // Minutos
  const minutes = Math.floor((time % 360000) / 6000);

  // Segundos
  const seconds = Math.floor((time % 6000) / 100);

  // Milisegundos
  const milliseconds = time % 100;

  // Inicar e parar o temporizador
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

 //Resetar o temporizador
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;