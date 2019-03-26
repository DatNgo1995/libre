import React from "react";

export const UserBookList = (bookList) => {
    return (
        <section>
            {
                bookList.map (book => 
                        <section>
                            <img src={book.img} alt="cover"/>
                            <h3>{book.title}/{book.date}</h3>
                            <p>{book.description}</p>
                           <button>Add to wishlist</button>
                            </section>
                    )
            }
        </section>
    )
}