import React from "react";
import {FaCaretDown} from "react-icons/fa"
export const BookList = ({bookList}) => 


        <section className="library">
            {
                bookList.map (book => 
                        <section  className ="book common">
                            <img src={book.img} alt="cover"/>
                            <article className =" book-content">
                            <h3>{book.title}/{book.date}</h3>
                            <p className="description">{book.description}</p>
                            <div className = "dropdown">
                            <select>
                                <option>Finished</option>
                                <option>Loaned</option>
                                <option>Start</option>
                            </select>
                            <FaCaretDown className="fa-caret"/>
                            </div>
                           
                            </article>
                         
                            </section>
                    )
            }
        </section>
