# Generate Protos
## JS
`protoc --proto_path=protos  --js_out=gen/js ./protos/*.*`

## Scala
`scalapbc -v351 --scala_out=gen/scala ./protos/*.*`

## Swift

(*Note:* The swift-protobuf plugin is needed. This can be installed via Homebrew with `brew install swift-protobuf`)

`protoc --swift_out=gen/swift ./protos/*.*`