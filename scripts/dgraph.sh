docker rm -f dgraph
docker run -it \
  -p 5080:5080 \
  -p 6080:6080 \
  -p 8080:8080 \
  -p 9080:9080 \
  -p 8000:8000 \
  --name dgraph \
  dgraph/standalone:v22.0.0
