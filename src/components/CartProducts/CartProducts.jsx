import { useContext } from "react"

import { ContextApi } from "../../hook/Context/ContextApi"

import './CartProducts.css'

export default function CartProducts() {
    const { response } = useContext(ContextApi)
    
    return (
        <div className="container d-grid gap-4 mx-auto px-0 mt-5 pb-5">
            {response == undefined ? [] : response.map((productInfo , key) => {
                const { image , title , price } = productInfo

                return (
                    <div key={key} className="bg-dark cart_products rounded pt-4">
                        <div className="img_container text-center mx-auto bg-white rounded">
                            <img src={image[0]} className="products_img rounded" />
                        </div>

                        <p className="text-light pt-4 px-4 text-justify overflow-hidden title">{title}</p>

                        <div className="px-4">
                            <p className="text-light">{price}</p>
                        </div>

                        <div className="px-4 d-flex justify-content-between align-items-center">
                            <button className="bg-success border-0 rounded add_btn py-1">Add</button>

                            <span className="text-light">0</span>

                            <button className="bg-danger border-0 rounded remove_btn py-1">Remove</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
