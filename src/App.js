import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cards from "./data.json"
import update from 'react-addons-update';

const App = React.createClass({
  getInitialState: function () {
    return {
      cards: [],
      votes: [],
      comments: []
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
    this.setState({ cards: cards });
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
  // onNewCard: function(index) {
  //   var newData = this.state.cards.slice(); //copy array
  //   newData.splice(index, 1); //remove element
  //   this.setState({cards: newData}); //update state
  // },
  // handleNewCard: function (cards) {
  //   this.onNewCard();
  // },
  // componentDidMount: function () {
  //   this.handleNewCard();
  // },
  // this.setState({
  //   data: update(this.state.data, {$splice: [[index, 1]]})
  // }),

  render: function () {
    // leanpub-start-insert
    const cards = this.props.cards.map((card) => (
      <Card
        id={card.id}
        title={card.title}
        description={card.description}
        photo={card.photo}
        author={card.author}
        authorPhoto={card.authorPhoto}
        time={card.time}
        comments={card.comments}
        onUpVote={this.handleUpVote}

      />
    ));
    return (
      <div id="CardList">
        <div className="ui four doubling centered stackable cards">
            {cards[0]}
            {cards[1]}
            {cards[2]}
            {cards[3]}
            {cards[4]}
            {cards[5]}
        </div>
      </div>
    );
  },
});

const Card = React.createClass({
  getInitialState: function () {
    return {
      votes: []
    }
  },
  componentWillMount: function () {
    var joined = this.state.votes.push(cards.votes);
    this.setState({
      votes: joined
    });
  },
  handleUpVote: function () {
    this.setState({
      votes: this.state.votes + 1
    });
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
            <img className="heart" src="http://i.imgur.com/iPhyYk7.png" alt="heart"></img>
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
