import React from 'react'
import Product from './app/Product/Product'
import Product_card from './app/Product/Product_card'

import Category from './app/Category/Category'
import Cartwindow from './app/Cart_Order/Cartwindow'
import { Outlet } from 'react-router-dom'

const Menu = () => {
    return (
        <div style={{ width: "fixed", height: "fixed"}}>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-2">
                        <Category></Category>


                    </div>
                    <div className="col-sm-10">
                        {/* <Product_card></Product_card> */}
                        <Product></Product>
                        {/* <Cartwindow></Cartwindow> */}


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu