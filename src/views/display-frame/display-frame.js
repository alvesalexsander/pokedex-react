import './display-frame.scss';
import { DisplayScreen } from './display-screen/display-screen';

export function DisplayFrame(props) {
  return (
    <div className="display-frame">
      <div className="display">
        <DisplayScreen></DisplayScreen>
      </div>
    </div>
  )
}