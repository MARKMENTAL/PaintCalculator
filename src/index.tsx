/* @refresh reload */
import { render } from 'solid-js/web';


import Body from './components/IndexBody';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carside from "./components/Carside";

render(() => <Navbar />, document.getElementById('root') as HTMLElement);
render(() => <Body />, document.getElementById('root') as HTMLElement);
render(() => <Carside />, document.getElementById('root') as HTMLElement);
render(() => <Footer />, document.getElementById('root') as HTMLElement);
