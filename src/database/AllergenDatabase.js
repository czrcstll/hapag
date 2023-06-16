import database from '../database/Database';

const db = database.openDatabase();

const allergenSelectQuery = (db) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Allergens',
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

const allergenInsertQuery = async (values, db) => {
return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO Allergens (Allergen_Type) VALUES (?)`,
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

const allergenDeleteQuery = async (id, db) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM Allergens WHERE Allergen_Id = ?`,
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

const allergenUpdateQuery = async (id, db, data) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `UPDATE Allergens SET 
            Allergen_Type = ?
            WHERE Allergen_Id = ?`,
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
    allergenSelectQuery,
    allergenInsertQuery,
    allergenDeleteQuery,
    allergenUpdateQuery
};