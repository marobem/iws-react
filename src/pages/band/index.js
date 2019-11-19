import React, { Component } from "react";
import api from "../../services/api"

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
                <h1>{band.name}</h1>
                <p>{band.biography}</p>
            </div>
        );
    }
}