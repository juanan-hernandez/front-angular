// import que necesitamos para rutas
import { RouterModule, Routes } from "@angular/router";

// cada vez que queramos enrutar un componente tenemos que ponerlo aqui
import { HomeComponent } from "./home/home.component";

// constante donde almacenamos las rutas
const APP_ROUTES: Routes = [
  // ruta + componente asociado a la ruta
  { path: "home", component: HomeComponent },
  // redirecTo -> si no coincide con ninguna ruta nos lleva a la home
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
export const app_routing = RouterModule.forRoot(APP_ROUTES);