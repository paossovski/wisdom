import './styles.css';
import { Link } from 'react-router-dom';

export const Cards = ({src, text}) => {
  return (
    <Link to="/HomePage" className='link'>
      <div className="container-cards">
          <article className="card">
            <figure>
              <img src={src} alt={text} />
              <figcaption>
                <h3>{text}</h3>
              </figcaption>
            </figure>
          </article>
      </div>
    </Link>
  );
}