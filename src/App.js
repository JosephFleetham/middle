import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cards from "./data.json"

const App = React.createClass({
  getInitialState: function () {
    return {
      cards: [],
      person: []
    };
  },
  componentDidMount: function () {
    this.updateState();
    var that = this;
    var url = 'https://randomuser.me/api/'

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ person: data.person });
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
    return (
      <div id="box">
        <img src={this.props.photo} alt="cover"></img>
        <div className="CardContent">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
        <div className="Author">
          <img src={this.props.authorPhoto} alt="authorOhoto"></img>
          <div className="author">{this.props.author}</div>
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
