import { createReducer,on } from "@ngrx/store";

import { changeLoading } from "./loading.action";

export const initialState : boolean = false

export const loadingReducer= createReducer(
 initialState,
 on(changeLoading, (state)=> !state)
)