export interface RouteProps {
  title: string;
  name: string;
  component: () => JSX.Element;
}
export interface PokemonPaginatedResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string;
  name: string;
  url: string;
  color?: string;
}
