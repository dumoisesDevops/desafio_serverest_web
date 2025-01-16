const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

// Gerar os dados
const usuarios = [
  {
    "nome": faker.person.firstName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(),
    "administrador": "true"
  },
  {
    "nome": faker.person.firstName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(),
    "administrador": "false"
  },
  {
    "nome": faker.person.firstName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(),
    "administrador": "true"
  },
  {
    "nome": faker.person.firstName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(),
    "administrador": "false"
  },
  {
    "nome": faker.person.firstName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(),
    "administrador": "true"
  },
  {
    "nome": faker.person.firstName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(),
    "administrador": "false"
  },
  {
    "nome": faker.person.firstName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(),
    "administrador": "true"
  },
  {
    "nome": faker.person.firstName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(),
    "administrador": "false"
  },




];

// Caminho correto para a pasta fixtures do Cypress
const filePath = path.join(__dirname, 'cypress', 'fixtures', 'usuarios.json');

// Escrever o arquivo JSON na pasta fixtures
fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));

console.log(`Arquivo JSON gerado em: ${filePath}`);
