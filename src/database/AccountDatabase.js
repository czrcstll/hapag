import * as SQLite from 'expo-sqlite';

const accountInsert = async (values) => {
    const db = SQLite.openDatabase("Hapag.db");
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO Accounts (Account_Email, Account_Fullname, Account_Password, Account_Mobile, Account_Verified) VALUES (?, ?, ?, ?, false)',
                [values[0], values[1], values[2], values[3]],
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

const accountSelectOneIdByEmail = (email) => {
    const db = SQLite.openDatabase("Hapag.db");
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT Account_Id FROM Accounts WHERE Account_Email = "?";',
                    [email],
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

const accountSelectOneEmail = (email) => {
    const db = SQLite.openDatabase("Hapag.db");
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT Account_Id FROM Accounts WHERE Account_Email = "?";',
                    [email],
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


const accountSelectQuery = () => {
    const db = SQLite.openDatabase("Hapag.db");
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Accounts;',
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
            'INSERT INTO Accounts (Account_Email, Account_Fullname, Account_Password, Account_Mobile, Account_Verified) VALUES (?, ?, ?, ?, ?)',
            [values[0], values[1], values[2], values[3], values[4]],
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

const accountDeleteQuery = async (id, db) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM Accounts WHERE Account_Id = ?`,
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

const accountUpdateQuery = async (id, db, data) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `UPDATE Accounts SET 
            Account_Email = ?, 
            Account_Fullname = ?,
            Account_Password = ?,
            Account_Mobile = ?,
            Account_Verified = ?
            WHERE Account_Id = ?`,
            [data.email, data.name, data.pass, data.mobile, data.verified, id],
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


export {
    accountInsert,
    accountSelectOneIdByEmail,
    accountSelectQuery,
    accountInsertQuery,
    accountDeleteQuery,
    accountUpdateQuery
};