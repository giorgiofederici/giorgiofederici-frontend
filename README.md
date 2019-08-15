# Giorgio Federici Web Application (Frontend)

A Single Page Application (SPA) developed as the web application frontend.

# Architecture

The SPA is created with Angular2+ (v.8) framework.

Inspired by Redux, there is central store and a reactive state management (NgRx and RxJs).

The SPA is hosted using Nginx on a Debian 9 VM in the [Hetzner Cloud](https://www.hetzner.com/cloud).

An [API server](https://github.com/giorgiofederici/giorgiofederici-backend) supports all the http requests.

# CI/CD (Continuous integration/Continuous deployment)

The CI/CD works with [Travis CI](https://travis-ci.org/).

As custom VPSs are not supported by Travis CI providers, a custom deploy has been created with the 'script' provider and SSH connections.

For details, check the .travis.yml and deploy.sh files.

[![Build Status](https://travis-ci.org/giorgiofederici/giorgiofederici-frontend.svg?branch=production)](https://travis-ci.org/giorgiofederici/giorgiofederici-frontend)

# SSL

HTTPS enabled thanks to [Let's Encrypt](https://letsencrypt.org/) certificate.

# Scripts

    start: it launches a development build and start a selfhosted server to serve the web app
    build: it launches the production ready build
    lite-server:local: it launches a tiny server to serve the production ready distribution

# Technologies

- Angular2+
- NgRx
- TypeScript
- Hthml/Css
- Sass
- Bootstrap 4
- Angular Material
- Fontawesome

# Author

[Giorgio Federici](https://giorgiofederici.com)

# License

This project is licensed under the MIT License - see the LICENSE file for details
