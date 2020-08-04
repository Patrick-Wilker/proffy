import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/38691922?s=460&u=050f594561d2dab1bd40f6d95cf7bb9368a1a97a&v=4" alt="Patrick"/>
                <div>
                    <strong>Patrick Wilker</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br/><br/>                    
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 40,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;