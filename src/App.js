import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data.json"

const App = React.createClass({
  getInitialState: function () {
    return {
      cards: [
        {
          title: 'Practice squat',
          project: 'Gym Chores',
          photo: "https://unsplash.it/500/200/?random=" + Math.random()
        },
        {
          title: 'Bake squash',
          project: 'Kitchen Chores',
          photo: "https://unsplash.it/500/200/?random=" + Math.random()
        },
        {
          title: "do shit",
          project: "shit shit",
          photo: "https://unsplash.it/500/200/?random=" + Math.random()
        },
        {
          title: "more shit",
          project: "tryign to get rid of shit",
          photo: "https://unsplash.it/500/200/?random=" + +Math.random()
        }
      ],
    };
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
        project={card.project}
        photo={card.photo}
      />
    ));
    for (var i=0; i<cards.length; i++) {
      return (
        <div className="ui grid">
          <div className="two wide column">
          </div>
          <div className="five wide column">
            {cards[i + (Math.floor(Math.random() * cards.length))]}
          </div>
          <div className="one wide column">
          </div>
          <div className="five wide column">
            {cards[i + (Math.floor(Math.random() * cards.length))]}
          </div>
          <div className="two wide column">
          </div>
          <div className="two wide column">
          </div>
          <div className="five wide column">
            {cards[i + (Math.floor(Math.random() * cards.length))]}
          </div>
          <div className="one wide column">
          </div>
          <div className="five wide column">
            {cards[i + (Math.floor(Math.random() * cards.length))]}
          </div>
          <div className="two wide column">
          </div>
          <div className="two wide column">
          </div>
          <div className="five wide column">
            {cards[i + (Math.floor(Math.random() * cards.length))]}
          </div>
          <div className="one wide column">
          </div>
          <div className="five wide column">
            {cards[i + (Math.floor(Math.random() * cards.length))]}
          </div>
          <div className="two wide column">
          </div>
        </div>
      );
    };
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
          <p>{this.props.project}</p>
        </div>
        <div className="Author">
          <img src={this.props.author} alt="author"></img>
          <div className="name">{this.props.name}</div>
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
