FROM node:15.5-alpine3.12 as builder

# Node image includes a Node user
# can use this instead of running
# as root

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19-alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# Replacing the index placeholder with our own
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /home/node/app/dist /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]
