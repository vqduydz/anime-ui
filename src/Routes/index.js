import routesConfig from '~/config/routes';
import AnimeDetails from '~/Pages/AnimeDetails';
import Home from '~/Pages/Home';
import Stream from '~/Pages/Stream';
import Login from '~/Pages/Login';
import { Popular, Movies, TopAiring, Action, Comedy, MartialArts, Shounen, SuperPower } from '~/Pages/SubPages';

const PublicRoutes = [
    { path: routesConfig.home, comp: Home },
    { path: routesConfig.login, comp: Login, layout: null },
    { path: routesConfig.anime_details, comp: AnimeDetails },
    { path: routesConfig.stream, comp: Stream },
    { path: routesConfig.popular, comp: Popular },
    { path: routesConfig.movies, comp: Movies },
    { path: routesConfig.top_airing, comp: TopAiring },
    { path: routesConfig.action, comp: Action },
    { path: routesConfig.comedy, comp: Comedy },
    { path: routesConfig.martial_arts, comp: MartialArts },
    { path: routesConfig.shounen, comp: Shounen },
    { path: routesConfig.super_power, comp: SuperPower },
];
const PrivateRoutes = [];

export { PrivateRoutes, PublicRoutes };
