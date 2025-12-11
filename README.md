[![Coverage Status](https://coveralls.io/repos/github/emuttaja/COMP.SE.200-software-testing-assignment/badge.svg?branch=main)](https://coveralls.io/github/emuttaja/COMP.SE.200-software-testing-assignment?branch=main)

## Docker usage

Build image:
```
docker compose build
```
Run interactively:
```
docker compose run --rm node bash
```
Run tests directly:
```
docker compose run --rm node npm test
```