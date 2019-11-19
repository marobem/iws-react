import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api"
//import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
//import Typography from "@material-ui/core/Typography";
import "./styles.css";

export default class Main extends Component {
    state = {
        bands: [],
    }

    componentDidMount() {
        this.loadBands();
    }

    loadBands = async () => {
        const response = await api.get("bands");

        console.log(response.data);
        this.setState({ bands: response.data});
    }

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



    render() {
        const { bands } = this.state;

        //console.log(this.getArrayFromApi);
        
        return (
            <div className="band-list">
                {bands.map(band => (
                    <article key={band.id}>
                        <Avatar className="avatar" src={band.image}/>
                        {/* <img src={band.image}/> */}
                        <strong>{band.name}</strong>
                        <p>{band.numPlays} Plays</p>
                        <Link className="linkTo" to={`/bands/${band.id}`}>Band Details</Link>
                    </article>
                ))}
            </div>
            

            // <Paper>
            //     <Avatar src={this.band.image}></Avatar>
            //     <Typography variant="h5" component="h3">
            //         {this.band.name}
            //     </Typography>
            //     <Typography component="p">{this.band.numPlays}</Typography>
            // </Paper>
        )
    }
}




// export default class Main extends Component {
//     state = {
//         bands: [],
//     }

//     componentDidMount() {
//         this.loadBands();
//     }

//     loadBands = async () => {
//         const response = await api.get("bands");

//         console.log(response.data);
//         this.setState({ bands: response.data});
//     }

//     constructor() {
//         super();
//         this.state = {
//             search: ''
//         };
//     }

//     updateSearch(event) {
//         this.setState({search: event.target.value.substr(0, 20)});
//     }

//     render() {
//         let filteredBands = this.props.bands.filter(
//             (band) => {
//                 return band.name.indexOf(this.state.search) !== -1;
//             }
//         );
//         return(
//             <div className="band-list">
//                 {filteredBands.map(band => (
//                     <article key={band.id}>
//                         <Avatar className="avatar" src={band.image}/>
//                         <strong>{band.name}</strong>
//                         <p>{band.numPlays} Plays</p>
//                         <Link className="linkTo" to={`/bands/${band.id}`}>Band Details</Link>
//                     </article>
//                 ))}
//                 <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
//             </div>
//         )
//     }


//     state = {
//         bands: [],
//     }
// }