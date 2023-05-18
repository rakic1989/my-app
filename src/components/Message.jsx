import { avatarImages } from "../library/avatar";
import "../styles/Message.css";

export function Message(props) {
  return (
    <div className="message">
      <img
        src={avatarImages[props.avatarIndex]}
        alt={props.author}
        width={100}
        height={100}
      />
      <div className="message-author">{props.author}:</div>
      <div className="message-text">{props.text}</div>
      <hr />
    </div>
  );
}
