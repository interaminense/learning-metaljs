import './hello.scss';
import templates from './Hello.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Hello extends Component {
}
Soy.register(Hello, templates);

export default Hello;
