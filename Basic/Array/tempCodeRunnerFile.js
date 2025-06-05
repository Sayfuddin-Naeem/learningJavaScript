const users = [
    {firstName : 'John', lastName : 'Doe'},
    {firstName : 'Jane', lastName : 'Smith'},
];

const usersFullName = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(usersFullName);