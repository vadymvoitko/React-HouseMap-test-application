import React, { Component } from 'react'
import Drawer from './components/Drawer'
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { getHouses } from "./store/actions";
const mapDispatchToProps = dispatch => ({getHouses: _ => dispatch(getHouses())})
class App extends Component {
  componentDidMount() {
    this.props.getHouses()
  }
  render() {
    return (
    <Router>
      <Drawer/>
    </Router>
    )
  }
}
export default connect(null, mapDispatchToProps)(App);