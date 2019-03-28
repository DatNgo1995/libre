import React from "react";

export const Stats = ( {userStats} ) => {

  return (
   
    <section className="favorite-author">
    <article className = "author-table" >
      <table>
      <thead>
        <tr>
          
            <td>Name</td>
            <td>Owned/Wishlist</td>
            <td>Nationality</td>
          
        </tr>
        </thead>
        <tbody>
          {userStats.favoriteAuthors.map((author,i) => (
            <tr key={i}>
              <td>{author.name}</td>
              <td>
                {author.owned}/{author.wishlist}
              </td>
              <td>{author.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </article>

            <article className="read-stats">
                <div className="read-stats-upper">
                <div className="most-read">
                <p className="purple-text">Most read format</p>
                <p>{userStats.mostReadFormat}</p>
                </div>
                <div className="total-read-own">
                <p className="purple-text">Total read/own</p>
                <p>{userStats.totalRead}/{userStats.totalOwn}</p>
                </div>
                </div>
                <div className="most-re-read">
                <p className="purple-text">Most re-read book</p>
                <p>{userStats.mostReRead}</p>
                </div>
                
            </article>

    </section>
  );
};
