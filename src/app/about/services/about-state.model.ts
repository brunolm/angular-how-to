import { Apod } from '../../shared/nasa.service';

export interface AboutState {
  type?: string;
  number?: string;
  action?: {
    type?: string;
    data?: Apod;
  };
}
