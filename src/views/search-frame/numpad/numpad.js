import './numpad.scss';

export function NumPad(props) {
  return (
    <div className='numpad'>
      <button class="key">1</button>
      <button class="key">2</button>
      <button class="key">3</button>
      <button class="key">4</button>
      <button class="key">5</button>
      <button class="key">6</button>
      <button class="key">7</button>
      <button class="key">8</button>
      <button class="key">9</button>
      <button class="key key-centered">0</button>
    </div>
  )
}