import React, { Component } from 'react';
import Game1ListContainer from './Game1ListContainer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Game1Logic extends Component {
    state = {
        image: "",
        randomDogsArray: [],
        shuffledArray: [],
    }

    consoleLogMethod() {
        console.log(" YOOO", this.state.randomDogsArray, this.state.shuffledArray, this.state.image)
    }
    componentDidMount() {
        this.setupGame();
        const shuffledArray = this.shuffleButtons(this.state.randomDogsArray);
        this.setState({ shuffledArray });
        this.consoleLogMethod()

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

        return this.state.randomDogsArray.splice(0, this.state.randomDogsArray.length, ...randomArray)
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

    render() {
        return (<div>
             <img src= {this.state.image} alt="dog"></img>
            {this.state.shuffledArray.map(dog => {
                return <button>{dog}</button>
            })} </div>
        
        )
    }
}

const mapStateToProps = function (state) {
    return {
        dogBreeds: state.breeds.dogBreeds

    }
}


export default connect(mapStateToProps)(Game1Logic)