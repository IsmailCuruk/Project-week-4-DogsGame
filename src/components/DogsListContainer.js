import React, {Component} from 'react'
import request from 'superagent'
import DogsList from './DogsList'
import {connect} from 'react-redux'

class DogsListContainer extends Component {
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        console.log(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    // this.setState({
    //   dogBreeds: breeds
    // })
    // dispatch an action

    this.props.dispatch({
      type: "SET_BREEDS",
      payload: breeds
    })
  }

  render() {
    return <DogsList dogBreeds={this.props.dogBreeds} />
  }
}

const mapStateToProps = function (state){
  return {
    dogs: state.dogBreeds
  }
}

export default connect(mapStateToProps)(DogsListContainer);