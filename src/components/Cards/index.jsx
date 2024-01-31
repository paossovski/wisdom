import './styles.css';

export const Cards = ({src, text}) => {
  return (
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
  );
}