import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./style.css"

// Create App
const app = createApp(App)

// Install Plugins
app.use(router)

// Mount
app.mount("#app")
