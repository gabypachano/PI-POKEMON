import React, { useEffect } from 'react'
import Cards from '../../components/Cards/Cards'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllPokemons } from '../../redux/actions'
import style from './Home.module.css'


const Home = () => {
// Mi componente Home es el que renderiza mi componente Cards que es donde están mis cartas con todos los pokemones
// Cuando se monta el componente, que haga el dispatch
//            useEffect               useDispatch


const dispatch = useDispatch()
//Acá voy a crear mi Estado Global, se guarda todo lo que está en el estado allPokemons
const pokemons = useSelector(state => state.pokemonsFilter)


useEffect(() => {
  dispatch(getAllPokemons())
},[dispatch])


  return (
    <div className={style.container}>
      <Cards pokemons = {pokemons}/>
    </div>
  )
}

export default Home