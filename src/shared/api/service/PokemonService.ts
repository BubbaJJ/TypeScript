import http from '../PokemonAPI'

const getPokemons = (name: any) => {
    return http.get(`pokemon/${name}`)
}

const getPokemonsList = () => {
    return http.get(`pokemon?limit=2000`)
}

export default {
    getPokemons,
    getPokemonsList
}