import App from './App.svelte';
import './assets/css/global.css';
import init from "./modules/init";

init();

const app = new App({
	target: document.body
});

export default app;