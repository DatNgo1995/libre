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
    navDisplay: "none",
    menuItems : [
      {name: 'Home'},
      {name: 'Categories', subMenus: [{name: 'Fiction'}, {name: 'Nonfiction'}, {name: 'Art & Design'}]},
      {name: 'Wishlist'}
  ],
 

  };
 
  manageTab = (e,tab) => {
    Array.from(document.querySelectorAll('.tab li')).forEach(element => {
      element.style.borderBottom =' 0px solid  #6574cd'
    });
    e.target.style.borderBottom = ' 2px solid  #6574cd'
    this.setState({ curentTab: tab });
  }
   
  

  manageTitle = title => this.setState({ currentCategory: title })

  toggleNav = () => 
    this.state.navDisplay === "none" ? this.setState({ navDisplay: "flex" }): this.setState({ navDisplay: "none" })

  


  render() {
    let { curentTab, currentCategory, data } = this.state;
    let userBookList = data.books.filter(book => book.recommended);
    return (
      <div className="App">
        
        <Nav menuList={this.state.menuItems} manageTitle = {this.manageTitle} toggleNav= {this.toggleNav} navDisplay={this.state.navDisplay}/>
        <main>
        
         
      
          <header>
            <div>
            <h1>{currentCategory} </h1>
            <h2>Interesting Stats</h2>
            </div>
            
            <button>Add New Book</button>
          </header>
          <article>
            <nav>
              <ul  className="tab">
                <li onClick={e=> this.manageTab(e,"stats")}>stats</li>
                <li onClick={e=> this.manageTab(e,"bookList")}>library</li>
                <li onClick={e=> this.manageTab(e,"userBookList")}>
                  pick for you
                </li>
              </ul>
            </nav>
            {curentTab === "stats" ? (
              <Stats userStats={data.users.userStats} />
            ) : curentTab === "bookList" ? (
              <BookList bookList={data.books} />
            ) : curentTab === "userBookList" ? (
              <UserBookList bookList={userBookList}  />
            ) : null}
          </article>
        </main>
      </div>
    );
  }
}

export default App;
