
[![Build Status](https://travis-ci.org/ghanshyamca/example_extension.svg?branch=master)](https://travis-ci.org/ghanshyamca/example_extension) [![Coverage Status](https://coveralls.io/repos/github/ghanshyamca/example_extension/badge.svg?branch=master)](https://coveralls.io/github/ghanshyamca/example_extension?branch=master)

## Setup
```bash
docker build . -t nextjs_n12:16.1.0 --build-arg NODE_VERSION=12.16.1
```

## Development

```bash
cd ../
docker run -itd -p 84:3000 -v $(pwd):/opt/apps/ -v $(pwd)/logs:/opt/logs -e 'PROJECT_NAME=ecommerce-frontend' nextjs_n12:16.1.0
```

## Production

```bash
cd ../
docker run -itd -p 84:3000 -v $(pwd):/opt/apps/ -v $(pwd)/logs:/opt/logs -e 'APP_MODE=release' -e 'PROJECT_NAME=ecommerce-frontend' nextjs_n12:16.1.0
```
