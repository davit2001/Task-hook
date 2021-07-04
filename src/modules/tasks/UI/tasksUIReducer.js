import {
  CLOSE_TASK_DIALOG,
  EDIT_TASK_ID,
  TOGGLE_TASK_FORM,
} from "../constants/taskTypes";

const initialState = {
  isOpenDialog: false,
  isOpenForm: false,
  editId: "",
  removeId: "",
};

export const tasksUIReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TASK_FORM:
      return {
        ...state,
        isOpenForm: action.payload,
      };

    case CLOSE_TASK_DIALOG:
      return {
        ...state,
        removeId: action.payload?.id,
        isOpenDialog: action.payload.isOpenDialog || false,
      };

    case EDIT_TASK_ID:
      return {
        ...state,
        editId: action.payload.id,
        isOpenForm: true,
      };

    default:
      return state;
  }
};
