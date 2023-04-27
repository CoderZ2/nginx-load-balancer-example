# Nginx Load Balancer Example

This is an example project that demonstrates how to use Nginx as a load balancer to distribute traffic across multiple servers.

Installation

1. Clone the project

```
git clone https://github.com/CoderZ2/nginx-load-balancer-example.git
```

2. Install Nginx on your computer. You can download the latest version from the official website: http://nginx.org/en/download.html

## Configuration

1. Copy the following configuration into the default Nginx configuration file (usually located at /etc/nginx/nginx.conf on Linux systems or C:\nginx\conf\nginx.conf on    Windows systems):

``` nginx
http {
    include mime.types;


      # Define a log format that includes upstream response time
    log_format upstreamlog '$remote_addr - $remote_user [$time_local] '
                          'upstream_addr=$upstream_addr '
                          '"$request" $status $body_bytes_sent '
                          '"$http_referer" "$http_user_agent" '
                          'rt=$upstream_response_time';

    upstream backendserver {
        server 127.0.0.1:1111;
        server 127.0.0.1:2222;
        server 127.0.0.1:3333;
        server 127.0.0.1:4444;
    }

    server {

        listen 9000;

        root C:\Users/Asus/Desktop/nginx-docker-load-balancer/front;

        rewrite ^/number/(\w+) /count/$1;

        location ~*  /count/[0-9]/ {
            root C:\Users/Asus/Desktop/nginx-docker-load-balancer/front;
            try_files /index.html = 404;
        }

        access_log upstream.log upstreamlog;

        location / {
            proxy_pass http://backendserver;
        }

        location /fruits {
            root C:\Users/Asus/Desktop/nginx-docker-load-balancer/front;
            index index.html;
        }

        location /carbs {
            alias C:\Users/Asus/Desktop/nginx-docker-load-balancer/front/fruits;
        }

        location /vegetables {
            root C:\Users/Asus/Desktop/nginx-docker-load-balancer;
            try_files vegetables/vegetables.html/ index.html = 404;
        }

        location /crops {
            return 307 /fruits;
        }
    }
}

events {}
```

2. Restart Nginx to apply the new configuration:

```
nginx -s reload
```

## Usuage

1. Build the Docker image for the load balancer:

```
docker build . -t nginx-balancer
```

2. Run four containers with the load balancer, each exposing a different port:

```
docker run -p 1111:5555 -it nginx-balancer
docker run -p 2222:5555 -it nginx-balancer
docker run -p 3333:5555 -it nginx-balancer
docker run -p 4444:5555 -it nginx-balancer
```

3. Enter the following URL in your web browser:

```
http://localhost:9000
```

4. You should see how the load balancer distributes traffic across the four containers. You can also check the upstream.log file located at C:/nginx/upstream.log to      see how the traffic is being distributed.

## Conclusion

Using Nginx as a load balancer can help reduce server traffic and improve the performance and scalability of your applications. By following the steps in this example project, you can quickly and easily set up a load balancer for your own applications.

