import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import useForm from '../../hooks/useForm';
import HeroCard from '../components/HeroCard';
import { getHeroesByName } from '../helpers';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const heroes = getHeroesByName(q);
  const isHeroNotFound = q && heroes.length === 0;

  const onSearchSubmit = event => {
    event.preventDefault();
    const trimmedSearchText = searchText.trim();

    if (!trimmedSearchText) {
      return;
    }

    navigate(`?q=${ trimmedSearchText.toLowerCase() }`);
  }

  return (
    <div className="row mt-5">
      <div className="col-5">
        <h4>Searching</h4>
        <hr />

        <form onSubmit={ onSearchSubmit }>
          <input
            type="text"
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />

          <button className="btn btn-outline-primary mt-2">
            Search
          </button>
        </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr />

        {
          !q &&
          <div className="alert alert-primary animate__animated animate__fadeIn">
            Search a hero.
          </div>
        }

        {
          isHeroNotFound &&
          <div className="alert alert-danger animate__animated animate__fadeIn">
            No hero found for <b>{ q }</b>.
          </div>
        }

        {
          heroes.map(hero => (
            <HeroCard key={ hero.id } { ...hero } />
          ))
        }
      </div>
    </div>
  )
}

export default SearchPage;
