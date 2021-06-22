// -------------------------------------------------------------------------- //
// LOG
// as an example, a logs middleware
// what user does => log
// let fs = require('fs');
// let logMiddleware = (req,res,next) => {
//  fs.appendFileSync(myPath + 'log.txt','User requested ' + req.url + '\r\n');
//  next();
// };
// '\r\n' to make line & jump
// to make it GLOBAL, in app.js
// require & 
// app.use(logMiddleWare);
// -------------------------------------------------------------------------- //
// MULTER   //
// npm i multer
// let multer = require('multer')
// require path
// ------------------------------------ //
// MULTER SET UP
// let storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         let folderPath = path.resolve('folder/path');
//         cb(null,folderPath);
//     },
//     filename: (req,file,cb) => {
//         let imgName = 'foto-de-' + file.fieldname + '-' + Date.now() + path.extname(file.originalname);
//         cb(null,imgName);
//     }
// });
// let upload = multer({ storage });
// ------------------------------------ //
// IN MY ROUTES
// require upload where needed
// my route should look like this
// router.post('/user',upload.single('fileTypeFileName'),userController.create);
// ------------------------------------ //
// IN THE VIEW
// my <form> should look like this
// <form action="register" method="POST" enctype="multipart/form-data"></form>
// -------------------------------------------------------------------------- //
// module.exports = middleware;