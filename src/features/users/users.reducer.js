import { reverseName } from "../utils/reverse-name.utils";
import { USER_ACTION_TYPES } from "./users.types";

const INITIAL_STATE = { users: [], counter: 0 };

export const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  console.log(type);
  console.log(payload);

  switch (type) {
    case USER_ACTION_TYPES.CREATE_USER:
      return {
        ...state,
        users: [...state.users, payload],
        counter: state.counter + 1,
      };

    case USER_ACTION_TYPES.DELETE_USER: {
      const newUsers = [...state.users].filter(
        (user) => user.id.toString() !== payload
      );
      return { ...state, users: newUsers };
    }

    case USER_ACTION_TYPES.UPDATE_USER: {
      const index = [...state.users].findIndex(
        (user) => user.id.toString() === payload
      );

      if (!(index > -1)) {
        console.log("User not found", index);
        return state;
      }

      const newUser = { ...state.users[index] };
      newUser.name = reverseName(newUser.name);

      const newUsers = [...state.users];
      newUsers[index] = newUser;

      return { ...state, users: newUsers };
    }

    default:
      return state;
  }
};
