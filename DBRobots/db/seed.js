const client = require('./client');

const createTables = () => {
    try {

    } catch (error) {
        console.error(error);
    }
}


const syncAndSeed = async () => {
    await client.connect();
    console.log('it is funcitoning')

    createTables();

    client.end();
}
syncAndSeed();
