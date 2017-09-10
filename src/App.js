import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="filler">
        <div className="sixteen wide column">
          <TopNav

          />
        </div>
        <br />
        <CardDashboard

        />
      </div>
    );
  }
}

class CardDashboard extends Component {
  render() {
    return (
      <div id='box'>
        <div className='ui grid'>
          <div className="eight wide column">
            <h2>Welcome to React</h2>
          </div>
          <div className="eight wide column">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </div>
    );
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
                    <div className="two wide column">
                        <a className="light green item active" href="#">Log in/Log out</a>
                    </div>
                    <div className="one wide column">
                      <i className='search icon'></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
