import React, { Component } from 'react';
import Game1ListContainer from './Game1ListContainer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import request from 'superagent'
import { setImages } from '../actions/SET_IMAGES'
import { setRandomDogs } from '../actions/SET_RNDMDOGS'
import { setShuffledRandomDogs } from '../actions/SET_SHUFFLED_DOGS'
import { setCorrect } from '../actions/SET_CORRECT';
import { setIncorrect } from '../actions/SET_INCORRECT';


class Game1Logic extends Component {
    consoleLogMethod() {
        console.log("LOG: ConsoleLogMethod", this.props.randomDogsArray, this.props.shuffledArray, this.props.randomImage)
    }


    componentDidMount() {
        this.newQuestion()
    }

    setupGame = () => {
        const dogData = this.props.dogBreeds
        let rand = dogData[Math.floor(Math.random() * dogData.length)];

        let rand2 = dogData[Math.floor(Math.random() * dogData.length)];

        let rand3 = dogData[Math.floor(Math.random() * dogData.length)];

        if (rand === rand2) {
            rand2 = dogData[Math.floor(Math.random() * dogData.length)];
        } else if (rand === rand2) {
            rand2 = dogData[Math.floor(Math.random() * dogData.length)];
        } else if (rand === rand2) {
            rand2 = dogData[Math.floor(Math.random() * dogData.length)];
        }

        if (rand3 === rand2 || rand3 === rand) {
            rand3 = dogData[Math.floor(Math.random() * dogData.length)];
        } else if (rand3 === rand2 || rand3 === rand) {
            rand3 = dogData[Math.floor(Math.random() * dogData.length)];
        } else if (rand3 === rand2 || rand3 === rand) {
            rand3 = dogData[Math.floor(Math.random() * dogData.length)];
        } else if (rand3 === rand2 || rand3 === rand) {
            rand3 = dogData[Math.floor(Math.random() * dogData.length)];
        } else if (rand3 === rand2 || rand3 === rand) {
            rand3 = dogData[Math.floor(Math.random() * dogData.length)];
        } else if (rand3 === rand2 || rand3 === rand) {
            rand3 = dogData[Math.floor(Math.random() * dogData.length)];
        }
        const randomArray = [rand, rand2, rand3]
        const website = `https://dog.ceo/api/breed/${encodeURIComponent(rand)}/images/random`

        return this.props.randomDogsArray.splice(0, this.props.randomDogsArray.length, ...randomArray)
    }

    shuffleButtons(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }
    /*renderImage (){
        return (
            <div>
                <img src= {this.state.image} alt="dog"></img>
            </div>
        )
    }*/
    newQuestion = () => {
        this.setupGame();
        const shuffledArray = this.shuffleButtons(this.props.randomDogsArray);
        this.props.setShuffledRandomDogs(shuffledArray);
        this.consoleLogMethod();
        request
            .get(`https://dog.ceo/api/breed/${encodeURIComponent(this.props.randomDogsArray[0])}/images/random`)
            .then(response => {
                const randomImage = (response.body.message)
                console.log(randomImage)
                return this.props.setImages(randomImage)
            })
            .catch(console.error)
    }

    answer = (dog) => {
        if (dog === this.props.randomDogsArray[0]) {
            this.props.setCorrect()
            setTimeout(this.newQuestion, 1000)
        } else {
            this.props.setIncorrect()
            setTimeout(this.newQuestion, 2000)
        }
        
    }

    render() {
        return (
            <div>
                <img src={this.props.randomImage} alt="dog"></img>
                {this.props.shuffledArray.map(dog => {
                    return <p><button onClick={() => this.answer(dog)}>{dog}</button></p>
                })}
                <button onClick={this.newQuestion}>Next Question!</button>
            </div>

        )
    }
}

const mapStateToProps = function (state) {
    console.log('LOGGING THE STATE: ', state);
    return {
        dogBreeds: state.breeds.dogBreeds,
        randomDogsArray: state.breeds.threeRandomDogBreeds,
        shuffledArray: state.breeds.shuffledThreeRandomDogBreeds,
        randomImage: state.images.images
    }
}


export default connect(mapStateToProps, { setImages, setRandomDogs, setShuffledRandomDogs, setCorrect, setIncorrect })(Game1Logic)