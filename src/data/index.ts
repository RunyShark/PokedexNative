import {RouteProps, HomeScreen, PokemonScreen} from '../index';

export const RoutesTemplate: RouteProps[] = [
  {
    title: 'HomeScreen',
    name: 'HomeScreen',
    component: HomeScreen,
  },
  {
    title: 'PokemonScreen',
    name: 'PokemonScreen',
    component: PokemonScreen,
  },
];
