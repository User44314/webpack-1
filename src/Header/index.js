import htmltoelement from '../utils/htmltoelement';
import Header from './index.html';
import Button from '../Button';

import './index.scss';
// import button from '../Button';

const header = htmltoelement(Header);
const customeButton = Button({
    onClick: () => console.log('click from header'),
    title: 'HeaderButton',
    className: 'header-button'
})
header.appendChild(customeButton);

export default header