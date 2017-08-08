
## 1. Establish authentication for git and npm
- create a .npmrc wihtin deployment folder having a valid authToken
- example:
`//registry.npmjs.org/:_authToken=<yourToken>
@process-engine-js:registry=https://registry.npmjs.org/`
- create a id_rsa and id_rsa.pub pair with ssh-keygen wihtin deployment folder
- run `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"` (use no passphrase)

## 2. ReBuild image (being in .config/deployment/docker folder)
- run `cd ./deployment`
- run `docker rmi demo` (when image needs to be recreated)
- run `docker build -t demo .` (use --no-cache for full rebuild)

## 3. Compose docker container
- Stop other conflicting container. Used ports are postgres:5432 and demo:8000
- run `docker-compose up -d database` (make sure is up an running healthy)
- run `docker-compose up demo`

## 5. Compose docker container
- Connect to http://localhost:8000 to run app
- Connect to postgres on localhost:5432 (user: admin, pass: admin - see docker-compose.yml)