import { PokemonCard } from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => (
    <div className="PokemonList">
        {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.sprites.front_default}/>
        ))}
    </div>
);

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};

export { PokemonList };