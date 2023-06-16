import database from '../database/Database';

const db = database.openDatabase();

const profileRestrictionSelectQuery = (db) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Profile_Restrictions',
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

const profileRestrictionInsertQuery = async (values, db) => {
return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO Profile_Restrictions (Profile_Id, Comorbidity_Id, Allergen_Id) VALUES (?, ?, ?)`,
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

const profileRestrictionDeleteQuery = async (id, db) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM Profile_Restrictions WHERE Profile_Resctriction_Id = ?`,
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

const profileRestrictionUpdateQuery = async (id, db, data) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `UPDATE Profile_Restrictions SET 
            Profile_Id = ?,
            Comorbidity_Id,
            Allergen_Id
            WHERE Profile_Resctriction_Id = ?`,
            [data.profile, data.comorbidity, data.allergen, id],
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
    profileRestrictionSelectQuery,
    profileRestrictionInsertQuery,
    profileRestrictionDeleteQuery,
    profileRestrictionUpdateQuery
};