import { Link } from 'react-router-dom';

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroImgUrl = `/assets/heroes/${ id }.jpg`;
  const hasMultipleCharacters = characters !== alter_ego;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={ heroImgUrl } className="card-img" alt={ superhero }/>
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text">{ alter_ego }</p>
              {
                hasMultipleCharacters && <p>{ characters }</p>
              }
              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>

              <Link to={`/hero/${id}`}>
                More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard;
