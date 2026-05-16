# Usar a imagem oficial e leve do Nginx
FROM nginx:alpine

# Remover a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar a sua configuração customizada
COPY nginx.conf /etc/nginx/conf.d/

# Copiar todos os arquivos do seu projeto (HTML, componentes, assets) para a pasta pública do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80 (O Traefik do Dokploy cuidará do SSL/443 externamente)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]