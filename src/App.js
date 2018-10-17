import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  AmbientLight,
  StyleSheet,
  Model,
  View,
  Animated

} from 'react-vr';
import TextScene from './TextScene';
import Easing from 'react-vr'; 
const AnimatedModel=Animated.createAnimatedComponent(Model);
export default class advr extends React.Component {
  constructor(props){
    super(props);
    this.state={
      background:'space.jpg',
      satelliteRotaz:new Animated.Value(0),
    }
  }
  componentDidMount(){
    this.state.satelliteRotaz.setValue(0);
    Animated.timing(
      this.state.satelliteRotaz,{
        toValue:-300,
        duration:10000,
        delay:2000,
        easing:Easing.inOut
      }

    ).start();
  }
  render() {
    return (
      <View>
        <AmbientLight instensity={2.5}/>
        <Pano source={asset(this.state.background)}/>
      <TextScene/>
        <AnimatedModel 
        source={{
          obj:asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.obj'),
          mtl:asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.mtl')
        }}
        style={
          {
            transform:[
                {translateX:-1},
                {translateY:0},
                {translateZ:-0.75},
                {rotateZ:this.state.satelliteRotaz},
                {scale:0.075},
                {rotateX:180},
                {rotateY:-360}
            ]
          }
        }
        />
        <Model
        source={{
          obj:asset('/Loral-1300Com-obj/Loral-1300Com-main.obj'),
          mtl:asset('/Loral-1300Com-obj/Loral-1300Com-main.mtl'),
        }}
        style={
          {
            transform:[
                {translate:[3,0,-10]},
                {scale:0.01},
                {rotateX:30},
                {rotateY:-45}
            ]
          }
        }
        />
         <Model
        source={{
          obj:asset('/EMU/EMU.obj'),
          mtl:asset('/EMU/EMU.mtl'),
        }}
        style={
          {
            transform:[
                {translate:[-1.75,-0.5,-0.5]},
                {scale:0.5},
                
                {rotateY:-180}
            ]
          }
        }
        />
      </View>
    );
  }
};

