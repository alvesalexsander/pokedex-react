import './display-screen.scss';
import { PokemonDisplayImage } from '../../../models/images/pokemon-display.image';

import { useSelector } from 'react-redux';

export function DisplayScreen(props) {
  const pokemonData = useSelector(state => state.pokemon);
  const imageContainer = document.getElementById('pokemonImage');
  const loading = document.getElementById('pokeballLoading');
  
  return (
    <div className='display_screen'>
      <div id='pokemonName' className='display_screen__name displayText' style={{
        display: `${pokemonData?.caught?.name ? 'block' : 'none'}`
      }}>
        {pokemonData?.caught?.name}
      </div>

      <div id='types' className='display_screen__type'>
        <div id='type0'
          className={`display_screen__type-0 displayText ${pokemonData?.caught?.types?.[0]?.type?.name?.toLowerCase?.() ?? ''}`}
          style={{ visibility: `${pokemonData?.caught?.types?.[0]?.type?.name ? 'visible' : 'hidden'}` }}>
          {pokemonData?.caught?.types?.[0]?.type?.name}
        </div>

        <div id='type1'
          className={`display_screen__type-1 displayText ${pokemonData?.caught?.types?.[1]?.type?.name?.toLowerCase?.() ?? ''}`}
          style={{ visibility: `${pokemonData?.caught?.types?.[1]?.type?.name ? 'visible' : 'hidden'}` }}>
          {pokemonData?.caught?.types?.[1]?.type?.name}
        </div>
      </div>

      <div id='pokemonImage' className='display_screen__image'
        style={{ backgroundImage: setDisplayImage(pokemonData) }}>
        <div className='displayText'>{getDisplayMessage(pokemonData)}</div>
      </div>
      <div id='pokeballLoading'></div>
    </div>
  )

  async function setDisplayImage(pokemonData) {
    if (pokemonData.error || !isElementReady('pokemonImage')) {
      return '';
    }

    const pokemonImage = new PokemonDisplayImage(imageContainer, loading);
    pokemonImage.src = pokemonData?.caught?.sprites?.front_default;
  }

  function getDisplayMessage(pokemonData) {
    if (!pokemonData.error && !pokemonData?.caught) {
      clearDisplayImage();
      return 'Pesquise pelo nome ou #número do Pokémon!';
    }
    switch (pokemonData?.errorDetail) {
      case 'missing':
        clearDisplayImage();
        return 'Pokémon não encontrado';
      case 'unavailable':
        clearDisplayImage();
        return 'Erro ao capturar o Pokémon (Serviço indisponível)';
      default:
        return '';
    }
  }

  function clearDisplayImage() {
    if (!isElementReady('pokemonImage')) {
      console.log('not ready')
      return;
    }
    Object.assign(document?.getElementById?.('pokemonImage').style, {
      'background-image': ''
    });
  }

  function isElementReady(elementId) {
    return document?.getElementById?.(elementId) ? true : false;
  }

}