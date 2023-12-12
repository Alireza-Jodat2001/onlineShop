export const InitialstateEvent = {
    dropdown: "hidden",
    backdrop: "hidden",
    searchPreset: "hidden",
    searchFocus: "",
    classBtn: "",
};

export function EventReducerFunc(state, action) {
    switch (action.type) {
        case "dropdown":
            return { ...state, ...action.data };
        case "searchFocus":
            return { ...state, ...action.data };
        default:
            return state;
    }
}
