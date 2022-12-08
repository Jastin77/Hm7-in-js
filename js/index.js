let users = [
    { name: "Abdusalom", age: 30 },
    { name: "Farhod", age: 30 },
    { name: "Jasurbek", age: 30 },
    { name: "Rustam", age: 30 },
    { name: "Qodirali", age: 30 },
    { name: "Qutbiddin", age: 30 },
    { name: "Nurxon", age: 30 },
    { name: "Samandar", age: 30 },
];

let text = prompt("Enter word which is searched:");
let isDefined = false;

for (let i = 0; i < users.length; i++) {
    let nameText = users[i].name.slice(0, text.length);

    if (nameText === text) {
        isDefined = true;
        console.log(users[i]);
    }
}

if (!isDefined) {
    console.log("Foydalanuvchi is not finded!");
}