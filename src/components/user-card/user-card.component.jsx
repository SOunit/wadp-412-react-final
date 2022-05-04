import React from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./user-card.styles";

const UserCard = ({ user }) => {
  return (
    <Link to={`/${user.id}`}>
      <CardContainer>
        <div>{user.name}</div>
        <div>
          <img
            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            alt={user.name}
            style={{ width: "100%", maxWidth: "8rem" }}
          />
        </div>
      </CardContainer>
    </Link>
  );
};

export default UserCard;
