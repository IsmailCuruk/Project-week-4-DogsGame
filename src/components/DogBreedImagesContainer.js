import React, {Component} from 'react'
import DogBreedImages from './DogBreedImages'
import request from 'superagent'
import {connect} from 'react-redux'

class DogsListContainer extends Component {
  state = { images: null }

  componentDidMount() {
    const breed = this.props.match.params.breed
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => this.updateImages(response.body.message))
      .catch(console.error)
  }

  updateImages(images) {
    this.props.dispatch({
      type: "SET_IMAGES",
      payload: images
    })
  }

  render() {
    return <DogBreedImages images={ this.state.images } breed={this.props.match.params.breed}/>
  }
}

const mapStateToProps = function (state){
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(DogsListContainer);