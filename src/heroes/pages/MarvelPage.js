import { HeroesList } from '../components';

const MarvelPage = () => {
  return (
    <div className='mt-5'>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroesList publisher="Marvel Comics"/>
    </div>
  )
}

export default MarvelPage;
