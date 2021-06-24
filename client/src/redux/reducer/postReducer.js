import produce from 'immer';

const inishialState =
{
    post:{
    image:"",
    titlePost:"",
    contenidoPost:"",
    newPost: {}
}
}
export default produce((state, action) => {
    switch (action.type) {
        case 'CONTEIND_POST':
            debugger
            state.post.contenidoPost = action.payload;
            break;
            case 'CHANGE_TITLE_POST':
                debugger
                state.post.titlePost = action.payload;
                break;
                case 'CREATE_POST':
                    debugger
                    state.postReducer.postReducer.newPost = action.payload;
                    break;
    
    }
        }, inishialState)
    
        