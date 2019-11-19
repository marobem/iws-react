import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Avatar } from "@material-ui/core";

export default class Band extends Component {
    state = {
        band: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response =  await api.get(`/bands/${id}`);

        this.setState({ band: response.data});
    }

    render() {
        const { band } = this.state;

        return (
            <div className="band-info">
                <img src={band.image}></img>
                    <div>
                        <h1>{band.name}</h1>
                        <p>{band.genre}</p>
                        <p>{band.numPlays} Plays</p>
                    </div>                   
                <p className="biography">{band.biography}</p>
            </div>
        );
    }
}