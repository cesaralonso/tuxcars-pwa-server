
import * as _ from 'lodash';
//import {LESSONS} from "./database-data";


const LESSONS = require("./database-data");


class InMemoryDatabase {

    readAllLessons() {
        return _.values(LESSONS);
    }

}



const db = new InMemoryDatabase();
module.exports = db;


