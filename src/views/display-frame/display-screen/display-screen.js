import './display-screen.scss';

import { useSelector } from 'react-redux';

export function DisplayScreen(props) {
  const pokemonData = useSelector(state => {
    if (state.pokemon.error) {
      handlePokemonDataError(state.pokemon);
      return;
    }
    if (state.pokemon.caught) {
      updateDisplay(state.pokemon);
    }
  });

  return (
    <div className="display_screen">
      <div id="pokemonName" className="display_screen__name displayText"></div>
      <div id="types" className="display_screen__type">
        <div id="type0" className="display_screen__type-0 displayText"></div>
        <div id="type1" className="display_screen__type-1 displayText"></div>
      </div>
      <div id="pokemonImage" className="display_screen__image displayText">Pesquise pelo nome ou #número do Pokémon!</div>
    </div>
  )

  function updateDisplay(pokemonData) {
    hideTypes(pokemonData);
    setTypes(pokemonData);
  }

  function handlePokemonDataError(errorData) {
    hideTypes(errorData);
    resetImage();
    switch (errorData.errorDetail) {
      case 'missing':
        document.getElementById('pokemonImage').innerHTML = 'Pokémon não encontrado';
        break;
      case 'unavailable':
        document.getElementById('pokemonImage').innerHTML = 'Erro ao capturar o Pokémon (Serviço indisponível)';
        break;
      default:
        document.getElementById('pokemonImage').innerHTML = 'Pesquise pelo nome ou #número do Pokémon!';
    }
  }

  function hideTypes(pokemonData) {
    if (!document.getElementById('types') || !document.getElementById('pokemonName')) {
      return;
    }

    if (!pokemonData?.caught?.types?.length) {
      document.getElementById('types').style.display = 'none';
      document.getElementById('pokemonName').style.display = 'none';
      console.log('sim')
      return;
    }
    document.getElementById('types').style.display = 'block';
    document.getElementById('pokemonName').style.display = 'block';
    console.log('nao');
  }

  function resetImage() {
    document.getElementById('pokemonImage').style.backgroundImage = '';
  }

  function setTypes(pokemonData) {
    if (!pokemonData?.caught?.types?.length || !document.getElementById('types')) {
      return;
    }

    document.getElementById('type0').innerHTML = pokemonData?.caught?.types?.[0]?.type?.name;
    if (pokemonData?.caught?.types?.[1]?.type?.name) {
      document.getElementById('type1').innerHTML = pokemonData?.caught?.types?.[1]?.type?.name;
    }

  }

}