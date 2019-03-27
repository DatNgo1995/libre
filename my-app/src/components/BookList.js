import React from "react";

export const BookList = ({bookList}) => {
    console.log(bookList)
    return (
        <section>
            {
                bookList.map (book => 
                        <section>
                            <img src={book.img} alt="cover"/>
                            <h3>{book.title}/{book.date}</h3>
                            <p>{book.description}</p>
                            <select>
                                <option>Finished</option>
                                <option>Loaned</option>
                                <option>Start</option>
                            </select>
                            </section>
                    )
            }
        </section>
    )
}