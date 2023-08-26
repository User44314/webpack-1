import htmltoelement from "../utils/htmltoelement";
import ButtonHtml from './index.html';

import './index.scss';

const Button = ({onClick, title, className}) =>{
    const buttonelement = htmltoelement(ButtonHtml);
    buttonelement.innerHTML = title;
    buttonelement.classList.add(className);
    buttonelement.addEventListener('click', onClick)
    return buttonelement;
};

export default Button;