import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../../../../services/auth'
import { getProductsMotor, getProductsTrenDelantero } from '../../../../services/product'
import { Alert, Button, Divider, Grid, IconButton, Snackbar, Typography } from '@mui/material'
import homeStyle from '../home.module.css'
import ProductCard from './../productCard'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductForm from '../../../client/components/productForm'
import { addToCart } from '../../../../services/shoppingCart'
import Footer from './../Footer';
function TrenDelantero() {
  const [roles, setUserRole] = useState([{}])
  const [productList, setProductList] = useState([])
  const [product, setProduct] = useState({ name: "", price: 0, description: "", category: "", image: "" })
  const [refresh, setRefresh] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [showProductFeedback, setProductFeedback] = React.useState({ show: false, status: false, infoText: '' })
  
    console.log('productList', productList);

  useEffect(() => {
    getUserDetails({ setUserRole })
    getProductsTrenDelantero({ setProductList })
}, [refresh])

  const closeProductFeedback = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setProductFeedback({ show: false });
  };
  const addProduct = (productToAdd, amountToAdd) => {
    addToCart({ amountToAdd, productToAdd })
  }
//   useEffect(() => {
    
//   }, [productList])
  
  return (
    <div className={homeStyle.container}>
      <Divider></Divider>
      <div className={homeStyle.title_container}>
        <Typography variant="p" fontSize={36} component="h2" ml={1} fontWeight={600} fontFamily={'fantasy'}> 
          Tren Delantero
        </Typography>
      </div>
      <Grid container spacing={3} className={homeStyle.grid} >
        {productList.map(productItem =>
          <Grid item xs={12} md={3} style={{ position: 'relative' }} key={productItem.id}>
            <IconButton aria-label="add to shopping cart" color='primary' onClick={() => {
              addProduct(productItem, 1)
              alert('Producto agregado al carrito')
            }}
              className={homeStyle.add__button}>
              <AddShoppingCartIcon />
            </IconButton>
            <ProductCard product={productItem}/>
          </Grid>)}
      </Grid>
      <Snackbar open={showProductFeedback.show} autoHideDuration={2000} onClose={closeProductFeedback}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
        {showProductFeedback.show && <Alert onClose={closeProductFeedback} severity={showProductFeedback.status ? "success" : "error"} sx={{ width: '100%' }}>
          {showProductFeedback.infoText}
        </Alert>}
      </Snackbar>
      <ProductForm setRefresh={setRefresh} openModal={openModal} setOpenModal={setOpenModal}
        setProductFeedback={setProductFeedback} edit={false}
        setProduct={setProduct} product={product} />
        <Footer />
    </div>
    
  )
}

export default TrenDelantero