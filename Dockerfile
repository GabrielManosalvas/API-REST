# Imagen base oficial de Nginx
FROM nginx:alpine

# Elimina configuracion por defecto (opcional pero recomendable)
RUN rm -rf /usr/share/nginx/html/*

# Copia tu sitio HTML al contendor
COPY . /usr/share/nginx/html

# Expone le puerto 80
EXPOSE 80

# Ejecuta Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]