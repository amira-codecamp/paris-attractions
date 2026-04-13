FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN mkdir -p src/app/environments && \
    echo "export const environment = { production: true, api_url: '${SERVER_HOST_URL}' };" > src/app/environments/environment.ts

RUN npm run build


FROM nginx:alpine
COPY --from=build /app/dist/paris-attractions-website /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
