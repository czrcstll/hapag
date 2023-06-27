import * as SQLite from 'expo-sqlite';

const profileInsert = async (values, db) => {
    const db = SQLite.openDatabase("Hapag.db");

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO Profiles (Account_Id, Profile_Name, Profile_Gender, Profile_Birthdate, Profile_Height, Profile_Weight, Profile_Physical_Factor,
                    Profile_BMI, Profile_Calories, Profile_Main, Profile_Restricted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10]],
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


const profileSelectQuery = (db) => {
    const db = SQLite.openDatabase("Hapag.db");

    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Profiles',
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

const profileInsertQuery = async (values, db) => {
    const db = SQLite.openDatabase("Hapag.db");

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO Profiles (Account_Id, Profile_Name, Profile_Gender, Profile_Birthdate, Profile_Height, Profile_Weight, Profile_Physical_Factor,
                    Profile_BMI, Profile_Calories, Profile_Main, Profile_Restricted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10]],
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

const profileDeleteQuery = async (id, db) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM Profiles WHERE Profile_Id = ?`,
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

const profileUpdateQuery = async (id, db, data) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `UPDATE Profiles SET 
            Profile_Name = ?, 
            Profile_Gender = ?,
            Profile_Birthdate = ?,
            Profile_Height = ?,
            Profile_Weight = ?,
            Profile_Physical_Factor = ?,
            Profile_BMI = ?,
            Profile_Calories = ?,
            Profile_Main = ?,
            Profile_Restricted = ?
            WHERE Profile_Id = ?`,
            [data.name, data.gender, data.birthdate, data.height, data.weight, data.physical, data.bmi, data.calories, data.main, data.restricted, id],
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
    profileSelectQuery,
    profileInsertQuery,
    profileDeleteQuery,
    profileUpdateQuery
};