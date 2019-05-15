import React from 'react';
import './App.css';
import request from 'superagent'
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from '../src/store';
import { setBreeds } from './actions/SET_BREEDS'
import Game1ListContainer from './components/Game1ListContainer';
import Game1Logic from './components/Game1Logic'


class App extends React.Component {
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        return this.props.setBreeds(breeds)
      })
      .catch(console.error)
  }


  render() {
    return (
      // <Provider>
        <div className="App">
          <header className="App-header">
            <h1>
              The Dogs Game
            </h1>
          </header>
          <main>
            <Route exact path="/" component={DogsListContainer} />
            <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
            <Route path="/game1" component={Game1ListContainer} />
          </main>
        </div>
      // </Provider>
    );
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, { setBreeds })(App); 