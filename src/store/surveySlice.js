import { createSlice } from '@reduxjs/toolkit';
export const surveySlice = createSlice({
    name: "surveys",
    initialState: [],
    reducers: {
        createSurvey: (state, action) => {
            const newSurveyId = state.length + 1;
            state.push({ questions: [], surveyId: newSurveyId, isPublished: false });
            return state;
        }
    }
});