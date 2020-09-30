import React, { Component, useState } from "react";
import "./App.css";

//Import Component
import Header from "./Components/Header";
import Content from "./Components/Content";
import Incre from "./Pages/Increment";
import Todo from "./Pages/Todo";
import GuestPage from "./Pages/Guest";

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
      <Todo />
    </div>
  );
}

// export default class Conditional extends Component {
//   render() {
//     const isLoggedin = true;
//     if (isLoggedin) {
//       return <App />;
//     } else {
//       return <GuestPage />;
//     }
//   }
// }

export default function Conditional() {
  const [isLoggedin] = useState(false);

  return <div>{isLoggedin ? <App /> : <GuestPage />}</div>;
}
