
export  function  fetchProjectAdd (project) {
  return {
      type: 'ADD_PROJECT',
      payload: project
  }
}

export function fetchProjectRemove(id) {
   return {
        type: 'REMOVE_PROJECT',
        payload: {
            id
        }
    }
}

export function fetchProjectUpdate(data) {
    return {
        type: 'UPDATE_PROJECT',
        payload: data
    }
}