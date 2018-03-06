import React, { Component } from 'react';
import { 
  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,ListItem ,List ,
  
  } from 'native-base';
import ParkData from './ParkData' ;
import ParkItem from './ParkItem' ;


export default class App extends Component {
  constructor(props){
    super(props) ;
    this.state = {
       data:[]  
      } ;
  
  ParkData.fetchParks()
          .then(parks => {
            console.log(parks)
            this.setState({data:  parks});
            
          })
          .catch(err => {
            console.log(err);
          })
  }

  _renderPark = (item) =>  {
    return 
      <ParkItem item={item}/>
  }
  // _handleClick =() =>{
  //   console.log('clicky');
  // }

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={this.state.data}
                renderRow={this._renderPark}
            // onClick={this._handleClick}
          >
          </List>
        </Content>
      </Container>
    );
  }
}