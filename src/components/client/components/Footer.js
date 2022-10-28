import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                            <img src='https://lirp.cdn-website.com/fd9241d7/dms3rep/multi/opt/icono-repuestos-432w.png' className='mx-2' height={50}/>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyle'>
                            <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center text-reset'>
                                <li className='font-weight-bold mb-2'>Inicio</li>
                            </Link>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyle'>
                            <Link to='/contacto' className='col-12 col-md-3 d-flex align-items-center justify-content-center text-reset'>
                                <li className='font-weight-bold mb-2'>Contacto</li>
                            </Link>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyle'>
                            <li className='font-weight-bold mb-2'>Redes</li>
                            <Link to='https://www.facebook.com/' className='col-12 col-md-3 d-flex align-items-center justify-content-center text-reset'>
                                <li className='font-weight-bold mb-2'>Facebook</li>
                            </Link>
                            <Link to='https://www.instagram.com/' className='col-12 col-md-3 d-flex align-items-center justify-content-center text-reset'>
                                <li className='font-weight-bold mb-2'>Instagram</li>
                            </Link>
                            <Link to='https://web.whatsapp.com/' className='col-12 col-md-3 d-flex align-items-center justify-content-center text-reset'>
                                <li className='font-weight-bold mb-2'>WhatsApp</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer