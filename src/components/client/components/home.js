import { Alert, Button, Divider, Grid, IconButton, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import homeStyle from './home.module.css'
import ProductCard from './productCard'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getUserDetails } from '../../../services/auth'
import ProductForm from '../../client/components/productForm'
import { getAllProducts, getBestProducts } from '../../../services/product'
import carLogo from '../../../img/carousel1.jpg'
import carLogo2 from '../../../img/carousel2.jpg'
import carLogo3 from '../../../img/carousel3.jpg'
import { addToCart } from '../../../services/shoppingCart'
import Footer from './Footer';
function Home() {
  const [roles, setUserRole] = useState([{}])
  const [productList, setProductList] = useState([])
  const [bestProductList, setBestProductList] = useState([])
  const [product, setProduct] = useState({ name: "", price: 0, description: "", category: "", image: "" })
  const [refresh, setRefresh] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [showProductFeedback, setProductFeedback] = React.useState({ show: false, status: false, infoText: '' })
  useEffect(() => {
    getUserDetails({ setUserRole })
    getAllProducts({ setProductList })
    getBestProducts({ setBestProductList })
  }, [refresh])

  const handleOpenModal = () => setOpenModal(true)
  const closeProductFeedback = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setProductFeedback({ show: false });
  };
  const addProduct = (productToAdd, amountToAdd) => {
    addToCart({ amountToAdd, productToAdd })
  }
  return (
    <div className={homeStyle.container}>
      <div className={homeStyle.title_container}>
        <div>
          {roles[0].id === 2 ? <Button variant="text" style={{color: '#aaa'}}
            id="button" onClick={handleOpenModal}>
            Añadir nuevo producto
          </Button> : null}
        </div>
        <div id="carouselExampleIndicators" class="carousel slide mb-5 mt-2" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img src='http://www.abchoy.com.ar/fotos/abchoy/20180706_tandil_repuestos_00.jpg' height='500px' class="d-block w-100" style={{borderRadius: '20px'}} alt="..."/>
            </div>
            <div class="carousel-item active">
              <img src='http://www.abchoy.com.ar/fotos/abchoy/20180706_tandil_repuestos_03.jpg' height='500px' class="d-block w-100" style={{borderRadius: '20px'}} alt="..."/>
            </div>
            <div class="carousel-item">
              <img src='http://www.abchoy.com.ar/fotos/abchoy/20180706_tandil_repuestos_06.jpg' height='500px' class="d-block w-100" style={{borderRadius: '20px'}} alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <Typography variant="span" fontSize={35} component="h2" ml={1} fontWeight={600} fontFamily={'fantasy'} width={'25%'}>
          <marquee direction="RIGHT">
            DESTACADOS
          </marquee>
        </Typography>
        <Typography variant="p" fontSize={20} component="h2" ml={1} fontWeight={400} fontFamily={'fantasy'}> 
          Productos al mejor precio
        </Typography>
      </div>
      <Grid container spacing={6} className={homeStyle.grid} mb={2} mt={5}>
        {bestProductList.map(productItem =>
          <Grid item xs={12} md={3} style={{ position: 'relative'}} key={productItem.id}>
            <IconButton color='primary' onClick={() => {
              addProduct(productItem, 1)
            }}
              className={homeStyle.add__button}>
              <AddShoppingCartIcon />
            </IconButton>
            <ProductCard product={productItem} />
          </Grid>)
        }
      </Grid>
      <Divider></Divider>
      <div className={homeStyle.title_container}>
        <Typography variant="p" fontSize={36} component="h2" ml={1} fontWeight={600} fontFamily={'fantasy'}> 
          Todos los productos
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

export default Home