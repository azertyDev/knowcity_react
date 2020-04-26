import {
  REGISTRATION_CHANGE_EMAIL_TEXT,
  REGISTRATION_CHANGE_PASSWORD_TEXT,
  REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT
} from "./actions";

const initialState = {
  email: "",
  password: "",
  repeatPassword: "",
};

export const registrationReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REGISTRATION_CHANGE_EMAIL_TEXT:
      return {
        ...state,
        email: payload
      };
    case REGISTRATION_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: payload
      };
    case  REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT:
      return {
        ...state,
        repeatPassword: payload
      };
    default:
      return state;
  }
};
