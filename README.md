# Sandbox for React & [Elasticsearch](https://www.elastic.co/) beginners

**REQUIREMENTS**

* node `v6.11.1`
* npm `3.10.10`
* react `^16.0.0`
* elasticsearch `5.6.3`



##install and run
####Step 1 prepare
install node, and elasticsearch

####Step 2 setup
setup elastic config, at the config file
`{$ELASTIC_HOME}/config/elasticsearch.yml`

add 
```
http.cors.enabled : true

http.cors.allow-origin : "*"
http.cors.allow-methods : OPTIONS, HEAD, GET, POST, PUT, DELETE
http.cors.allow-headers : X-Requested-With,X-Auth-Token,Content-Type, Content-Length
```
go into project folder

`npm install`

####Step 3 run

run elasticsearch
`./{$ELASTIC_HOME}/bin/elasticsearch`

run react app
`npm start`


Go to `http://localhost:3000` and enjoy;-)
