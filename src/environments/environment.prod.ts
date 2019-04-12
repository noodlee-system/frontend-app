// Production environment settings file

import IEnvironment from '../app/models/environment.model';

export const environment: IEnvironment = {
    production: true,
    apiUrl: "http://localhost:3000/api"
};
