// const { faker } = require("@faker-js/faker");
// import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
const { faker } = require("@faker-js/faker");

// import { faker } from "@faker-js/faker";

faker.locale = "pt_BR";

const clients = [];

// Criação dos clientes
for (let i = 0; i < 1000; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const fullName = `${firstName} ${lastName}`;
  const genre = faker.commerce.product();
  const countPurchase = faker.datatype.number({ min: 1, max: 40 });

  const dateNow = new Date();
  const yearNow = dateNow.getFullYear();

  const dtLastPurchase = faker.date.past(5);
  const lpDay = dtLastPurchase.getDate();
  const lpMonth = dtLastPurchase.getMonth() + 1;
  const lastPurchaseYear = dtLastPurchase.getFullYear();
  const lastPurchaseDate = `${lpDay}/${lpMonth}/${lastPurchaseYear}`;

  const dt = faker.date.birthdate({
    min: 1910,
    max: 2006,
    mode: "year",
  });
  const birthDate = dt.getDate();
  const birthMonth = dt.getMonth() + 1;
  const birthYear = dt.getFullYear();

  const birthDay = `${birthDate}/${birthMonth}/${birthYear}`;
  const age = yearNow - birthYear;

  const client = {
    firstName,
    lastName,
    fullName,
    birthDay,
    age,
    lastPurchaseDate,
    lastPurchaseYear,
    genre,
    countPurchase,
  };

  clients.push(client);
}

// console.log(clients);

// 1 - Desenvolva, utilizando filter , uma função que, dado um caractere de entrada, retorne todos os registros de clientes cujo o nome inicia com o caractere dado.

function returnFullNamesWithLetter(data) {
  clients.filter(function (client) {
    let fullNames = client.fullName;
    if (fullNames.charAt(0) == data) {
      console.log(client);
      return client;
    }
  });
}

// returnFullNamesWithLetter("A");

// 2 - Liste os nomes dos clientes no padrão: "Cliente: NOME_DO_CLIENTE"

function returnName() {
  clients.filter(function (client) {
    console.log(
      `Nome do cliente: ${client.fullName} | Idade: ${client.age} | Quantidade de compras: ${client.countPurchase} | Produto comprado: ${client.genre}`
    );
  });
}

// returnName();

// 3 - Liste os nomes dos clientes no padrão: "Cliente INDEX: NOME_DO_CLIENTE"

function returnNameIndex() {
  for (let i = 0; i < clients.length; i++) {
    console.log(
      `Cliente ${i + 1}: ${clients[i].fullName} | Idade: ${
        clients[i].age
      } | Quantidade de compras: ${
        clients[i].countPurchase
      } | Produto comprado: ${clients[i].genre}`
    );
  }
}

// returnNameIndex();

// 4 - Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número com o total de registros encontrados que iniciam com o caractere dado.

function returnTotalPeopleWithLetter(data) {
  let total = 0;
  for (let i = 0; i < clients.length; i++) {
    let fullNames = clients[i].fullName;
    if (fullNames.charAt(0) == data) {
      total++;
    }
  }
  console.log(total);
  return total;
}

// returnTotalPeopleWithLetter("A");

// 5 - Desenvolva uma função que retorne apenas os nomes dos clientes.
function returnJustFullName() {
  clients.filter(function (client) {
    console.log(client.fullName);
    return client.fullname;
  });
}

// returnJustFullName();

// 6 - Desenvolva uma função que retorne apenas o primeiro nome dos clientes.

function returnJustName() {
  clients.filter(function (client) {
    console.log(client.firstName);
  });
}

// returnJustName();

// 7 - Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.

function returnNameWithLetter(data) {
  clients.filter(function (client) {
    let firstNames = client.firstName;
    if (firstNames.charAt(0) == data) {
      console.log(firstNames);
    }
  });
}

// returnNameWithLetter("A");

// 8 - Desenvolva uma função que retorne todos os usuários que são maiores de idade.

function returnAdults() {
  clients.map(function (client) {
    if (client.age >= 18) {
      console.log(client);
    }
  });
}

// returnAdults();

// 9 - Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.

function isOnList(data) {
  clients.filter(function (client) {
    let firstNames = client.firstName;
    if (firstNames == data) {
      console.log(`${firstNames} está contido na lista!`, client);
    }
  });
}

// isOnList("Gustavo");

// 10 - Implemente uma função que retorna o total de vendas realizadas somando o total de compras de todos os clientes.
// countPurchase
function totalPurchases() {
  let total = 0;
  clients.filter(function (client) {
    total += client.countPurchase;
  });
  console.log(`o total de vendas realizadas foram de: ${total}.`);
}

// totalPurchases();

// 11 - Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.

function returnDataNotBuy() {
  const dateNow = new Date();
  const yearNow = dateNow.getFullYear();
  clients.filter(function (client) {
    if (client.lastPurchaseYear < yearNow - 1) {
      console.log(client);
    }
  });
}

// returnDataNotBuy();

// 12 - Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.

function returnCostumer() {
  clients.filter(function (client) {
    if (client.countPurchase > 15) {
      console.log(client);
    }
  });
}

// returnCostumer();

// 13 - Crie uma função que receba um cliente e adicione no INÍCIO do array de clientes.
let arrayClients = [];
function pushClient(client) {
  arrayClients.unshift(client);
}

// pushClient(clients[3]);
// console.log(arrayClients);
