let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr
    .filter(employee => employee.profession === "developer")
    .map(employee => console.log(employee));
}
function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}
function addData() {
  const newEmployee = { id: 4, name: "Nitish", age: "32", profession: "intern" };
  arr.push(newEmployee);
  console.log(newEmployee);
}


function removeAdmin() {
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "Rahul", age: "20", profession: "internship" },
    { id: 6, name: "shashi", age: "22", profession: "designer" },
    { id: 7, name: "vicky", age: "25", profession: "manager" },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}



PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();