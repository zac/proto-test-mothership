# Generate Protos
## JS
`protoc --proto_path=protos  --js_out=gen/js ./protos/*.*`

## Scala
`scalapbc -v351 --scala_out=gen/scala ./protos/*.*`
