# Используем официальный образ Node.js 18
FROM node:18 AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем Angular CLI
RUN npm install -g @angular/cli

# Копируем все остальные файлы в рабочую директорию контейнера
COPY . .

# Строим приложение Angular
RUN ng build --configuration production

# Используем Nginx для обслуживания статики
FROM nginx:alpine

# Копируем сгенерированные файлы в папку, где Nginx ожидает статику
COPY --from=build /app/dist/pimsler-hebrew/browser /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
