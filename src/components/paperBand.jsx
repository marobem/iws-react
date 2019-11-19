import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Band from "./band";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default class paperBand extends Component {
  constructor(props) {
    super(props);
    this.band = this.props.band;
  }
  entraBanda = () => {
    return this.props.history.push("path/to/push");
  };
  render() {
    return (
      <Paper onClick={this.entraBanda}>
        <Avatar src={this.band.image}></Avatar>
        <Typography variant="h5" component="h3">
          {this.band.name}
        </Typography>
        <Typography component="p">{this.band.numPlays}</Typography>
      </Paper>
    );
  }
}
