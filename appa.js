const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        const db = client.db('testDB');
        const col = db.collection('users');

        // Insert sample data
        await col.insertMany([
            { name: 'A', age: 20 },
            { name: 'B', age: 25 },
            { name: 'C', age: 22 },
            { name: 'D', age: 30 }
        ]);

        // COUNT
        const count = await col.countDocuments();
        console.log('Total documents:', count);

        // SORT (age ascending)
        const sorted = await col.find().sort({ age: 1 }).toArray();
        console.log('Sorted by age:', sorted);

        // LIMIT (first 2)
        const limited = await col.find().limit(2).toArray();
        console.log('Limit 2:', limited);

        // SKIP (skip first 2)
        const skipped = await col.find().skip(2).toArray();
        console.log('Skip 2:', skipped);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main();
