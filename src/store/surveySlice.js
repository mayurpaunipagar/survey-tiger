import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
export const createSurvey=createAsyncThunk(
    'survey/createSurvey',
    async (_,thunkApi)=>{
        const newSurveyId=String(thunkApi.getState().surveys.length+1);
        return newSurveyId;
    }
);
export const surveySlice = createSlice({
    name: "surveys",
    initialState: [],
    reducers: {
        addQuestion:(state,action)=>{
            const {surveyId, type, question, options}= action.payload;
            const q=state.find(s=>s.surveyId===surveyId).questions;
            const qId=String(q.length+1);
            q.push({
                qId,
                type,
                question,
                options
            });
        },
        setPublish:(state,action)=>{
            const surveyId=action.payload;
            console.log(surveyId);
            state.find(s=>s.surveyId===surveyId).isPublished=true;
        }
    },
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