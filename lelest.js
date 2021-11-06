let myArray = [
    { userName: "joe", age: 25 },
    { userName: "jack", age: 46 },
    { userName: "dani", age: 98 }

]

function getUsersAge(requestedAge, allUsersArray) {
    const answer = allUsersArray.filter((value) => {
        if (value.age < requestedAge) {
            return false;
        } else {
            return true;
        }
    });
    return answer;
}
const age40Users = getUsersAge(40, myArray);
console.log(age40Users);