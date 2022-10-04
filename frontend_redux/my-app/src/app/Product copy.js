import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Outlet, Link, NavLink } from "react-router-dom";
import { getProductAsync, addProductAsync, delProductAsync, selectProdList, updProductAsync } from './productSlice';

export function Product() {
  let params = useParams();
  let cat_id = params.id;
  const prodList = useSelector(selectProdList);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  console.log(prodList)
  // //run every time we switch category
  // useEffect(() => {
  //   dispatch(getDataAsync(cat_id));
  // }, [cat_id]);
  useEffect(() => {
    dispatch(getProductAsync())

  }, [])

  return (

    <div>
      <h3 className="mt-4"><i>Our Products</i></h3>
      {prodList.map((prod) => (
        <div>
          Desc: {prod.desc} {", "} Price: {prod.price}</div>))}
      {/* <h1>Admin GUI</h1>
      // <div>
      //   Desc:
      //   <input onChange={(e) => setDesc(e.target.value)} />
      //   <br />
      //   Price:
      //   <input onChange={(e) => setPrice(e.target.value)} />
      //   <button
      //     onClick={() => dispatch(addDataAsync({ desc: desc, price: price }))}
      //   >
      //     Add Product
      //   </button>
      // </div>
      // <hr />
      // Number of products in shop: {prodList.length}
      // <hr />
      // {prodList.map((prod) => (
      //   <div>
      //     Desc: {prod.desc} {", "} Price: {prod.price}
      //     <button onClick={() => dispatch(delDataAsync(prod.id))}>
      //       Delete
      //     </button>

      //     <button onClick={() => dispatch(updDataAsync({
      //       desc: desc,
      //       price: price,
      //       id: prod.id,
      //     }))}>Update</button>
      //   </div>
      //   ))} */}
    </div>
  );
}

export default Product