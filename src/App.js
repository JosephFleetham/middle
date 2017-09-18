import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cards from "./data.json"
import update from 'react-addons-update';

const App = React.createClass({
  getInitialState: function () {
    return {
      cards: []
    };
  },

  componentDidMount: function () {
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
        cards: update(that.state.cards, {0: {author: {$set: data.results[0].name.first + " " + data.results[0].name.last}}, authorPhoto: {$set: data.results[0].picture.thumbnail}})
      }),
      that.setState({
        cards: update(that.state.cards, {0: {authorPhoto: {$set: data.results[0].picture.thumbnail}}})
      }),
      that.setState({
        cards: update(that.state.cards, {0: {time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"}}})
      }),
      that.setState({
        cards: update(that.state.cards, {1: {author: {$set: data.results[1].name.first + " " + data.results[1].name.last}}})
      }),
      that.setState({
        cards: update(that.state.cards, {1: {authorPhoto: {$set: data.results[1].picture.thumbnail}}})
      }),
      that.setState({
        cards: update(that.state.cards, {1: {time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"}}})
      }),
      that.setState({
        cards: update(that.state.cards, {2: {author: {$set: data.results[2].name.first + " " + data.results[2].name.last}}})
      }),
      that.setState({
        cards: update(that.state.cards, {2: {authorPhoto: {$set: data.results[2].picture.thumbnail}}})
      }),
      that.setState({
        cards: update(that.state.cards, {2: {time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"}}})
      }),
      that.setState({
        cards: update(that.state.cards, {3: {author: {$set: data.results[3].name.first + " " + data.results[3].name.last}}})
      }),
      that.setState({
        cards: update(that.state.cards, {3: {authorPhoto: {$set: data.results[3].picture.thumbnail}}})
      }),
      that.setState({
        cards: update(that.state.cards, {3: {time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"}}})
      }),
      that.setState({
        cards: update(that.state.cards, {4: {author: {$set: data.results[4].name.first + " " + data.results[4].name.last}}})
      }),
      that.setState({
        cards: update(that.state.cards, {4: {authorPhoto: {$set: data.results[4].picture.thumbnail}}})
      }),
      that.setState({
        cards: update(that.state.cards, {4: {time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"}}})
      }),
      that.setState({
        cards: update(that.state.cards, {5: {author: {$set: data.results[5].name.first + " " + data.results[5].name.last}}})
      }),
      that.setState({
        cards: update(that.state.cards, {5: {authorPhoto: {$set: data.results[5].picture.thumbnail}}})
      }),
      that.setState({
        cards: update(that.state.cards, {5: {time: {$set: ((Math.floor(Math.random() * 15) + 1)) + " min " + ((Math.floor(Math.random() * 58) + 1)) + " sec"}}})
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
        title={card.title}
        description={card.description}
        photo={card.photo}
        author={card.author}
        authorPhoto={card.authorPhoto}
        time={card.time}

      />
    ));
    return (
      <div className="ui grid">
        <div className="two wide column">
        </div>
        <div className="five wide column">
          {cards[0]}
        </div>
        <div className="one wide column">
        </div>
        <div className="five wide column">
          {cards[1]}
        </div>
        <div className="two wide column">
        </div>
        <div className="two wide column">
        </div>
        <div className="five wide column">
          {cards[2]}
        </div>
        <div className="one wide column">
        </div>
        <div className="five wide column">
          {cards[3]}
        </div>
        <div className="two wide column">
        </div>
        <div className="two wide column">
        </div>
        <div className="five wide column">
          {cards[4]}
        </div>
        <div className="one wide column">
        </div>
        <div className="five wide column">
          {cards[5]}
        </div>
        <div className="two wide column">
        </div>
      </div>
    );
    // leanpub-end-insert
  },
});

const Card = React.createClass({

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
      </div>
    )
  }
});

class TopNav extends Component {
  render() {
    return (
      <div id="topnav">
        <div className="ui relaxed grid">
            <div className="sixteen wide column">
                <div className="ui grid text menu">
                  <div className="two wide column"></div>
                    <div className="five wide column">
                        <a className="yellow item" href="#">Write a story...</a>
                    </div>
                    <div className="five wide column">
                        <div className="yellow item" href="#"><h1>Middle</h1></div>
                    </div>
                    <div className="three wide column">
                        <div id='signinsearch'>
                          <a className="light green item active" href="#">
                            Sign in/Sign up<br />
                              <div id='searchicon'>
                                <a className="light green item" href="##">
                                  <i className='search icon'>
                                  </i>
                                </a>
                              </div>
                          </a>
                        </div>
                    </div>
                    <div className="one wide column"></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
