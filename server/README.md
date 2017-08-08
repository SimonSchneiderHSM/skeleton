How to start the stack the first time:

##### Prepare
    npm install
    
    npm install grunt -g
    npm install gulp -g

##### Start without WEBPACK DEV-SERVER
    npm run start

##### Start with WEBPACK DEV-SERVER
    npm run start-dev
 
##### Start App
    http://localhost:8000/app

##### Build (only when source files have been changed)
    npm run build

##### Running in distributed mode on several machines
    change host names from localhost to reachable ip address in network

    on master:
    config/<config>/http/http_extension.json:host
    config/<config>/frontend/service.json:webpackHost
    config/<config>/frontend/service.json:webpackContentBaseHost

    additionally on slave:
    config/<config>/messagebus/faye.json:endPointName
