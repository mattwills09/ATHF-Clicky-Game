
import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
// import './App.css';


class App extends Component {
    state = {
      characters,
      characterBeenClicked: [],
      score: 0,
      topScore: 0
    };

//When character is clicked, regardless of win or lose, reorder characters:
  imageClick = character => {
    this.setState({
      characters: this.state.characters.sort(function(a, b) {
        return 0.5 - Math.random();
      })
    })

    // console.log(character);

//If character is clicked for second time, send lose game message & reset score,
//Else change character 'clicked' setting to true, add 1 to user's score:
      if (character.clicked==true) {
        alert("Master Shake says: 'Too bad homeslice.. better luck next time.  Play again?'");
        this.state.score=0;

      } else {
        character.clicked=true;
        this.setState({ characters, score:this.state.score +1 });

        if (this.state.score === 12) {
          alert("Meatwad says: 'Aw hell yeah boi.. looks like you won!");
        }
      }
  }

componentDidUpdate() {
  if (this.state.score > this.state.topScore) {
    this.setState({ topScore: this.state.score });
  } else {
    return
  }
}


render() {
    return (
      <Wrapper>

        <Jumbotron>Aqua Teen Hunger Force Clicky Game!</Jumbotron>

        <Title>
          <div className="row">
            <div className="col-md-5">
              <div className="score">Score: {this.state.score}</div>
            </div>

            <div className="col-md-2">
              <div>  ||  </div>
            </div>

            <div className="col-md-5">
              <div className="topScore">Top Score: {this.state.topScore}</div>
            </div>
          </div>
        </Title>

        <div className="row">

          {this.state.characters.map(character => (

            <CharacterCard
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              alt={character.name}
              name={character.name}
              image={character.image}
              clicked={character.clicked}
              character={character}
            />

          ))}

        </div>

      </Wrapper>
    );
  }

}


export default App;
