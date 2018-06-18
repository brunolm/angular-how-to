import { AboutState } from './about/services/about-state.model';

export interface AppState {
  about: AboutState;
  router: any;
}
