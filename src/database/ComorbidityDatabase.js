import database from './Database';

const db = database.openDatabase();

const comorbiditiesSelectQuery = (db) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Comorbidities',
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

const comorbiditiesInsertQuery = async (values, db) => {
return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO Comorbidities (Comorbidity_Type) VALUES (?)`,
            [values[0]],
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

const comorbiditiesDeleteQuery = async (id, db) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM Comorbidities WHERE Comorbidity_Id = ?`,
            [id],
            (_, result) => {
            resolve(result);
            },
            (error) => {
            reject(error);
            }
        );
        });
    });
};

const comorbiditiesUpdateQuery = async (id, db, data) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `UPDATE Comorbidities SET 
            Comorbidity_Type = ?
            WHERE Comorbidity_Id = ?`,
            [data.type, id],
            (_, result) => {
            resolve(result);
            },
            (error) => {
            reject(error);
            }
        );
        });
    });
};

export default {
    comorbiditiesSelectQuery,
    comorbiditiesInsertQuery,
    comorbiditiesDeleteQuery,
    comorbiditiesUpdateQuery
};