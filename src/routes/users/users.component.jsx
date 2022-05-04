import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/button/button.styles";
import UserCard from "../../components/user-card/user-card.component";
import { createUser } from "../../features/users/users.action";
import {
  selectUserCounter,
  selectUsers,
} from "../../features/users/users.selector";
import { ButtonContainer, UsersContainer } from "./users.styles";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const userCounter = useSelector(selectUserCounter);

  const createHandler = () => {
    dispatch(createUser({ id: userCounter + 1, name: "JACK PEARSON" }));
  };

  return (
    <div>
      <ButtonContainer>
        <Button onClick={createHandler}>Create New User</Button>
      </ButtonContainer>
      <UsersContainer>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersContainer>
    </div>
  );
};

export default Users;
