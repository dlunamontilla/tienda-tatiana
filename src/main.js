import App from './App.svelte';
import "./sass/style.scss";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;