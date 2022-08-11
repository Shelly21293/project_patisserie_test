import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataAsync, addDataAsync, delDataAsync, selectProdList, updDataAsync } from './shopSlice';
// import styles from './Counter.module.css';

export function Shop() {
  const prodList = useSelector(selectProdList);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    dispatch(getDataAsync());
  }, []);


  return (
    <div>
      <h1>Admin GUI</h1>
      <div>
        Desc:
        <input onChange={(e) => setDesc(e.target.value)} />
        <br />
        Price:
        <input onChange={(e) => setPrice(e.target.value)} />
        <button
          onClick={() => dispatch(addDataAsync({ desc: desc, price: price }))}
        >
          Add Product
        </button>
      </div>
      <hr />
      Number of products in shop: {prodList.length}
      <hr />
      {prodList.map((prod) => (
        <div>
          Desc: {prod.desc} {", "} Price: {prod.price}
          <button onClick={() => dispatch(delDataAsync(prod.id))}>
            Delete
          </button>

          <button onClick={() => dispatch(updDataAsync({
            desc: desc,
            price: price,
            id: prod.id,
          }))}>Update</button>
        </div>
      ))}
    </div>
  );
}
