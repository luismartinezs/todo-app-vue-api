FROM node:erbium

WORKDIR /usr/src/todo-app-vue-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]