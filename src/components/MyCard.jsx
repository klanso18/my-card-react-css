import React from 'react';
import '../MyCard.scss';

function MyCard() {
  return (
    <div className="my-card">
      <div className="my-card-wrapper">
        <figure>
          <img src="https://cdn.pixabay.com/photo/2023/02/07/18/56/rocket-7774875_1280.png"/>
        </figure>
        <div className="card-body">
          <h1>A la conquête des étoiles</h1>
          <p>Vous rêvez de vous retrouver dans la peau des astronautes ? Admirer la terre depuis l'espace, c'est désormais une réalité pour le commun des mortels. Pour un budget allant de 75000 dollars à 250000 dollars selon les agences, le voyage dans l'espace est une expérience sensationnelle qui mérite le détour…</p>
          <a href="#" class="read-more">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyCard;