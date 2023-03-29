const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
<<<<<<< HEAD
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true, 
=======
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
>>>>>>> 34479fa30d37f93b981dc087c1668d310b928c9a
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
<<<<<<< HEAD
        
=======

>>>>>>> 34479fa30d37f93b981dc087c1668d310b928c9a
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}


module.exports = {
    dbConnection
}