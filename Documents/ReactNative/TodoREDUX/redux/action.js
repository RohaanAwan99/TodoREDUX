export const AddTask = (text) => ({
  type: 'ADDTASK',
  payload: { 
    id: new Date().getTime(),
    text: text,
  },
});

export const RemoveTask = (id) => ({
  type: 'REMOVETASK',
  payload: { id },
});