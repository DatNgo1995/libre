import React from 'react';

export const Aside = ({userInfo}) => {
    console.log( userInfo)
    return (
        <aside className="user-info">
        
                <h1>{userInfo.name}</h1>
                <p>Joined since {userInfo.joined}</p>
         
 
               <h3> You have read {userInfo.books.length} of 30 books in 2018. </h3>
      
         
               
                <div className="book book-aside">
                {
                    userInfo.books.map ( book => 
              
                            <img alt="cover" src ={book.img}/>
   
                    )
                }
                </div>
      
        </aside>
    )
}