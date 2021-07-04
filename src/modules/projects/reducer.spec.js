import { REMOVE_PROJECT, UPDATE_PROJECT } from "./constants/projectTypes";

export const projectReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PROJECT:
      let { id, title, message, image } = action.payload;
      if (state.id === id) {
        let updatedProject = { ...state };
        updatedProject.title = title;
        updatedProject.message = message;
        updatedProject.image = image;
        return updatedProject;
      }
      return state
    default:
      return state;
  }
};
