import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import localData from "./data.json"
import update from 'react-addons-update';
import $ from 'jquery';


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

var App = React.createClass({
  getInitialState: function () {
    return {
      cards: []
    };
  },

  componentWillMount: function () {
    console.log(this);
    if (JSON.parse(localStorage.getItem('cards')) === null || JSON.parse(localStorage.getItem('cards')).length === localData.length ) {
      localStorage.setItem('cards', JSON.stringify(localData))
      this.setState({ cards: JSON.parse(localStorage.getItem('cards'))});
    }
    else {
      this.setState({ cards: JSON.parse(localStorage.getItem('cards'))});
    }
    var that = this;
    var url = "https://randomuser.me/api/?results=" + JSON.parse(localStorage.getItem('cards')).length

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.loopApiData(data);
    });
  },
  updateState: function (i, data) {
    this.setState({
      cards:  update(this.state.cards, {
        [i]: {
          photo: {$set: ("https://unsplash.it/500/200/?random=" + i)},
          author: {$set: data.results[i].name.first + " " + data.results[i].name.last},
          authorPhoto: {$set: data.results[i].picture.thumbnail},
          time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"},
          comments: {$set: (Math.floor(Math.random() * 40))}
        },
      })
    })
  },
  loopApiData: function (data) {
    for (var i=0; i<this.state.cards.length;i++) {
      this.updateState(i, data);
    }
  },
  handleSubmit: function (cards, newCards) {
    this.setState(cards : newCards);
  },
  render() {
    return (
      <div className="filler">
        <div className="sixteen wide column">
          <TopNav
            cards={this.state.cards}
            app={this}
          />

        </div>
        <br />
          <CardList
            cards={this.state.cards}
            app={this}
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
    for (var i=0;i<this.props.cards.length;i++) {
      numbers.push(i);
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

  handleUpVote: function (emptyHeart) {
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

const TopNav = React.createClass({
  getInitialState: function () {
    return {
      dropdownOpen: [],
    }
  },
  componentWillMount: function () {
    this.setState({
      dropdownOpen: false
    })
  },
  toggleForm: function () {
    if (this.state.dropdownOpen === false) {
      $('.menu')
      .slideDown();
      this.setState({ dropdownOpen: true });
    }
    else {
      $('.menu')
      .slideUp();
      this.setState({ dropdownOpen: false });
    }
  },
  render() {
    return (
      <div id="topnav">
        <div className="ui three column grid">
          <div className="column">
            <div id="new">
              <div className="ui dropdown">
                  <a className="yellow item" onClick={this.toggleForm}>Write a story...</a>
                  <div className="menu">
                    <NewCardForm
                      onFormSubmit={this.handleSubmit}
                      cards={this.props.cards}
                      app={this.props.app}
                    />
                  </div>
              </div>
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
});

  const NewCardForm = React.createClass({
    getInitialState: function () {
      return {
        newCards: []
      }
    },
    componentWillMount: function () {

    },
    updateTitleValue: function(evt) {
      this.setState({
        title: evt.target.value
      });
      console.log(this.state.title);
    },
    updateDescriptionValue: function(evt) {
      this.setState({
        description: evt.target.value
      });
      console.log(this.state.description);
    },
    handleSubmit: function(evt) {
      const newCards = this.state.newCards;
      newCards.push(
        {
          "id": (JSON.parse(localStorage.getItem("cards")).length + 1).toString(),
          "title": this.state.title,
          "description": this.state.description,
          "photo": "",
          "author": "",
          "authorPhoto": "",
          "time": "",
          "votes": "",
          "comments": ""
        },
      );
      var arr = JSON.parse(localStorage.getItem("cards")) || [];
      arr.push(
        this.state.newCards[0]
      );
      localStorage.setItem('cards', JSON.stringify(arr))
      console.log(JSON.parse(localStorage.getItem('cards')))
      this.props.app.setState({ cards: JSON.parse(localStorage.getItem('cards')) }); // is this doing anything right now?
      window.location.reload();
  },
  render() {
      return (
        <div id='newDropdown'>
          <form action="/action_page.php">
            <label for="fname" id="title">Title: </label>
            <br />
            <br />
            <input
              type="text"
              name="title"
              placeholder="Card title..."
              defaultValue={this.props.title}
              onChange={this.updateTitleValue}
            />
            <br />
            <br />
            <label for="lname" id="title">Description: </label>
            <br />
            <br />
            <textarea
              name='description'
              defaultValue={this.props.description}
              onChange={this.updateDescriptionValue}
              rows="4"
              cols="25"
              placeholder="Enter description here..."
            />
            <br />
            <br />
            <br />
            <button className='ui large blue button' onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )
    }

});

export default App;
