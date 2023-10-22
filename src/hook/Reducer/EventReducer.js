export const InitialstateEvent = {
    dropdown: 'd-none',
    backdrop: 'd-none',
    searchPreset: 'd-none',  
    searchFocus: '',
    classBtn: ''
}

export function EventReducerFunc(state , action) {
    switch (action.type) {
        case 'dropdown': return {...state , ...action.data}
        case 'searchFocus': return {...state , ...action.data}
        default: return state
    }
}