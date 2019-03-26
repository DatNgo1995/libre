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
  manageTab = (tab) => {
    this.setState({curentTab: tab})
  }
  render() {
    let {curentTab,currentCategory,data} = this.state
    let userBookList = data.books.filter( book => book.recommended)
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
                  <li><a href="./" onClick = {this.manageTab.bind("stats")} >stats</a></li>
                  <li><a href="./" onClick = {this.manageTab.bind("bookList")}>library</a></li>
                  <li><a href="./" onClick = {this.manageTab.bind("userBookList")}>pick for you</a></li>
                </ul>
              </nav>
              {curentTab === "stats"? <Stats userStats = {data.users.userStats}/>
              :curentTab === "bookList"? <BookList bookList ={data.books}/>
              :curentTab === "userBookList" ? <UserBookList bookList = {userBookList} /> : null}
            </article>
        </main>
      </div>
    );
  }
}

export default App;
