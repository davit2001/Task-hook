import {nanoid} from "nanoid";
import {ADD_PROJECT, REMOVE_PROJECT, UPDATE_PROJECT} from "./constants/projectTypes";

import {projectReducer} from "./reducer.spec";

const imageUrl = "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

const initialState = {
    data: [
        {
            id: nanoid(),
            title: "project 1",
            message: "message 1",
            image: imageUrl
        }, {
            id: nanoid(),
            title: "project 2",
            message: "message 2",
            image: imageUrl
        }, {
            id: nanoid(),
            title: "project 3",
            message: "message 3",
            image: imageUrl
        }, {
            id: nanoid(),
            title: "project 4",
            message: "message 4",
            image: imageUrl
        },
    ]
};

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            };

        case REMOVE_PROJECT:
            return {
                ...state,
                data: state.data.filter((project) => project.id !== action.payload.id),
                removeId: null
            };
        case UPDATE_PROJECT:
            return {
                ...state,
                data: state.data.map((project) => {
                    return projectReducer(project, action);
                })
            };
        default:
            return state;
    }
};

export const projectSelector = () => (state) => state.projects.data;
export const tasksProjectSelector = (projectId) => (state) => state.projects.data.find((project) => project.id === projectId);
