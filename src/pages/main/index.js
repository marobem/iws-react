import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api"
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

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

    // prevPage = () => {}

    // nextPage = () => {

    // }


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

        console.log(this.getArrayFromApi);
        
        return (
            <div className="band-list">
                {bands.map(band => (
                    <article key={band.id}>
                        <strong>{band.name}</strong>
                        <p>{band.numPlays}</p>
                        <Link to={`/bands/${band.id}`}>Link</Link>
                    </article>
                ))}
                
                <div className="actions">
                    <button>Back</button>
                    <button>Next</button>
                </div>
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