import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit"

const defaultTask = [
    { id: "1", title: "Something 1", state: "TASK_INBOX"},
    { id: "2", title: "Something 2", state: "TASK_INBOX"},
    { id: "3", title: "Something 3", state: "TASK_INBOX"},
    { id: "4", title: "Something 4", state: "TASK_INBOX"},
];

const TaskBoxData = {
    tasks: defaultTask,
    status: "idle",
    error: null,
};

export const fetchTasks = createAsyncThunk("todo/fetchTasks", async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?iserId=1"
    );
    const data = await response.json();
    const result = data.map((task) => {
        return {
            id: `${task.id}`,
            title: task.title,
            state: task.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
        };
    })
    return result;
});

export const TasksSlice = createSlice({
    name: "taskbox",
    initialState: TaskBoxData,
    reducers: {
        updateTaskState: (state, action) => {
            const { id, newTaskState } = action.payload;
            const task = state.tasks.findIndex((task) => task.id === id);
            // console.log(task);
            if (task >= 0){
                state.tasks[task].state = newTaskState;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = "loading";
                state.error = null;
                state.tasks = [];
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.error = null;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = "failed";
                state.error = "Something went wrong";
                state.tasks = [];
            });
    },
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
    reducer: {
        taskbox: TasksSlice.reducer,
    },
});

export default store;