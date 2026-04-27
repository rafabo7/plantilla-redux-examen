// Instalar por si acaso
// comprobar tipos de archivo en settings.json y extensión ESLint activa
// npm install; npm install @reduxjs/toolkit; npm install react-redux

import { configureStore } from "@reduxjs/toolkit";
import nombreSlice from "./NombreSlice";

const store = configureStore({
    reducer:
    nombreSlice
})

export default store