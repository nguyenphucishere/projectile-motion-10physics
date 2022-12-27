import { createApp } from 'vue'
import App from './App.vue'
import MathJax, { initMathJax, renderByMathjax } from "mathjax-vue3";

function onMathJaxReady() {
    const el = document.getElementById("elementId");
    renderByMathjax(el);
}

initMathJax({}, onMathJaxReady);

createApp(App).use(MathJax).mount('#app')