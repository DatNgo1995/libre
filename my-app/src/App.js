import React, { Component } from "react";
import {Nav} from "./components/Nav";

import {BookList} from "./components/BookList";
import {Stats} from "./components/Stats";
import {UserBookList} from "./components/UserBookList";
import "./App.css";
import data from "./data.json";

class App extends Component {
  state = {
    data: data,
    curentTab: "stats",
    currentCategory: "Art & Design",
    menuItems : [
      {name: 'Home'},
      {name: 'Categories', subMenus: [{name: 'Fiction'}, {name: 'Nonfiction'}, {name: 'Art & Design'}]},
      {name: 'Wishlist'}
  ]
  };
  manageTab = tab => 
    this.setState({ curentTab: tab });
  

  manageTitle = title => this.setState({ currentCategory: title })

  

  render() {
    let { curentTab, currentCategory, data } = this.state;
    let userBookList = data.books.filter(book => book.recommended);
    return (
      <div className="App">
        
        <Nav menuList={this.state.menuItems} manageTitle = {this.manageTitle}/>
        <main>
        
         
      
          <header>
            <h1>{currentCategory} </h1>
            <h2>Interesting Stats</h2>
            <button>Add New Book</button>
          </header>
          <article>
            <nav>
              <ul>
                <li onClick={this.manageTab.bind(this,"stats")}>stats</li>
                <li onClick={this.manageTab.bind(this,"bookList")}>library</li>
                <li onClick={this.manageTab.bind(this,"userBookList")}>
                  pick for you
                </li>
              </ul>
            </nav>
            {curentTab === "stats" ? (
              <Stats userStats={data.users.userStats} />
            ) : curentTab === "bookList" ? (
              <BookList bookList={data.books} />
            ) : curentTab === "userBookList" ? (
              <UserBookList bookList={userBookList} />
            ) : null}
          </article>
        </main>
      </div>
    );
  }
}

export default App;
