import '../src/index.scss';
import { calculate } from "./calc";
import Header from './Header';


const root = document.getElementById('root')
root.append(Header);

console.log(Header);
calculate(1,2);