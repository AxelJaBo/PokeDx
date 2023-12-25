import { PokemonCard } from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => (
    <div className="PokemonList">
        {pokemons.map((pokemon) => (
            <PokemonCard/>
        ))}
    </div>
);

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};

export { PokemonList };