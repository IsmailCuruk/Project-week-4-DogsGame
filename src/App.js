import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from '../src/store';


class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>
              Exercise Week 3/ Day 3:
            </h1>
          </header>
          <main>
            <Route exact path="/" component={DogsListContainer} />
            <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
          </main>
        </div>
      // </Provider>
    );
  }
}

export default connect()(App);