import React from 'react';
import {
  StyleSheet,
    Text,
  View,
  Video,
  asset,
  VrButton,
  Sound
} from 'react-vr';

export default class TextScene extends React.Component {
    constructor(props){
        super(props);
        this.state={
            video:false,
            audio:true,
            wavFile:'./578628main_hskquindar.mp3',
            
        };
    }
    startVideo(){
        this.setState({
            video:true,
            audio:false,
    });
}
useAudio(){
    if(this.state.audio===true){
        return <Sound
        loop={true}
        volume={1}
        source={{
            wav:asset(this.state.wavFile)
        }}
        />
    }
}
renderItem(){
    if(this.state.video===false){
        return  <Text
        style={{
            background:'#777879',
            fontSize:0.4,
            fontWeight:'400',
            paddingLeft:0.2,
            paddingRight:0.2,
            textAlign:'center',
            textAlignVertical:'center',
            transform:[
                {translate:[-4,1,-0.5]},
                {scale:0.5},
                
                {rotateY:90}
            ]
        }}>Aqua Nasa Satellitie Click here</Text> 
    }else{
        return <Video
        source={{
            uri:'/static_assets/Nasa_aqua.mp4' }}
            style={{
                height:2,
                width:3.56,
                transform:[
                    {translate:[-4,1,-0.5]},
                    {rotateY:90}
                ]
            }}/>
    }
} 
    render() {
      return (
        <View>
   <VrButton onClick={this.startVideo.bind(this)}>
   {this.renderItem()}
   </VrButton>
   {this.useAudio()}
        <Text
        style={{
            background:'#777879',
            fontSize:0.4,
            fontWeight:'400',
            paddingLeft:0.2,
            paddingRight:0.2,
            textAlign:'center',
            textAlignVertical:'center',
            transform:[
                {translate:[1,2.5,-12]},
                {scale:0.5},
            
            ]
        }}>Lara model13-00</Text>
        <Text
        style={{
            background:'#ffffff',
            fontSize:0.4,
            fontWeight:'400',
            paddingLeft:0.2,
            paddingRight:0.2,
            textAlign:'center',
            textAlignVertical:'center',
            transform:[
                {translate:[-2.5,0.5,-3]},
                {scale:0.25},
            
            ]
        }}>The mechanic</Text>
        </View>
      );
    }
  };