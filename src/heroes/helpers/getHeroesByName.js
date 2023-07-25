import { heroes } from '../data/heroes';

const getHeroesByName = (name = '') => {
  const trimmedName = name.trim().toLowerCase();

  if (!trimmedName) {
    return [];
  }

  return heroes.filter(hero => 
    hero.superhero.toLowerCase().includes(trimmedName)
  );
};

export default getHeroesByName;
