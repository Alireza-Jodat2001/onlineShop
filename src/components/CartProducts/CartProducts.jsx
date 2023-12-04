import { useContext } from "react";
import { ContextApi } from "../../hook/Context/ContextApi";

export default function CartProducts() {
  const { response } = useContext(ContextApi);

  return (
    <div className="container md:grid-cols-4 md:px-16 grid gap-4 mx-auto px-0 mt-5 pb-5">
      {response == undefined
        ? []
        : response.map((productInfo, key) => {
            const { image, title, price } = productInfo;

            return (
              <div
                key={key}
                className="bg-gray-900 h-80 cart_products rounded-md pt-4 text-white"
              >
                <div className="text-center mx-auto bg-white rounded-md mb-7 w-4/5">
                  <img
                    src={image[0]}
                    className="rounded-md block mx-auto max-h-32"
                  />
                </div>

                <p className="px-7 mb-2 overflow-hidden whitespace-nowrap w-52 text-ellipsis title">
                  {title}
                </p>

                <div className="px-7">
                  <p className="overflow-hidden whitespace-nowrap w-52 text-ellipsis">
                    {price}
                  </p>
                </div>

                <div className="px-7 justify-between items-center mt-7 grid grid-cols-5">
                  <button className="bg-sky-700 border-0 rounded-md add_btn py-1 col-start-1 col-end-3">
                    Add
                  </button>
                  <span className="col-start-3 col-end-4 text-center">0</span>
                  <button className="bg-red-700 border-0 rounded-md remove_btn py-1 col-start-4 col-end-7">
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
}
