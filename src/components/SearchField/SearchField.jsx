import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { EventContext } from "../../hook/Context/EventContext";

export default function SearchField() {
    const { searchFocus, searchPreset, searchInputRef, dispatchEvent } =
        useContext(EventContext);

    return (
        <div className={`${searchFocus} relative`} clickoutside="">
            <form
                className="dark:bg-gray-700 flex rounded-md overflow-hidden items-center h-10"
                id="search"
                name="search"
            >
                <button className="h-full border-0 px-3 dark:text-gray-300">
                    <FaSearch />
                </button>

                <input
                    placeholder="Search here..."
                    autoComplete="off"
                    ref={searchInputRef}
                    className="border-0 h-full w-96 outline-0 bg-transparent dark:text-gray-300 dark:placeholder-gray-300"
                    onFocus={() =>
                        dispatchEvent({
                            type: "searchFocus",
                            data: { searchPreset: "open", backdrop: "open" },
                        })
                    }
                />

                <div className="cursor-default [&_span]:rounded-md [&_span]:py-1 [&_span]:px-2 [&_span]:me-1 [&_span]:text-xs dark:[&_span]:bg-gray-800 dark:[&_span]:text-gray-300">
                    <span>Ctrl</span>
                    <span>Q</span>
                </div>
            </form>
            <div
                className={`${searchPreset} rounded-md mt-3 absolute w-full dark:bg-gray-700 p-3 dark:text-slate-200`}
            >
                Not found result...
            </div>
        </div>
    );
}
