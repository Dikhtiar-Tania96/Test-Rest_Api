import mongoose from 'mongoose';

async function initDBConnection() {
    try {
     await mongoose.connect('mongodb+srv://student:qwerty12345@cluster123.zavoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster123')
     console.log('Database connection  successfully');
    } catch (error) {
        console.error(error)
        throw error
    }
}
export {initDBConnection}
