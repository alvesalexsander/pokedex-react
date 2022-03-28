import './display-frame.scss';
import { DisplayScreen } from './display-screen/display-screen';
import { ActionButtons } from './action-buttons/action-buttons';

export function DisplayFrame(props) {
  return (
    <div className="display-frame">
      <div className="display">
        <DisplayScreen></DisplayScreen>
      </div>
      <ActionButtons></ActionButtons>
    </div>
  )
}