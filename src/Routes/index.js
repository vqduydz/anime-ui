import routesConfig from '~/config/routes';
import AnimeDetails from '~/Pages/AnimeDetails';
import Home from '~/Pages/Home';
import Stream from '~/Pages/Stream';
import Login from '~/Pages/Login';

const PublicRoutes = [
    { path: routesConfig.home, comp: Home },
    { path: routesConfig.login, comp: Login, layout: null },
    { path: routesConfig.animeDetails, comp: AnimeDetails },
    { path: routesConfig.stream, comp: Stream },
];
const PrivateRoutes = [];

export { PrivateRoutes, PublicRoutes };
