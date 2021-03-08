import http from '../PokemonAPI'

const getPokemons = (name: any) => {
    return http.get(`pokemon/${name}`)
}

const getPokemonsList = () => {
    return http.get(`pokemon?limit=2000`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPokemons,
    getPokemonsList
}