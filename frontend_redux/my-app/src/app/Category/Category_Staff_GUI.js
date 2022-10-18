import React, { useEffect } from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryList, getCategoryAsync } from './categorySlice'



const Category_Staff_GUI = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);
  // console.log(categories)

  useEffect(() => {
    dispatch(getCategoryAsync())

  }, [])

  return (
    <div>

      <h3 className="mt-4"><i>Our Categories</i></h3>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          {categories.map((cat) => (

            <Link className="nav-link" key={cat._id} to={`/staffGUI/delete_update/${cat._id}`}>{cat.desc}{" "}(Category ID:{" "} {cat._id} )
            <button>Delete</button>
            
            </Link>
            
          ))}
        </li>
      </ul>
      {/* <hr className="d-sm-none" /> */}
      {/* <Outlet></Outlet> */}
      <div>
      <Outlet></Outlet>
      </div>
    

    </div>

  )
}

export default Category_Staff_GUI