import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../../hook/Context/EventContext";
import { LoginContext } from "../../hook/Context/LoginContext";

export default function NavbarButtons({ to, textButton }) {
    const { closeElement, dropdown, dispatchEvent } = useContext(EventContext);
    const { verified, dispatchLogin, logoutFunction } =
        useContext(LoginContext);

    return (
        <div className="btn_container dark:[&_button]:text-gray-300 flex items-center gap-1">
            {verified.usernameVerified ? (
                <div
                    className="dropdown_menue relative rounded-md mb-1 leading-9"
                    clickoutside=""
                >
                    <button
                        className="border-0 px-3 rounded-md h-10 bg-transparent hover:bg-gray-700 focus:bg-gray-700"
                        onClick={() => {
                            dispatchEvent(
                                dropdown == "open"
                                    ? closeElement()
                                    : {
                                          type: "dropdown",
                                          data: {
                                              dropdown: "open",
                                              backdrop: "open",
                                          },
                                      }
                            );
                        }}
                    >
                        {verified.usernameVerified}
                        <img
                            className="rounded-full ms-2 inline-block"
                            src="https://www.e-estekhdam.com/img/user/male.png"
                            width="20px"
                            height="20px"
                        />
                    </button>

                    <div
                        className={`${dropdown} dark:bg-gray-700 absolute rounded-md mt-3 px-3 w-56`}
                    >
                        <div>
                            <div className="text-center py-3">
                                <img
                                    className="rounded-full block mx-auto"
                                    src="https://www.e-estekhdam.com/img/user/male.png"
                                    width="50px"
                                    height="50px"
                                />
                            </div>
                            <div className="mb-6">
                                <h5 className="text-center m-0 text-ellipsis w-52 whitespace-nowrap overflow-hidden">
                                    {verified.usernameVerified}
                                </h5>
                                <p className="text-center text-ellipsis w-52 whitespace-nowrap overflow-hidden text-sm">
                                    {verified.emailVerified}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                className="w-2/4 border rounded-md h-10 bg-transparent hover:bg-gray-700"
                                onClick={() => dispatchEvent(closeElement())}
                            >
                                Close
                            </button>
                            <button
                                className="w-2/4 border rounded-md mb-3 px-2 flex justify-center items-center h-10 bg-transparent hover:bg-red-700"
                                onClick={() => {
                                    dispatchLogin(logoutFunction());
                                    dispatchEvent(closeElement());
                                }}
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Link to={to}>
                    <button className="border-0 px-2 rounded-md flex justify-center items-center h-10 bg-transparent hover:bg-gray-700">
                        {textButton}
                    </button>
                </Link>
            )}

            <button
                className="border-0 px-2 rounded-md flex justify-center items-center h-10 bg-transparent hover:bg-gray-700"
                onClick={() => {}}
            ></button>
        </div>
    );
}
