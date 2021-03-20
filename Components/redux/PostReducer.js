import { POST_TEXT_POST, POST_IMAGE_POST} from './Post'
const initialState=[]
export default function PostReducer(state= initialState, action){
    switch(action.type){
        case POST_TEXT_POST : {return [...state, action.payload]}
        case POST_IMAGE_POST : return [...state, action.payload]
    }
    return state
}
