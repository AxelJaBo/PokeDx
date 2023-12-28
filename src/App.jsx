import { useEffect, useState } from 'react';
import { Col } from 'antd'
import { Searcher } from './components/searcher'
import { PokemonList } from './components/PokemonList'
import LOGO from './statics/logo.svg?react';
import { getPokemon } from './api/getPokemon';
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <div className="App">
        <Col
          span={4}
          offset={10}
        >
          <LOGO/>
        </Col>
        <Col span={8} offset={8}>
          <Searcher/>
        </Col>
        <PokemonList pokemons={pokemons}/>
      </div>
    </>
  )
}

export default App
