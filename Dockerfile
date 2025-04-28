# Этап сборки
FROM node:18 AS build

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем Angular CLI
RUN npm install -g @angular/cli

# Копируем весь проект в контейнер
COPY . .

# Строим приложение для продакшн-среды
RUN ng build --configuration production

# Этап с Nginx для сервировки статического контента
FROM nginx:alpine

# Копируем самоподписанный сертификат в контейнер
COPY ./cert.pem /usr/local/share/ca-certificates/cert.crt

# Обновляем доверенные сертификаты
RUN update-ca-certificates

# Копируем собранное приложение из предыдущего этапа
COPY --from=build /app/dist/pimsler-hebrew/browser /usr/share/nginx/html

# Открываем порт 80 для Nginx
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
