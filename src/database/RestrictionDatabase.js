import database from '../database/Database';

const db = database.openDatabase();

const RestrictionSelectQuery = (db) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Restrictions',
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

const RestrictionInsertQuery = async (values, db) => {
return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO Restrictions (Comorbidity_Id, Allergen_Id, Ingredient_Type_Id) VALUES (?, ?, ?)`,
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

const RestrictionDeleteQuery = async (id, db) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM Restrictions WHERE Restriction_Id = ?`,
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

const RestrictionUpdateQuery = async (id, db, data) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `UPDATE Restrictions SET 
            Comorbidity_Id = ?,
            Allergen_Id = ?,
            Ingredient_Type_Id = ?
            WHERE Restriction_Id = ?`,
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
    RestrictionSelectQuery,
    RestrictionInsertQuery,
    RestrictionDeleteQuery,
    RestrictionUpdateQuery
};