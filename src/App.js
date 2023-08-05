import React, { useState } from "react";
import { Button } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, setState] = useState({
    sayi1: 1,
    sayi2: 2,
    sonuc: "",
    score: 0,
    incorrect: false,
  });

  function yeniSonuc(e) {
    setState({
      ...state,
      sonuc: e.target.value,
    });
  }

  function inputKeyDown(e) {
    if (e.key === "Enter") {
      const answer = parseInt(state.sonuc);
      if (state.sayi1 + state.sayi2 === answer) {
        setState({
          ...state,
          sayi1: Math.ceil(Math.random() * 10),
          sayi2: Math.ceil(Math.random() * 10),
          score: state.score + 1,
          sonuc: "",
          incorrect: false,
        });
      } else {
        setState({
          ...state,
          score: state.score - 1,
          sonuc: "",
          incorrect: true,
        });
      }
    }
  }

  function yeniOyun() {
    return window.location.reload(false);
  }

  if (state.score === 5) {
    return (
      <div id="kazandın">
        <div style={{ textAlign: "center", paddingTop: "350px" }}>
          Kazandın!
        </div>
        <div style={{ textAlign: "center" }}>
          <Button onClick={yeniOyun} active color="danger" size="">
            Yeni Oyun
          </Button>
        </div>
      </div>
    );
  }

  if (state.score === -5) {
    return (
      <div id="kaybettin">
        <div style={{ textAlign: "center", paddingTop: "350px" }}>
          Kaybettin!
        </div>
        <div style={{ textAlign: "center" }}>
          <Button onClick={yeniOyun} active color="danger" size="">
            Yeni Oyun
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <div className="toplama" id={state.incorrect ? "incorrect" : ""}>
          {state.sayi1} + {state.sayi2}
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            onKeyDown={inputKeyDown}
            onChange={yeniSonuc}
            value={state.sonuc}
            style={{ height: 30, width: 270 }}
            type="text"
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>Score: {state.score}</div>
      </div>
    </div>
  );
}

export default App;
