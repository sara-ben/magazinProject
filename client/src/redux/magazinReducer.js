import produce from 'immer';

const initialState = {

    magazin: {
        id: "",
        date: "",
        title: "",
        postes: [],
        newMagazin: {}

    },
}


export default produce((state, action) => {
    switch (action.type) {
        case 'SET_MAGAZIN_ID':
            state.magazin.id = action.payload;
            break;
        case 'SET_MAGAZIN_DATE':
            state.magazin.date = action.payload;
            break;
        case 'SET_MAGAZIN_TITLE':
            state.magazin.title = action.payload;
            break;
        case 'SET_MAGAZIN_POSTES':
            state.magazin.postes = action.payload;
            break;
            case '[CreateMagazin] CREATE_MAGAZIN':
                debugger
                state.magazinReducer.magazinReducer.newMagazin = action.payload;
                break;

        default:
            return state

    }
}, initialState)
