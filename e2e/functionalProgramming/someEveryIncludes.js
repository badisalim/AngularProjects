//.some()
const userPrivileges = ['user', 'user', 'user', 'admin'];
const containsAdmin = userPrivileges.some(element => element === 'admin');
console.log("some :" + "\n" + containsAdmin);
// containsAdmin will be equal to true
//-----------------------------------------
//.every()
const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every(rating => rating >= 3);
console.log("every :" + "\n" + goodOverallRating);
// goodOverallRating will be equal to true
//-------------------------------------------
//.includes()
const names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];
const includesWaldo = names.includes('waldo');
console.log("includes:" + "\n" + includesWaldo);
// includesWaldo will be equal to true