import React, { Component } from 'react';
//import HeaderSearch from "./components/headSearch"
import api from './services/api';
import { Button } from "@material-ui/core";
import PaperBand from "./components/paperBand";
//import { ThemeProvider}
import Header from "./components/Header"
import Main from "./pages/main";
import Routes from "./routes";

// const App = () => (
//   <div className="App">
//     <Header />
//     <Routes />
//   </div>
// );

// export default App;
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <paperBand />
      <Routes />
  </div>
    );
  }
}
export default App;



// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bands: []
//     };
//   }
//   getArrayFromApi = async () => {
//     const bands = await api.get("/bands");
//     this.setState({ bands: bands.data });
//     console.log(this.state.bands);
//   };

//   render() {
//     return (
//       <div style={{ backgroundColor: "grey" }}>
//         <Button onClick={this.getArrayFromApi} variant="contained">
//           CLICA
//         </Button>
//         <Button onClick={this.ordena} variant="contained">
//           Ordena
//         </Button>
//         {this.state.bands.map(band => (
//           <PaperBand key={band.id} band={band}></PaperBand>
//         ))}
//       </div>
//     );
//   }
// }





// const getArrayFromApi = () => {
//   console.log(await api.get());
// }

// function App() {
//   return (
//     <div>
//       <HeaderSearch theme={theme}></HeaderSearch>
//     </div>
    
//   );
// }

// export default App;
