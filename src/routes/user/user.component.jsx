import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import UserCard from "../../components/user-card/user-card.component";
import { deleteUser, updateUser } from "../../features/users/users.action";
import { selectUsers } from "../../features/users/users.selector";
import { ButtonContainer, UserContainer } from "./user.styles";

const User = () => {
  const { userId } = useParams();
  const users = useSelector(selectUsers);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = users.find((user) => user.id.toString() === userId);
    setUser(user);
  }, [userId, users]);

  const deleteHandler = () => {
    dispatch(deleteUser(userId));
  };

  const updateHandler = () => {
    dispatch(updateUser(userId));
  };

  return (
    <UserContainer>
      {user ? <UserCard user={user} /> : <div>No User Found!</div>}
      <ButtonContainer>
        <Button onClick={updateHandler}>Update Me</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={deleteHandler}>Delete Me</Button>
      </ButtonContainer>
    </UserContainer>
  );
};

export default User;
