/* eslint-disable react-hooks/exhaustive-deps */
import PokemonService from '../../../shared/api/service/PokemonService';
import { useEffect, useState } from "react";
import '../../../shared/css/Global.css'

export const ConcertsView = () => {

  const [pokemon, setPokemon] = useState<any>({})
  const [search, setSearch] = useState("")
  const [error, setError] = useState(false)
  var [listItems, setListItems] = useState<any>([])

  useEffect(() => {
    getPokemonsForList()
  }, [])

  useEffect(() => {
    getPokemonsAPI()
  }, [search])

  const handleChange = (event: any) => {
    setSearch(event)
  }

  const getPokemonsForList = async () => {
    const { data } = await PokemonService.getPokemonsList()
    setListItems(data.results)
    console.log(listItems)
  }

  const getPokemonsAPI = async () => {
    try {
      const data = await PokemonService.getPokemons(search)
      setPokemon(data)
      setError(error)
      console.log(data)
    }
    catch (error) {
      setError(error)
    }
  }

  const displayPokemon = () => {
    if (error || search === "") {
      return <div>
        <h1>No pokemon selected.</h1>
      </div>
    } else {
      return <div>
        <h1 style={{ textTransform: 'capitalize' }}>Name: {pokemon.data?.species?.name}</h1>
        <h1>Pokedex #: {pokemon.data?.id}</h1>
        {/*<h1 style={{ textTransform: 'capitalize' }}>Type(s): {pokemon.data?.types[0]?.type?.name} / {pokemon.data?.types[1]?.type?.name}</h1>
        <h1>Attack: {pokemon.data?.stats[1]?.base_stat}</h1>}
        <h1>Defense: {pokemon.data?.stats[2]?.base_stat}</h1>
    <h1>Hp: {pokemon.data?.stats[0]?.base_stat}</h1>*/}
        <img src={pokemon.data?.sprites?.front_default} alt={"Not found."} />
      </div>
    }
  }

  return <div className="body">
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
