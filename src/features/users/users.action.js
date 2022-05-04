import { createAction } from "../utils/create-action.utils";
import { USER_ACTION_TYPES } from "./users.types";

export const createUser = (user) =>
  createAction(USER_ACTION_TYPES.CREATE_USER, user);

export const deleteUser = (userId) =>
  createAction(USER_ACTION_TYPES.DELETE_USER, userId);

export const updateUser = (userId) =>
  createAction(USER_ACTION_TYPES.UPDATE_USER, userId);
