
// import {db} from "./database";


const db = require('./database');


module.exports =  function readAllLessons(req, res) {

    res.status(200).json({lessons:db.readAllLessons()});

}