class PokemonDisplayImage extends Image {

  onload = () => {
    this.setLoadingElementVisibility('hidden');
    this.drawPokemon();
  }
  
  constructor (imgContainer, loadingElement) {
    super();
    this.imgContainer = imgContainer;
    this.loadingElement = loadingElement;
    this.discardCurrentPokemon();
    this.setLoadingElementVisibility('visible');
  }

  discardCurrentPokemon() {
    Object.assign(this.imgContainer.style, {
      'animation-name': 'pkmnChange',
      'animation-duration': '.2s',
      'animation-timing-function': 'ease-in',
      'animation-fill-mode': 'forwards',
    });
  }

  drawPokemon() {
    Object.assign(this.imgContainer.style, {
      'display': 'flex',
      'animation-name': 'pkmnIn',
      'animation-duration': '.5s',
      'animation-timing-function': 'ease-out',
      'background-image': `url('${this.src}')`
    });
  }

  setLoadingElementVisibility(value) {
    Object.assign(this.loadingElement.style, {
      visibility: value
    });
  }

}

module.exports = { PokemonDisplayImage };