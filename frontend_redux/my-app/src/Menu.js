import React from 'react'
import Menu_L_side from './Menu_L_side'
import Category from './app/Category'

const Menu = () => {
    return (
        <div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-2">
                        <Category></Category>
                    </div>
                    <div className="col-sm-10">
                        <Menu_L_side></Menu_L_side>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu