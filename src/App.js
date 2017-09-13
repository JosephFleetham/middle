import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';

const App = React.createClass({
  render() {
    return (
      <div className="filler">
        <div className="sixteen wide column">
          <TopNav

          />
        </div>
        <br />
        <CardList

        />
      </div>
    );
  }
});

const CardList = React.createClass ({
  getInitialState: function () {
    return {
      data: {names:[ "Joseph Fleetham", "Sam Bryant", "Morris Alpert", "Julia Quam", "Mike Rendor", "Muhammed Abdul" ],
            titles:["The Best National Parks on the West Coast", "Cats: The People of Animals?", "Why ReactJS is So Frusturating", "How the Minnesota Twins Can Win the World Series", "How to Love Yourself Like Your Cat Loves You", "Top 100 Places to Travel This Fall"],
            photo:["https://unsplash.it/500/200/?random=1"]
            }
    };
  },
  // componentDidMount: function () {
  //   this.updateState();
  // },

  updateState: function () {
    this.setState({ data: data });
  },
  render: function () {
    const data = this.state.data;
      return (
        <div className="ui grid">
          <div className="two wide column">
          </div>
          <div className="five wide column">
            <Card
              name={data.names[0]}
              title={data.titles}
              photo={data.photo}
            />
          </div>
          <div className="one wide column">
          </div>
          <div className="five wide column">
            <Card
              name={data.names}
              title={data.titles}
              photo={data.photo}
            />

          </div>
          <div className="two wide column">
          </div>
          <br />
          <div className="two wide column">
          </div>
          <div className="five wide column">
            <Card
              name={data.names}
              title={data.titles}
              photo={data.photo}
            />

          </div>
          <div className="one wide column">
          </div>
          <div className="five wide column">
            <Card

            />

          </div>
          <div className="two wide column">
          </div>
          <br />
          <div className="two wide column">
          </div>
          <div className="five wide column">
            <Card

            />
          </div>
          <div className="one wide column">
          </div>
          <div className="five wide column">
            <Card

            />

          </div>
          <div className="two wide column">
          </div>
        </div>
    )
  }
});

class Card extends Component {
  render() {
    return (
      <div id="box">
        <img src={this.props.photo} alt="cover"></img>
        <div className="CardContent">
          <h1>{this.props.title}</h1>
          <p></p>
        </div>
        <div className="Author">
          <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="author"></img>
          <div className="name">{this.props.name}</div>
          <div className="time">{this.props.time}</div>
        </div>
      </div>
    )
  }
}

// class Card extends Component {
//   render() {
//     return (
//
//     );
//   }
// }

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
