import React from "react";
import { render } from "react-dom";
import CadesPluginer from "../../src";

class App extends React.Component {
  componentDidMount() {
    CadesPluginer.getFinalCertsArray().then(answer => {
      console.log("answer", answer);
      CadesPluginer.signMessage("lalala", answer[0].certificate).then(crypt =>
        console.log("signed", crypt)
      );
    });
  }

  render() {
    return <div>123</div>;
  }
}

render(<App />, document.querySelector("#demo"));
