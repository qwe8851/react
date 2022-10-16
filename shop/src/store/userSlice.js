import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20  },
    reducers : {
        changeName(state){
            // state가 array, object인 경우 return생략, 직접수정 가능
            state.name = 'park'
        },
        increase(state, action){
            state.age += action.payload
        }
    }
})



export let { changeName, increase } =  user.actions

export default user