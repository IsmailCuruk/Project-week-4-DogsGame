import React, {Component} from 'react'
import request from 'superagent'
import {connect} from 'react-redux'
import {setBreeds} from '../actions/SET_BREEDS'
import {setImages} from '../actions/SET_IMAGES'

class Game1ListContainer extends Component{
  render(){
    return
  }
}

const mapStateToProps = function (state){
  return {
    dogBreeds: state.breeds.dogBreeds,
    images: state.images.images
  }
}

export default connect(mapStateToProps, {setBreeds})(Game1ListContainer)
