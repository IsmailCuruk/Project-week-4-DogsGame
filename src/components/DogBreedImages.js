import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


class DogBreedImages extends React.Component {
    render(){

        return (
            <div className="dog-breed-images">
                <h1>Dogs Breed Images</h1>
    
                This page will show images of the {this.props.breed} breed.
    
          <Link to="/">Go back to the index</Link>
                <div>
                    {this.props.images && this.props.images.map(url => <img src={url} alt="Dog" />)}
                    {!this.props.images && 'Loading...'}
                </div>
            </div>
        )
    }
}

export default connect()(DogBreedImages);