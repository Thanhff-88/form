import config from '~/configs';
import Home from '~/pages/Home';
import List from '~/pages/List';
import Login from '~/pages/Login';
import Preview from '~/pages/Preview';

const publicRoutes: {}[] = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
];
const privateRoutes: {}[] = [
  { path: config.routes.list, component: List },
  { path: config.routes.preview, component: Preview },
];

export { publicRoutes, privateRoutes };
