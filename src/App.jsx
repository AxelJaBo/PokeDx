import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd'
import { Searcher } from './components/searcher'
import { PokemonList } from './components/PokemonList'
import { getPokemon, getPokemonDetails } from './api/getPokemon';
import { setPokemons } from './actions';
import LOGO from './statics/logo.svg?react';
import './App.css'

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonDetailed = await Promise.all(
        pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonDetailed));
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

export default App;
