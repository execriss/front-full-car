import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <section class="mb-4">
        <Typography variant="span" marginBottom={10} fontSize={35} component="h2" ml={1} fontWeight={600} fontFamily={'fantasy'} width={'100%'}>
          <marquee direction="RIGHT">
            CONTACTO
          </marquee>
        </Typography>
        
        <p class="text-center w-responsive mx-auto mb-5 fw-bold">
          Si necesitás alguna pieza o repuesto importado, o simplemente tenes dudas sobre nuestro stock, escribinos y nos podremos en Contacto
          lo mas pronto posible.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Nombre Completo
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                    <label for="email" class="">
                      Dirección de correo
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                    <label for="subject" class="">
                      Asunto
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Consulta</label>
                  </div>
                </div>
              </div>
            </form>

            <div>
              <Button variant="text" style={{color: '#aaa', fontSize: '20px', marginTop: '10px'}} id="button" >
                ENVIAR
              </Button>
            </div>
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Dirección: V. Zapata 256 - Mendoza</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>Wsp: 2613565655</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>Tel: 4361277</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>email: ventas@fullcar.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
