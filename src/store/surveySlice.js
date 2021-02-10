import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
export const createSurvey=createAsyncThunk(
    'survey/createSurvey',
    async (_,thunkApi)=>{
        const newSurveyId=thunkApi.getState().surveys.length+1;
        return newSurveyId;
    }
);
export const surveySlice = createSlice({
    name: "surveys",
    initialState: [],
    reducers: {},
    extraReducers:{
        [createSurvey.fulfilled]:(state,action)=>{
            state.push({
                questions:[],
                surveyId:action.payload,
                isPublished:false
            });
        }
    }
});