import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd'
import { Searcher } from './components/searcher'
import { PokemonList } from './components/PokemonList'
import { getPokemon } from './api/getPokemon';
import { getPokemonsWithDetails, setLoading } from './actions';
import LOGO from './statics/logo.svg?react';
import './App.css'

function App() {
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
        {loading ? (
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
        ) : (
          <PokemonList pokemons={pokemons}/>
        )} 
      </div>
    </>
  )
}

export default App;
