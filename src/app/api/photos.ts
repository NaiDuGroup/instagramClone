import { environment } from '../../environments/environment';

export const apiPhotos = () => `${environment.apiHost}/photos`;
export const apiPhoto = (id: string) => `${environment.apiHost}/photos/${id}`;