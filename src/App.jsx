import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd'
import { Searcher } from './components/searcher'
import { PokemonList } from './components/PokemonList'
import LOGO from './statics/logo.svg?react';
import './App.css'
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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
