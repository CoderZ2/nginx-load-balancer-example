# Example for nginx load balancer

### Install nginx on your computer

```
http://nginx.org/en/download.html
```

### Copy following config into nginx default config

[config](https://github.com/CoderZ2/nginx-load-balancer-example/blob/main/nginx.conf)

### Build docker

```
docker build . -t nginx-balancer
```

### Enter followind code in your cmd for running contianer

```
docker run -p 1111:5555 -it nginx-balancer
```
```
docker run -p 2222:5555 -it nginx-balancer
```
```
docker run -p 3333:5555 -it nginx-balancer
```
```
docker run -p 4444:5555 -it nginx-balancer
```
### Enter following url in your browser and you will see how load balancer work at "C:/nginx/upstream.log"

```
localhost:9000
```

