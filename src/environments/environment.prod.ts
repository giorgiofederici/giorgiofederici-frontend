import { baseEnv } from './environment.base';

export const environment = {
  ...baseEnv,
  ...{
    production: true,

    backendUrl: 'https://giorgiofederici.com:8443',
    // UIsUrl: '',

    domain: 'giorgiofederici.com'
  }
};
