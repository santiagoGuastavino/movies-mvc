// -------------------------------------------------------------------------- //
// REQUIRE NEEDED HELPERS OR OTHER MODULES, IF THERE ARE
// -------------------------------------------------------------------------- //
// let controller = { };
// -------------------------------------------------------------------------- //
// VALIDATION W/ MULTER //
// let multer = require('multer');
// req.file contains an object w/ all the updated file info
// userController: {
//     where we process the form (associated w/ post)
//     store: 
//         let product = {req.file;
//         if (imageFile !== undefined & imageFile < 1000 & imageFile) {
//             user.img = req.file.filename;
//             all the logic to create entry in db
//         } esle {
//             return (res.send('No file sent'));
//         }
//     }
// }
// -------------------------------------------------------------------------- //
// CREATE
// create should look like this:
// let product = {
//      id: lastId() + 1,
//      ...req.body,        --> spread operator on body
//      image: req.file.filename
// };
// -------------------------------------------------------------------------- //
// HOW TO MODULARIZE CONTROLLER FOR PRODUCTS
// 1 GET: show all items
// 2 GET: show product <form>
// 3 GET: show product detail
// 4 POST: store product <form> fields
// 5 GET: show <form> with current product data
// 6 POST: submit changes to existing product
// 7 DELETE: remove entry
// -------------------------------------------------------------------------- //
// export controller