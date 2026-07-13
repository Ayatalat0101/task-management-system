const name = "Aya";
let age = 25;

age = 26;


function sum(a, b) {
  return a + b;
}


const sum = (a, b) => a + b;

const user = {
  name: "Aya",
  age: 25
};

const name = user.name;

const { name, age } = user;

const skills = ["React", "Laravel"];

const allSkills = [
  ...skills,
  "GIS"
];

const promise = new Promise(
  (resolve, reject) => {
    resolve("Success");
  }
);

const getUsers = async () => {
  const response =
    await fetch(url);

  const data =
    await response.json();

  console.log(data);
};

try {
  const response =
    await fetch(url);
}
catch (error) {
  console.log(error);
}

