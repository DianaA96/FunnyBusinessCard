import React from 'react';
import './Card.css';
import fotoDiana from './fotoDiana.jpg';
import logoCorreo from './mailLogo.png';
import logoFacebook from './facebookLogo.png';
import logoInstagram from './instagramLogo.png';
import logoLinkedIn from './linkedinLogo.png';
import logoGithub from './githubLogo.png';


function Card(props) {

    let [facebook, gitHub, instagram, linkedIn, email] = props.logosLinks;

    return(
        <React.Fragment>
            <header>
                <h1>¡Esta soy yo!</h1>
            </header>

            <section id='tarjeta'>

                <div id='fotoTarjeta'>
                    <img src={fotoDiana} alt='' width='300px' />
                </div> 

                <div id='textoTarjeta'>
                    <h2 id='nombre'>{`${props.nombres} ${props.apellidos}`}</h2>
                    <h3 id='textoBienvenida'>Puedes encontrarme por acá:</h3>

                    <div className='opcionesContacto'>

                        <div className='listaContacto'>
                            <div><img src={logoCorreo} width='30px' alt='Correo electrónico'/></div>
                            <div><img src={logoFacebook} width='30px' alt='Facebook'/></div>
                            <div><img src={logoInstagram} width='30px' alt='Instagram'/></div>
                            <div><img src={logoGithub} width='30px' alt='GitHub'/></div>
                            <div><img src={logoLinkedIn} width='30px' alt='LinkedIn'/></div>
                        </div>

                        <div className='listaContacto'>
                                <div>{email}</div>
                                <div>{facebook}</div>
                                <div>{instagram}</div>
                                <div>{gitHub}</div>
                                <div>{linkedIn}</div>
                        </div>

                    </div>
                    
                </div>

            </section>
    </React.Fragment>
    )
};

export default Card;