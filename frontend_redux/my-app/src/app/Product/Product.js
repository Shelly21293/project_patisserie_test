import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Outlet, Link, NavLink } from "react-router-dom";
import { getProductAsync, addProductAsync, delProductAsync, selectProdList, updProductAsync } from './productSlice';
import { CartToSend } from '../Cart_Order/cartSlice'
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



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Product() {
  let params = useParams();
  let cat_id = params.id;
  const [myCart, setmyCart] = useState([])
  const prodList = useSelector(selectProdList);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //run every time we open menu page
  useEffect(() => {
    dispatch(getProductAsync(0))
  }, [])

  //run every time we switch category
  useEffect(() => {
    if (cat_id) {
    dispatch(getProductAsync(cat_id));}
  }, [cat_id]);

  // run when component load- need to delete when runnung first time
  useEffect(() => {
    if (localStorage.getItem("myCart"))
    setmyCart(JSON.parse( localStorage.getItem("myCart") ))
  }, [])


  const addToCart = async(item) => {

    let stam= await setmyCart([...myCart, item])
    // console.table(myCart)
    dispatch(CartToSend(myCart))
    localStorage.setItem("myCart", JSON.stringify(myCart))
    
  }

  const clearCart = () => {

    setmyCart([])
    console.table(myCart)
    dispatch(CartToSend())
    localStorage.clear()
    
  }

  return (
    <div style={{ backgroundColor: "#fffae6" }}>
      <h3 className="mt-4"><i>Our Products</i></h3>


      <ImageList sx={{ width: "fixed", height: "fixed" }} cols={3} gap={12}>

        {prodList.map((prod) => (
          <div >
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
                image={prod.image}
              />
              <CardHeader
                subheader={prod.price}
              />
              <IconButton color="primary" aria-label="add to shopping cart" onClick={() => addToCart({ _id: prod._id, desc: prod.desc, price: prod.price, image:prod.image, amount: 1 })}>
                Add to cart<AddShoppingCartIcon />
              </IconButton>
              {/* <CardActions disableSpacing>
              </CardActions> */}


            </Card>
          </div>))}
      </ImageList>
      <button onClick={() => clearCart([])}>clear cart</button>
      <button onClick={() => console.table(myCart)}>show cart</button>
    </div>

  );
}

export default Product


// admin product
// <div>
    //   <h3 className="mt-4"><i>Our Products</i></h3>
    //   {prodList.map((prod) => (
    //     <div>
    //       Desc: {prod.desc} {", "} Price: {prod.price}</div>))}
    //   {/* <h1>Admin GUI</h1>
    //   // <div>
    //   //   Desc:
    //   //   <input onChange={(e) => setDesc(e.target.value)} />
    //   //   <br />
    //   //   Price:
    //   //   <input onChange={(e) => setPrice(e.target.value)} />
    //   //   <button
    //   //     onClick={() => dispatch(addDataAsync({ desc: desc, price: price }))}
    //   //   >
    //   //     Add Product
    //   //   </button>
    //   // </div>
    //   // <hr />
    //   // Number of products in shop: {prodList.length}
    //   // <hr />
    //   // {prodList.map((prod) => (
    //   //   <div>
    //   //     Desc: {prod.desc} {", "} Price: {prod.price}
    //   //     <button onClick={() => dispatch(delDataAsync(prod.id))}>
    //   //       Delete
    //   //     </button>

    //   //     <button onClick={() => dispatch(updDataAsync({
    //   //       desc: desc,
    //   //       price: price,
    //   //       id: prod.id,
    //   //     }))}>Update</button>
    //   //   </div>
    //   //   ))} */}
    // </div>