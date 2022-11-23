import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../../img/fullcarlogo.png'

const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-start justify-md-content-center'>
                            <img src={Logo} alt="logo" className='mx-2' height={90}/>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyle'>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyle'>
                            <li className='font-weight-bold mb-2'>Tel: 4361277</li>
                            <li className='font-weight-bold mb-2'>Wsp: 2613565655</li>
                            <li className='font-weight-bold mb-2'>Instagram: FullCarOf</li>
                            <li className='font-weight-bold mb-2'>Direc: V. Zapata 256 - Mendoza</li>

                        </ul>
                        <ul className='col-12 col-md-3 list-unstyle'>
                            <li className='font-weight-bold mb-2 text-center text-md-start'>Redes</li>
                            <Link href='https://www.facebook.com/' target="_blank" className='col-12 col-md-3 d-flex align-items-center justify-content-center text-reset'>
                                <li className='font-weight-bold mb-2'>Facebook</li>
                            </Link>
                            <Link href='https://www.instagram.com/' target="_blank" className='col-12 col-md-3 d-flex align-items-center justify-content-center text-reset'>
                                <li className='font-weight-bold mb-2'>Instagram</li>
                            </Link>
                            <Link href='https://web.whatsapp.com/' target="_blank" className='col-12 col-md-3 d-flex align-items-center justify-content-center text-reset'>
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