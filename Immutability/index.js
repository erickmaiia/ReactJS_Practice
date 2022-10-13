const home1 = {
  color: "yellow",
  publicPlace: "Av. Dom Aureliano",
  number: 20,
};

const home2 = {
  ...home1,
  number: 30,
};

console.log(home1);
console.log(home2);

const list1 = ["orange", "banana"];
const list2 = [...list1, "apple"];

console.log(list1);
console.log(list2);

const jose = {
  name: "jose",
  age: 18,
  adresses: [
    {
      publicPlace: "Av. Dom Aureliano",
      number: 10,
    },
  ],
};

const joao = {
  ...jose,
  name: "joao",
  adresses: [
    ...jose.adresses,
    {
      publicPlace: "Center",
      number: 10,
    },
  ],
};

console.log(jose);
console.log(joao);
