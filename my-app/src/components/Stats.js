import React from "react";

export const Stats = ( props ) => {
    let {userStats} = props;
  return (

    <section className="favorite-author">
      <table>
        <tr>
          <thead>
            <td>Name</td>
            <td>Owned/Wishlist</td>
            <td>Nationality</td>
          </thead>
        </tr>
        <tbody>
          {props.favoriteAuthor.map(author => (
            <tr>
              <td>{author.name}</td>
              <td>
                {author.owned}/{author.wishlist}
              </td>
              <td>{author.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>

            <article className="read-stats">
                <div className="most-read">
                <h4>Most read format</h4>
                <h4>{userStats.mostReadFormat}</h4>
                </div>
                <div className="total-read-own">
                <h4>Total read/own</h4>
                <h4>{userStats.totalRead}/{userStats.totalOwn}</h4>
                <div className="most-re-read">
                <h4>Most re-read book</h4>
                <h4>{userStats.mostReRead}</h4>
                </div>
                </div>
            </article>

    </section>
  );
};
