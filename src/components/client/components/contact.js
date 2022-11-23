import { Button, TextField, Typography } from "@mui/material";
import Footer from './Footer';

function Contact() {
  const submitContact = (e) => {
    alert('¡MENSAJE ENVIADO CORRECTAMENTE!')
  }
  return (
    <>
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
              onSubmit={submitContact}
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <TextField
                      id="name"
                      label="Nombre Completo"
                      required
                      inputProps={{ maxLength: 30 }}
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                  <TextField
                      id="street"
                      type={'email'}
                      label="Dirección de Correo"
                      required
                      inputProps={{ maxLength: 25 }}
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0 mt-3">
                    <TextField
                      id="theme"
                      label="Asunto"
                      required
                      inputProps={{ maxLength: 20 }}
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mt-4">
                  <TextField
                      id="message"
                      label="Mensaje"
                      placeholder="Hasta 140 caracteres"
                      required
                      fullWidth
                      inputProps={{ maxLength: 140 }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Button variant="text" style={{color: '#aaa', fontSize: '20px', marginTop: '10px'}} id="button" type="submit" >
                  ENVIAR
                </Button>
              </div>
            </form>

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
    <Footer/>
    </>
  );
}

export default Contact;
