import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Outlet, Link, NavLink } from "react-router-dom";
import { getProductAsync, addProductAsync, delProductAsync, selectProdList, updProductAsync } from './productSlice';
import { doSigninAsync, selectEmail, selectUserName, logout, selectToken, doSignupAsync, selectStaff } from '../Login/loginSlice'
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

export function Product_Staff_GUI() {
  let params = useParams();
  let cat_id = params.id;
  const [myCart, setmyCart] = useState([])
  const prodList = useSelector(selectProdList);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [update, setUpdate] = useState("");
  const [category, setCategory] = useState(0);
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
    dispatch(getProductAsync(cat_id));
  }, [cat_id]);

  useEffect(() => {
    setmyCart(JSON.parse(localStorage.getItem("myCart")))
  }, [])


  const addToCart = (item) => {

    setmyCart([...myCart, item])
    console.table(myCart)
    dispatch(CartToSend(myCart))
    localStorage.setItem("myCart", JSON.stringify(myCart))

  }

  const Update = (item) =>{
    console.log(item)
    setUpdate({desc: item.desc, price: item.price})
    // UpdateSend({id: item.id, token: item.token})
    dispatch(updProductAsync({ update, id: item.id, token: item.token }))
  }

  // const UpdateSend = (item) =>{
  //   console.log(item)
  //   // setUpdate({desc: item.desc, price: item.price})
  //   dispatch(updProductAsync({ update, id: item.id, token: item.token }))
  // }
  return (

    <div style={{ backgroundColor: "#fffae6", width: "fixed", height: "fixed" }}>
      <h3 className="mt-4"><i>Our Products</i></h3>

      <div>
        <h5 className="mt-4"><i>fields to update</i></h5>
        <i>Desc: </i>
        <input onChange={(e) => setDesc(e.target.value)} />
        <br />
        <br />
        <i>Price: </i>
        <input onChange={(e) => setPrice(e.target.value)} />
        <br />
        <br />
      </div>
      <ImageList sx={{ width: "fixed", height: "fixed" }} cols={3} gap={12}>

        {prodList.map((prod) => (
          <div >

            <Card sx={{ maxWidth: 345, textAlign: "center" }} >
              <CardHeader

                title=<i>{prod.desc}</i>
              />
              <CardMedia
                component="img"
                height="194"
                image={prod.image}
              />
              <CardHeader
                subheader={prod.price}
              />
              <IconButton color="primary" aria-label="delete" onClick={() => dispatch(delProductAsync(prod.id))}>
                DELETE
              </IconButton>
              
              <IconButton color="primary" aria-label="update" onClick={() => Update({ desc: desc, price: price, id: prod._id, token: token })}>
                UPDATE
              </IconButton>


            </Card>
          </div>))}
      </ImageList>


    </div>

  );
}

export default Product_Staff_GUI


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