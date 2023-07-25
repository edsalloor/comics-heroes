import { HeroesList } from '../components';

const DCPage = () => {
  return (
    <div className='mt-5'>
      <h1>DC Comics</h1>
      <hr />

      <HeroesList publisher="DC Comics"/>
    </div>
  )
}

export default DCPage;
