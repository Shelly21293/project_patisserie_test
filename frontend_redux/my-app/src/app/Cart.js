import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomerProdList, getDataAsync, delDataAsync } from './customerSlice';
import { addDataAsync, selectCartList } from './orderSlice';
import { selectMyOrder, CartToSend } from './orderSlice'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageList from '@mui/material/ImageList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




export function Cart() {
  const prodList = useSelector(selectCustomerProdList);
  // prodList name can be changed
  const dispatch = useDispatch();
  // const myCart = useSelector(selectMyOrder);
  const [myCart, setmyCart] = useState([])

  // run when component load- need to delete when runnung first time
    useEffect(() => {
      setmyCart(JSON.parse( localStorage.getItem("myCart") ))
    }, [])

  // useEffect(() => {
  //   dispatch(getDataAsync());
  // }, []);


  return (
    <div style={{ backgroundColor: "#fffae6" }}>
      <h3 className="mt-4"><i>My selections</i></h3>


      <ImageList sx={{ width: "fixed", height: "fixed" }} cols={3} gap={12}>

        {myCart.map((prod) => (
          <div >

            {/* Desc: {prod.desc} {", "} Price: {prod.price} */}
            <Card sx={{ maxWidth: 345 }} >
              <CardHeader
                // avatar={
                //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title=<i>{prod.desc}</i>
              // subheader={prod.price}
              />
              <CardMedia
                component="img"
                height="194"
                image={prod.img}
              />
              <CardHeader
                subheader={prod.price}
              />
              <IconButton color="primary" aria-label="remove from cart" >
                Remove
              </IconButton>
              {/* <CardActions disableSpacing>
              </CardActions> */}


            </Card>
          </div>))}
      </ImageList>
    </div>
    // <div style={{backgroundColor:"yellow"}}>
    //   <h1>Cart GUI</h1>

    //   {myCart.map((prod) => (
    //     <div>
    //       Desc: {prod.desc} {", "} Price: {prod.price}
    //       {/* <button onClick={() => dispatch(delDataAsync(prod.id))}>
    //         Remove
    //       </button> */}

    //     </div>
    //   ))}

    //   <button >
    //     <h2 onClick={() => dispatch(addDataAsync(prodList))}>Check out</h2>
    //   </button>
    // </div>
  );
}
export default Cart
