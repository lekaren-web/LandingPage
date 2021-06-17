FROM golang:1.15.7-alpine3.13 as builder

WORKDIR /go/src/app
COPY . .

RUN go get -d -v ./...
RUN CGO_ENABLED=0 GOOS=linux go build -a -v -o app ./cmd/...

FROM scratch

COPY --from=builder /go/src/app .

CMD ["./app"]
