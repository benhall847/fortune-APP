const db = require('./data');

class Cars {
    constructor(id, make, model, year){
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
    };
    static getAll(){
        return db.any(`select * from cars`)
            .then((carsDataArray)=>{
                return carsDataArray.map((data)=>{
                    return new Cars(data.id, data.make, data.model, data.year);
                });
            });
    };

    static getByMake(make){
        return db.any(`select * from cars where make=$1`,[make])
            .then((carsDataArray)=>{
                return carsDataArray.map((data)=>{
                    return new Cars(data.id, data.make, data.model, data.year);
                });
            });
    };
};

module.exports = Cars