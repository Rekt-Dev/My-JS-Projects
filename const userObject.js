const userObject = {
    userId: 12,
    userName: 'barzik',
    age: 40,
};
const userObjectKeys = Object.keys(userObject); // ["userId",
"userName", "age"]
userObjectKeys.forEach((key) => {
    console.log(`key: ${key}, value: ${userObject[key]}`);
});