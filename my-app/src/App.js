import React, { Component } from 'react';
import Nav from './components/Nav';

import {FaSearch} from './react-icons/fa';
import BookList from './components/BookList';
import Stats from './components/Stats'
import UserBookList from './components/UserBookList'
import './App.css';
import data from '/data.json'

class App extends Component {
  state = {
    data :data,
    currentTab : "stats",
    currentCategory: "Art & Design"
  }
  render() {
    let {curentTab,currentCategory} = this.state
    return (
      <div className="App">
        <header className="App-header">
        <div className = "search-area">
                <FaSearch />
                <input type="text"/>
            </div>
            
        </header>
        <main>
          <Nav />
            <header >
              <h1 >{currentCategory} </h1>
              <h2 >Interesting Stats</h2>
              <button>Add New Book</button>
            </header>
            <article >
              <nav>
                <ul>
                  <li><a href="./" alt="" ref ="">stats</a></li>
                  <li><a href="./" alt="" ref ="">library</a></li>
                  <li><a href="./" alt="" ref ="">pick for you</a></li>
                </ul>
              </nav>
              {curentTab === "stats"? <Stats />
              :curentTab === "bookList"? <BookList />
              :curentTab === "userBookList" ? <UserBookList /> : null}
            </article>
        </main>
      </div>
    );
  }
}

export default App;
