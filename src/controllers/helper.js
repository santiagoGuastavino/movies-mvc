// CONTROLLER TO EXPORT MINI FUNCTIONS THAT WORK EVERYWHERE
// -------------------------------------------------------------------------- //
// to require and manipulate my JSON
// require fs (file system) & path (to define the JSON file path)
// -------------------------------------------------------------------------- //
// TO READ
// first we locate and read the .json file
// let databaseFile = fs.readFileSync('myDatabase.json','UTF-8');
// then create the variable that will hold the parsed db
// let database;
// then we need to check if the file is empty
// if (myDatabaseFile == '') {
// if it's empty, my var is gonna start up as an empty array
// database = [];
// else {
// if it's not empty, we parse the .json into the var
// database = JSON.parse(databaseFile);
// -------------------------------------------------------------------------- //
// TO WRITE
// we're trying to storage users into our database
// let user = {name: req.body.name, email: req.body.email, password: req.body.password};
// once we got our database, either an empty array or our JSON parsed, we push our new user into it
// database.push(user);
// now we stringify our new array with it's new user
// myDatabaseJSON = JSON.stringify(myDatabase, null, nº);
// fs.writeFileSync(pathVar, 'file' || dataVar);
// -------------------------------------------------------------------------- //
// THEN HELPER TO READ AND WRITE JSON SHOULD LOOK LIKE THIS
// let helper = {
//     readJson: (jsonFile) => {
//         let dataFile = fs.readFileSync(dataPath + '/' + jsonFile, 'UTF-8');
//         let data = JSON.parse(dataFile);
//         return data;
//     },
//     writeJson: (jsonName,data) => {
//         dataFile = JSON.stringify(data, null, 2);
//         fs.writeFileSync(dataPath + '/' + jsonName + '.json', dataFile);
//     },
// };
// -------------------------------------------------------------------------- //
// FUNCTION TO FIND HIGHEST ID
// let lastId = (array) => {
//      let last = 0;
//      array.forEach(item => {
//          if (last < item.id) {
//              last = item.id + 1;
//          };
//      });
//      return last;
// };
// -------------------------------------------------------------------------- //
// module.exports = helper;