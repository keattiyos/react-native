import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
export default class ParkItem extends Component {

  render() {
    let { item } = this.props ;
    const picsrc = item.image ; 
    const thumbnail = `http://web.sit.kmutt.ac.th/sanit/int493/assets/img/thumbs/${picsrc}` ;
    const headurl =   `http://web.sit.kmutt.ac.th/sanit/int493/assets/img/headers/${picsrc}` ; 

    return (   
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: thumbnail}} />
                <Body>
                  <Text>{item.park}</Text>
                  <Text note>{item.state}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: headurl}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>    
          </Card>
        </Content>
  
    );
  }
}