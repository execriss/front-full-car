import { Alert, Button, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import registerStyles from './register.module.css';
import { submitRegister } from '../../services/auth'
import loginPng from '../../img/login.png'

function Register() {
  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: ""
  })
  const [open, setOpen] = useState(false)
  const [wrongData, setWrongData] = useState({
    status: true,
    infoText: ''
  })
  const handleForm = e => {
    const tempData = { ...registerData }
    tempData[e.target.id] = e.target.value
    setRegisterData(tempData)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  const register = () => {
    submitRegister({ registerData, setRegisterData, setWrongData, setOpen })
  }
  return (
    <div className={registerStyles.container}>
      <Stack spacing={2} className={registerStyles.card} justifyContent="center" alignItems="center">
        <Typography variant="h4" component="h2" fontWeight={500} color={'#aaa'} fontFamily={'fantasy'}>
          Creá tu Cuenta
        </Typography>
        <img src={loginPng} alt='logo' height={100} />
        <TextField id="userName" onChange={e => handleForm(e)} value={registerData.userName} label="Usuario" variant="outlined" inputProps={{ maxLength: 20 }} required/>
        <TextField id="email" onChange={e => handleForm(e)} value={registerData.email} label="Email" variant="outlined" inputProps={{ maxLength: 40 }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
        <TextField id="password" onChange={e => handleForm(e)} value={registerData.password} label="Contraseña" variant="outlined" inputProps={{ maxLength: 12, minLength: 8 }}required/>
        <div className={registerStyles.requirements}>
         <p><span>*</span> La contraseña debe tener 8 dígitos mínimo y 12 máximo.</p>
         <p><span>*</span> Debe contener 1 minúscula, 1 mayúscula y un número.</p>
        </div>
        <Button variant="outlined" style={{color: 'black', background: '#ccc'}} onClick={() => { register() }}>
          Registrarse
        </Button>
        <Button variant="text" color='error' href='/'>Cancelar</Button>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity={wrongData.status ? "error" : "success"} sx={{ width: '100%' }}>
            {wrongData.infoText}
          </Alert>

        </Snackbar>
      </Stack>
    </div>
  )
}

export default Register