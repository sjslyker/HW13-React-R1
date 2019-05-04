import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.removeFriend(props.id)} className="remove" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
