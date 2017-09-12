import React, { Component } from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import TextField from 'react-md/lib/TextFields';

import './App.css';
import data from './data.json';
import ElementList from './ElementList.js'

class App extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      elements: [...data],
      filteredElements: [...data],
    }
    this.onQuery = this.onQuery.bind(this)
  }

  onQuery(q) {
    this.setState({filteredElements: q ? this.state.elements.filter((e) => e.tag.startsWith(q)) : this.state.elements})
  }

  render() {
    return (
      <div className="App">
        <Toolbar colored title='Default Display Viewer'/>
        <TextField id="placeholder-only-title" placeholder="Search..." className="md-cell md-cell--bottom" onChange={this.onQuery} />
        <ElementList elements={this.state.filteredElements} />
      </div>
    );
  }
}

export default App;
