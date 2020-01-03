FROM node:erbium

WORKDIR /home/app

COPY . .

RUN npm install

CMD ["/bin/bash"]