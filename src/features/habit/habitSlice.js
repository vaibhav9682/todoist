import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  task: [
    {
      taskName: "",
      taskTime: "",
      state: {
        done: [],
        notdone: [],
        none: []
      }
    }
  ]
};



export const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addTask: (state, action) => {

      state.task.push({
        taskName: action.payload,
        state: {
          done: [],
          notdone: [],
          none: []
        }
      })

    },

  },


});

export const { addTask } = habitSlice.actions;


export const selectTask = (state) => state.task;



export default habitSlice.reducer;
