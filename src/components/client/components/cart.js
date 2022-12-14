import { Alert, Button, Divider, Grid, IconButton, Snackbar, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import cartStyle from './cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from './Footer';
import { getShoppingList, getSaleList, deleteShoppingItem, generateSale } from '../../../services/shoppingCart'

function Cart() {

    const [productList, setProductList] = useState([])
    const [salesList, setSalesList] = useState([])
    const [open, setOpen] = useState(false)
    const getList = () => {
        getShoppingList({ setProductList })
    }
    const getSales = () => {
        getSaleList({ setSalesList })
    }
    useEffect(() => {
        getList()
        getSales()
    }, [])
    const deleteItem = (itemId) => {
        deleteShoppingItem({ itemId }).then(() => {
            let number = parseInt(localStorage.getItem("number")) - 1
            localStorage.setItem("number", number.toString())
            window.dispatchEvent(new Event('storage'))
            getShoppingList({ setProductList })
        })
    }
    const calculateTotal = (items) => {
        let total = 0
        items.forEach(item => {
            total = total + (item.amount * item.product.price)
        })
        return total
    }
    const getDate = date => {
        return new Date(date).toLocaleDateString()
    }
    const confirmSale = () => {
        generateSale().then(() => {
            setOpen(true)
            getSales()
            getList()
            let number = 0
            localStorage.setItem("number", number.toString())
            window.dispatchEvent(new Event('storage'))
        })
    }
    const closeFeedback = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
        <div className={cartStyle.container}>
            <Grid container spacing={1} className={cartStyle.grid}>
                <Grid item xs={12} md={8} justifyContent='center'>
                    <div className={cartStyle.title}>
                        <Typography variant="span" ml={2} color={'#1976d2'} fontSize={40} component="h2" fontWeight={500}>
                            Mi carrito
                        </Typography>
                    </div>
                    <Stack className={cartStyle.cart_container} alignItems='center' >
                        {productList.map(item =>
                            <Grid container spacing={2} mt={1} mb={1} justifyContent='center' key={item.id} alignItems={'center'}>
                                <Grid item xs={4} md={2}>
                                    <img src={item.product.image} alt='logo' height={'55'} />
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Typography variant="span" fontSize={20} component="h2" fontWeight={500}>
                                        {item.product.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} md={2}>
                                    <Typography variant="span" fontSize={20} component="h2" fontWeight={500}>
                                        {item.amount}
                                    </Typography>
                                </Grid>
                                <Grid item xs={9} md={2}>
                                    <Typography variant="span" fontSize={24} component="h2" fontWeight={700}>
                                        ${item.product.price.toFixed(2)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} md={2}>
                                    <IconButton aria-label="delete" onClick={() => {
                                        deleteItem(item.id)
                                    }}>
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Grid>
                            </Grid>)}
                        <Divider flexItem />
                        <div className={cartStyle.total}>
                            {productList.length ?
                                <>
                                    <Typography variant="span" mr={4} fontSize={24} component="h2" fontWeight={700}>
                                        Total: ${calculateTotal(productList).toFixed(2)}
                                    </Typography>
                                    <Button variant="contained" className='btn2' onClick={() => { confirmSale() }}>
                                        Confirmar
                                    </Button>
                                </>
                                : null}
                        </div>
                    </Stack>
                </Grid>
                <Divider orientation="vertical" flexItem></Divider>
                <Grid item xs={12} md={3} justifyContent='center'>
                    <div className={cartStyle.prev_container}>
                        <Typography variant="span" color={'#1976d2'} fontSize={30} component="h2" fontWeight={500}>
                            Mis Compras
                        </Typography>
                        {
                            salesList.map(sale =>
                                <div className={cartStyle.prev_sales}>
                                    <Typography variant="span" fontSize={20} component="h2" fontWeight={500}>
                                        Fecha: {getDate(sale.date)}
                                    </Typography>
                                    <Typography mt={2} variant="span" fontSize={25} component="h2" fontWeight={600}>
                                        ${sale.total.toFixed(2)}
                                    </Typography>
                                </div>
                            )
                        }
                    </div>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={2000} onClose={closeFeedback}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
                <Alert onClose={closeFeedback} severity="success" sx={{ width: '100%' }}>
                    Gracias por su compra
                </Alert>
            </Snackbar>
        </div>
        <Footer/>
        </>
    )
}

export default Cart