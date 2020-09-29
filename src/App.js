import React, { Component } from "react";
import "./App.css";

//Import Component
import Header from "./Components/Header";
import Content from "./Components/Content";
import Incre from "./Pages/Increment";

//Import Pages

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Content />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <Header irwantoGanteng="This is Header, ini header Loh, inget Header" />
      <Content />
      <Incre />
    </div>
  );
}

export default App;
