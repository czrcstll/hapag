import database from '../database/Database';

const db = database.openDatabase();

const accountSelectQuery = (db) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Accounts',
                    [],
                    (_, result) => {
                    resolve(result.rows._array);
                    },
                    (_, error) => {
                    reject(new Error(`Failed to execute SELECT query: ${error.message}`));
                    }
                );
            },
        (error) => {
            reject(new Error(`Failed to execute SELECT query: ${error.message}`));
        });
    });
};

// Use this as placeholder method to create actual insert query functions depending on which columns should be added
const accountInsertQuery = async (values, db) => {
return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO Accounts (Account_Id, Account_Email, Account_Fullname, Account_Password, Account_Mobile, Account_Verified) VALUES (?, ?, ?, ?, ?, ?)',
            [values[0], values[1], values[2], values[3], values[4], values[5]],
            (_, { rowsAffected }) => {
            if (rowsAffected > 0) {
                resolve('Inserted Successfully');
            } else {
                reject(new Error('Failed to insert'));
            }
            },
            (_, error) => {
            reject(error);
            }
        );
        });
    });
};

export default {
    accountSelectQuery,
    accountInsertQuery
};