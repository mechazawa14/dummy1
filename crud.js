const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        const db = client.db('testDB');
        const col = db.collection('users');

        // ===== CREATE =====
        const createResult = await col.insertOne({ name: 'Raheem', age: 21 });
        console.log('Created user:', createResult.insertedId);

        // ===== READ =====
        let users = await col.find({}).toArray();
        console.log('All users after create:', users);

        // ===== UPDATE =====
        await col.updateOne({ name: 'Raheem' }, { $set: { age: 22 } });
        users = await col.find({}).toArray();
        console.log('All users after update:', users);

        // ===== DELETE =====
        await col.deleteOne({ name: 'Raheem' });
        users = await col.find({}).toArray();
        console.log('All users after delete:', users);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main();
