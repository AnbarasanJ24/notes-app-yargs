const fs = require('fs');

const user = {
    name: 'Anbarasan',
    age: 25,
    city: 'Pondicherry'
}
const writeUser = (user) => {
    const userString = JSON.stringify(user);
    fs.writeFileSync('user.json', userString);
}

const dataBuffer = fs.readFileSync('user.json');
const dataString = dataBuffer.toString();
const data = JSON.parse(dataString);
data.age = 28;
data.name = "Ram";
writeUser(data);
