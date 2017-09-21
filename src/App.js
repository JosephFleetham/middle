import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import update from 'react-addons-update';


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const App = React.createClass({
  getInitialState: function () {
    return {
      cards: []
    };
  },

  componentWillMount: function () {
    var that = this;
    var url = 'https://randomuser.me/api/?results=6'
    this.updateState();

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      // is there a way to clean this up? One update function with a loop to account for more cards being added?
      that.setState({
        cards: update(that.state.cards, {
          0: {
            author: {$set: data.results[0].name.first + " " + data.results[0].name.last},
            authorPhoto: {$set: data.results[0].picture.thumbnail},
            time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"},
            comments: {$set: (Math.floor(Math.random() * 40))},
          },
          1: {
            author: {$set: data.results[1].name.first + " " + data.results[1].name.last},
            authorPhoto: {$set: data.results[1].picture.thumbnail},
            time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"},
            comments: {$set: (Math.floor(Math.random() * 40))},
          },
          2: {
            author: {$set: data.results[2].name.first + " " + data.results[2].name.last},
            authorPhoto: {$set: data.results[2].picture.thumbnail},
            time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"},
            comments: {$set: (Math.floor(Math.random() * 40))},
          },
          3: {
            author: {$set: data.results[3].name.first + " " + data.results[3].name.last},
            authorPhoto: {$set: data.results[3].picture.thumbnail},
            time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"},
            comments: {$set: (Math.floor(Math.random() * 40))},
          },
          4: {
            author: {$set: data.results[4].name.first + " " + data.results[4].name.last},
            authorPhoto: {$set: data.results[4].picture.thumbnail},
            time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"},
            comments: {$set: (Math.floor(Math.random() * 40))},
          },
          5: {
            author: {$set: data.results[5].name.first + " " + data.results[5].name.last},
            authorPhoto: {$set: data.results[5].picture.thumbnail},
            time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"},
            comments: {$set: (Math.floor(Math.random() * 40))},
          },
        })
      });
    });
  },
  updateState: function () {
    this.setState({ cards: data });
  },
  componentDidMount: function () {
    console.log(this.state.cards);
  },

  render() {
    return (
      <div className="filler">
        <div className="sixteen wide column">
          <TopNav

          />

        </div>
        <br />
          <CardList
            cards={this.state.cards}
          />
      </div>
    );
  }
});

const CardList = React.createClass({

  getInitialState: function () {
    return {
      index: []
    }
  },
  componentWillMount: function () {
    var numbers = [];
    if (numbers.length !== data.length) {
      for (var i=0;i<data.length;i++) {
        numbers.push(i);
      }
    }
    shuffleArray(numbers);
    this.setState({ index: numbers });
  },
  render: function () {
    const cards = this.props.cards.map((card) => (
      <Card
        id={card.id}
        title={card.title}
        description={card.description}
        photo={card.photo}
        author={card.author}
        authorPhoto={card.authorPhoto}
        time={card.time}
        votes={card.votes}
        comments={card.comments}
        onUpVote={this.handleUpVote}

      />
    ));
    return (
      <div id="CardList">
        <div className="ui four doubling centered stackable cards">
            {cards[this.state.index[0]]}
            {cards[this.state.index[1]]}
            {cards[this.state.index[2]]}
            {cards[this.state.index[3]]}
            {cards[this.state.index[4]]}
            {cards[this.state.index[5]]}
        </div>
      </div>
    );
  },
});

const Card = React.createClass({
  getInitialState: function () {
    return {
      votes: [],
      voted: [],
      heart: []
    }
  },
  componentWillMount: function () {
    var random = (Math.floor(Math.random() * 150) + 1);
    var emptyHeart= "http://i.imgur.com/iPhyYk7.png"
    this.setState({
      votes: random,
      voted: false,
      heart: emptyHeart
    });
  },

  handleUpVote: function () {
    var fullHeart = "http://i.imgur.com/rzmv6N6.png"
    var emptyHeart= "http://i.imgur.com/iPhyYk7.png"
    if (this.state.voted === false) {
      this.setState({
        votes: this.state.votes + 1,
        voted: true,
        heart: fullHeart
      });
    }
    else {
      this.setState({
        votes: this.state.votes - 1,
        voted: false,
        heart: emptyHeart
      })
    }
  },
  render: function () {
  var titleCase = require('title-case');
    return (
      <div id="box">
        <img src={this.props.photo} alt="cover"></img>
        <div className="CardContent">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
        <div className="Author">
          <img src={this.props.authorPhoto} alt="authorPhoto"></img>
          <div className="name">{titleCase(this.props.author)}</div>
          <div className="time">{this.props.time}</div>
        </div>
        <div className="Stats">
          <a onClick={this.handleUpVote}>
            <img className="heart" src={this.state.heart} alt="heart"></img>
          </a>
          <div className="stat">{this.state.votes}</div>
          <span> | </span>
          <img className="comment" src="http://i.imgur.com/w9zMniq.png" alt="comment"></img>
          <div className="stat">{this.props.comments}</div>
        </div>
      </div>
    )
  }
});

class TopNav extends Component {
  render() {
    return (
      <div id="topnav">
        <div className="ui three column grid">
          <div className="column">
            <div id="new">
              <a className="yellow item" href="#">Write a story...</a>
            </div>
          </div>
            <div className="column">
              <div className="title" href="#"><h1>Middle</h1></div>
            </div>
          <div className="column">
            <div id='signinsearch'>
              <a className="SignIn" href="#">
                Sign in/Sign up
              </a>
              <div id='searchicon'>
                <a className="light green item" href="##">
                  <i className='search icon'>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
