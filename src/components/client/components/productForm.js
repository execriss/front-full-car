import { Box, Button, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import { saveProduct } from '../../../services/product'
function ProductForm(props) {
    const { openModal, setOpenModal, edit, setProductFeedback, setProduct, product, setRefresh } = props;
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
      setCategory(event.target.value);
    }
    const handleProductForm = e => {
        const tempData = { ...product }
        tempData[e.target.id] = e.target.value
        tempData.category = category
        setProduct(tempData)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
        setProduct(edit ? product : { name: "",marca: "",importado:"", price: 0, description: "", category: "", image: "" })
    };
    const saveModalProduct = () => {
        setRefresh(false)
        saveProduct({ product, edit }).then(response => {
            setProduct(edit ? product : { name: "",marca:"",importado: "", price: 0, description: "", category: "", image: "" })
            setProductFeedback({ show: true, status: true, infoText: response.data.infoMessage })
            setRefresh(true)
        }).catch(error => {
            setProductFeedback({ show: true, status: false, infoText: error.response.data.infoMessage })
            console.log(error.response.data.infoMessage);
        })
    };
      const  validarFormulario = () => {
            let campo = this.state.campo;
            let error = {};
            let formularioValido = true;
         
            // Nombres y Apellidos
            if (!campo["nombre"]) {
                formularioValido = false;
                error["nombre"] = "Por favor, ingresa el Nombre.";
            }
            if (!campo["category"]) {
                formularioValido = false;
                error["area"] = "Por favor, ingresa una Categoria.";
            }
            if (!campo["price"]) {
                formularioValido = false;
                error["price"] = "Por favor, ingresa el Precio.";
            }
            if (!campo["image"]) {
                formularioValido = false;
                error["image"] = "Por favor, ingresa un link.";
            }
    };
    
    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300,
                bgcolor: 'background.paper',
                border: '0px solid #000',
                borderRadius: '5px',
                boxShadow: 24,
                p: 2,
            }}>
                <Stack spacing={1}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {edit ? "Editar producto" : "Nuevo producto"}
                    </Typography>
                    <TextField
                        required
                        id="name"
                        label="Nombre"
                        aria-describedby="nHelp"
                        onChange={e => handleProductForm(e)}
                        value={product.name}
                        inputProps={{ maxLength: 20 }}
                    />
                    <TextField
                        required
                        id="marca"
                        label="Marca"
                        onChange={e => handleProductForm(e)}
                        value={product.marca}
                        inputProps={{ maxLength: 20 }}
                    />
                    <TextField
                        required
                        id="price"
                        label="Precio"
                        type="number"
                        onChange={e => handleProductForm(e)}
                        value={product.price}
                        inputProps={{ maxLength: 10 }}
                        onInput = {(e) =>{
                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
                        }}
                    />
                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="category"
                    // value={product.category}
                    label="Categoria"
                    value={category}
                    onChange={handleChange}
                    >
                        <MenuItem value={'Motor'}>Motor</MenuItem>
                        <MenuItem value={'Iluminación'}>Iluminación</MenuItem>
                        <MenuItem value={'Tren Delantero'}>Tren Delantero</MenuItem>
                        <MenuItem value={'Lubricantes'}>Lubricantes</MenuItem>
                    </Select>
                    <TextField
                        required
                        id="description"
                        label="Descripción"
                        onChange={e => handleProductForm(e)}
                        value={product.description}
                        inputProps={{ maxLength: 60 }}
                    />
                    <TextField
                        id="image"
                        label="URL de la Imágen"
                        onChange={e => handleProductForm(e)}
                        value={product.image}
                    />

                    <Button className='btn' onClick={saveModalProduct}
                        variant="contained"
                        id="button" >
                        Guardar
                    </Button>
                    <Button
                        variant="outlined"
                        id="button"
                        color="error"
                        onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default ProductForm