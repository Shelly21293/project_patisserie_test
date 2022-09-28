import React, { useEffect } from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryList, getCategoryAsync } from './categorySlice'



const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);


  useEffect(() => {
    dispatch(getCategoryAsync())

  }, [])

  return (
    <div>

      <h3 className="mt-4"><i>Our Menu</i></h3>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          {categories.map((cat) => (
            <Link className="nav-link" key={cat._id} to="/getcategory/${cat._id}">{cat.desc}</Link>
          ))}
        </li>
      </ul>
      {/* <hr className="d-sm-none" /> */}

    </div>
  )
}

export default Category