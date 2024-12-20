import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import NotFound from "./views/NotFound.vue";
import Product from "./views/Product.vue";
import Cart from "./views/Cart.vue";
import Favorites from "./views/Favoritos.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/shop", name: "shop", component: Shop },
  { path: "/product/:id", name: "product", component: Product },
  { path: "/cart", name: "cart", component: Cart },
  { path: "/:path(.*)", component: NotFound },
  { path: "/favorites", name: "favorites", component: Favorites },
];
