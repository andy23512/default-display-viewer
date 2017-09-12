import React, { Component } from 'react';
import { Card, CardTitle } from 'react-md/lib/Cards';

const titleStyle = {textAlign: 'left'}

class ElementList extends Component {
  render() {
    const {elements} = this.props
    const Elements = elements.map((e, i) => (
      <Card className="md-cell md-cell--2 md-cell--4-tablet md-block-centered">
        <CardTitle style={titleStyle} title={e.tag} subtitle={e.display}/>
      </Card>
    ))
    return <div className="md-grid">{Elements}</div>
  }
}

export default ElementList;
