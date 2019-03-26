import React from 'react';

export const Aside = (userInfo) => {
    return (
        <aside>
            <div>
                <h2>{userInfo.name}</h2>
                <h3>Joined since {userInfo.date}</h3>
            </div>
            <div>
               <h1> You have read {userInfo.books.length} of 30 books in 2018. </h1>
            </div>
            <div>
                <h3>Continue reading</h3>
                {
                    userInfo.books.map ( book => 
                        <div>
                            <img alt="cover"/>
                            <h2>{book.title}</h2>
                            <h3>{book.page} / {book.totalPage}</h3>
                        </div>    
                    )
                }
            </div>
        </aside>
    )
}