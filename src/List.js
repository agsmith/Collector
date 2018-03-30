import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    return (
    	<div>
    		{this.props.result.map((comic, index) => <ListItem comic={comic} key={index} />) }
      	</div>
    );
  }
}

export default List;
