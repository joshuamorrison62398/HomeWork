import './App.css';
import StarShipCards from './components/StarShipCards';
import useFetch from './services/sw-api';

function App() {


  const {starships, isPending } = useFetch();


  return (

    <div className="App">

      <h1 className='title'>Star Wars Starships</h1>

      {isPending && <div>Loading...</div>}

      <div className='row'>
        {
          starships

          &&

          starships.results.map((ships, index) => {
            return <StarShipCards key={index} ships={ships}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
