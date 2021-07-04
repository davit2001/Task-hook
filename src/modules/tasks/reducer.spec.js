import { UPDATE_TASK } from "./constants/taskTypes";

export const taskReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      let { id, name, assignee, description, status } = action.payload;
      if (state.id === id) {
        let updatedTask = { ...state };
        updatedTask.name = name;
        updatedTask.assignee = assignee;
        updatedTask.description = description;
        updatedTask.status = status;

        return updatedTask;
      }
      return state;

    default:
      return state;
  }
};