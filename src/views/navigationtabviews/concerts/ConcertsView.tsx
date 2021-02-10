import PokemonService from '../../../shared/api/service/PokemonService';
import { useEffect, useState } from "react";

export const ConcertsView = () => {

  const [pokemon, setPokemon] = useState<any>({})
  const [search, setSearch] = useState("")
  const [error, setError] = useState(false)
  var [listItems, setListItems] = useState<any>([])

  useEffect(() => {
    getPokemonsForList()
  }, [])

  const getPokemonsForList = async () => {
    const { data } = await PokemonService.getPokemonsList()
    setListItems(data.results)
    console.log(listItems)
  }

  const handleChange = (event: any) => {
    setSearch(event)
    getPokemonsAPI()
  }

  const getPokemonsAPI = async () => {
    try {
      const data = await PokemonService.getPokemons(search)
      setPokemon(data)
      setError(false)
      console.log(data)
    }
    catch (error) {
      setError(error)
    }
  }

  const displayPokemon = () => {
    if (!error) {
      return <div>
        {/* <h1>Name: {pokemon.data.species.name}</h1>
        <h1>Weight: {pokemon.data.weight}</h1>
        <img src={pokemon.data.sprites.front_default} /> */}
      </div>
    }
    else {
      return <div>
        <h1>No pokemon found.</h1>
      </div>
    }
  }

  return <div>
    <select>
      {listItems
        .sort((a: any, b: any) => a.name > b.name)
        .map((item: any) =>
        (<option onClick={() => handleChange(item.name)}
          value={item.name}>{item.name}</option>))}
    </select><br />
    {displayPokemon()}
  </div>;
};
