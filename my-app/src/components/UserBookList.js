import React from "react";

export const UserBookList = ({bookList}) => {

    let  bgColor = ["#FBC164","#F1CECD","#ECE7E9","#D0E3E8"], count= 0;
    return (
        <section className="bookList individual" style = {{marginTop: '-1rem'}}>
            {
                bookList.map (book => 
                        <section className ="book" style = {{backgroundColor : bgColor[count]}}>
                            {console.log(count++)}
                            <img src={book.img} alt="cover"/>
                            <article className =" book-content">
                            <h3>{book.title}/{book.date}</h3>
                            <p>{book.description}</p>
                           <button>Add to wishlist</button>
                            </article>
                            
                            </section>
                    )
            }
        </section>
    )
}