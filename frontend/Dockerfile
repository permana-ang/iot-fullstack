# Step 1: Build React app
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine

# ⬇️ Gunakan file konfigurasi Nginx dari folder nginx/
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# ⬇️ Copy hasil build React ke folder Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
