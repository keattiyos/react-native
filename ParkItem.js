import React, { Component } from 'react';
import { Image  , ImageBackground} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, SwipeRow,View} from 'native-base';
export default class ParkItem extends Component {

  render() {
    let { item } = this.props ;
    const picsrc = item.image ; 
    const thumbnail = `http://web.sit.kmutt.ac.th/sanit/int493/assets/img/thumbs/${picsrc}` ;
    const headurl =   `http://web.sit.kmutt.ac.th/sanit/int493/assets/img/headers/${picsrc}` ; 

    return (  
    
       
        <Content >
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-10}
            left={
              <Button light  onPress={() => alert('Info')}>
                <Icon active name="tththththt" />
              </Button>
            }
            body={
              
              <Card>
              {/* <CardItem>
                <Left>
                  <Thumbnail source={{uri: thumbnail}} />
                  <Body>  
                    <Text>{item.park}</Text>
                    <Text note>{item.state}</Text>
                  </Body>
                </Left>
              </CardItem> */}
              <CardItem>
                <ImageBackground source={{uri: headurl}} style={{height: 200, width: null, flex: 1,justifyContent:"center"}}>
                    <Text style={{color:"white",fontWeight:"bold",fontSize:20,textAlign:"center"}}>{item.park}</Text>
                    <Text style={{color:"white",fontSize:16,textAlign:"center"}} note>{item.state}</Text>
                </ImageBackground>                
              </CardItem>    
            </Card>
           
            }
      
          />

        </Content>       
    );
  }
}