# hacktool-backend

## Requirements
- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Install
Install the dependencies with `npm install` or `sudo npm install`.

## Configuration
Export the following environment variables:
- HACKTOOL_PORT: the port to use, **3000** by default
- HACKTOOL_GITHUB_CLIENT_ID: github application client id,
- HACKTOOL_GITHUB_CLIENT_SECRET: github application client secret

```bash
$ export HACKTOOL_PORT='port'
$ export HACKTOOL_GITHUB_CLIENT_ID='clientID'
$ export HACKTOOL_GITHUB_CLIENT_SECRET='clientSecret'
```
### Note:
If you want to export it permanently do the following for each variable:
```bash
$ echo "export HACKTOOL_PORT='port'">>~/.bashrc
$ source ~/.bashrc
```

If you use [pm2](http://pm2.keymetrics.io/) to start the application then add fill the variables needed to run the application in `ecosytem.json`.

## Run
You can start by running `npm start` or in case you don't want to export the varibles
```bash
$ HACKTOOL_PORT='port' HACKTOOL_GITHUB_CLIENT_ID='clientID' HACKTOOL_GITHUB_CLIENT_SECRET='clientSecret' npm start
```
