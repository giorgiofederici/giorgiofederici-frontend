import { baseEnv } from './environment.base';

export const environment = {
  ...baseEnv, ...{
    production: true,

    backendUrl: 'http://116.203.146.153',
    // UIsUrl: '',

    domain: '.giorgiofederici.com'
  }
};
