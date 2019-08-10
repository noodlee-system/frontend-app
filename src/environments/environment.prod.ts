// Production environment settings file

import { IEnvironment } from 'src/app/models';

export const environment: IEnvironment = {
    production: true,
    apiUrl: 'http://localhost:8080/api'
};
