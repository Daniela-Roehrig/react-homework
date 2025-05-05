import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {
            id: 1,
            name: 'Alice',
            email: 'alice@example.com'
        },
        {
            id: 2,
            name: 'Bob',
            email: 'bob@example.com'
        },
        {
            id: 3,
            name: 'Charlie',
            email: 'charlie@example.com'
        },
        {
            id: 4,
            name: 'Mary',
            email: 'mary@example.com'
        },
        {
            id: 5,
            name: 'Chris',
            email: 'chris@example.com'
        },
        {
            id: 6,
            name: 'William',
            email: 'william@example.com'
        },
    ],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export default userSlice.reducer;
