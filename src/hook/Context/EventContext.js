import { createContext, useEffect, useReducer, useRef } from "react";
import { EventReducerFunc, InitialstateEvent } from "../Reducer/EventReducer";

export const EventContext = createContext();

export function EventContextProvider({ children }) {
    const [EventState, dispatchEvent] = useReducer(
        EventReducerFunc,
        InitialstateEvent
    );

    const searchInputRef = useRef();
    const navRef = useRef();

    window.addEventListener("keypress", (event) => {
        if (event.ctrlKey && event.which === 17) {
            searchInputRef.current.focus();
        }
    });

    useEffect(() => {
        document.body.classList.add("dark");
    }, []);

    window.addEventListener("click", (event) => clickOutside(event));

    function stateClosing() {
        const stateClosing = {
            type: "dropdown",
            data: {
                searchPreset: `${
                    EventState.searchPreset == "open" ? "closing" : "close"
                }`,
                dropdown: `${
                    EventState.dropdown == "open" ? "closing" : "close"
                }`,
                backdrop: `${
                    EventState.backdrop == "open" ? "closing" : "close"
                }`,
                searchFocus: "",
            },
        };

        return stateClosing;
    }

    function stateClose() {
        const stateClose = {
            type: "dropdown",
            data: {
                searchPreset: `${
                    EventState.searchPreset == "open" ? "close" : "close"
                }`,
                dropdown: `${
                    EventState.dropdown == "open" ? "close" : "close"
                }`,
                backdrop: `${
                    EventState.dropdown == "open" ? "close" : "close"
                }`,
                searchFocus: "",
            },
        };

        return stateClose;
    }

    function closeElement() {
        const openElement = document.querySelectorAll(".open");

        openElement.forEach((element) => {
            element.addEventListener(
                "animationend",
                () => {
                    return dispatchEvent(stateClose());
                },
                { once: true }
            );
        });

        return stateClosing();
    }

    function clickOutside(event) {
        const target = event.target;
        const navbar = navRef.current;
        const clickOutsideTags = document.querySelectorAll("*[clickoutside]");

        if (target == navbar || navbar.contains(target)) {
            let count = 0;

            clickOutsideTags.forEach((element) => {
                if (target != element && !element.contains(target)) {
                    count++;
                }
            });

            if (count == clickOutsideTags.length && count != 0) {
                dispatchEvent(closeElement());
            }
        }
    }

    const value = {
        navRef,
        searchInputRef,
        backdrop: EventState.backdrop,
        dropdown: EventState.dropdown,
        searchFocus: EventState.searchFocus,
        searchPreset: EventState.searchPreset,
        clickOutside,
        closeElement,
        dispatchEvent,
    };

    return (
        <EventContext.Provider value={value}>{children}</EventContext.Provider>
    );
}
