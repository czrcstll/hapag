import database from '../database/Database';

const db = database.openDatabase();

const ingredientSelectQuery = (db) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Ingredients',
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

const ingredientInsertQuery = async (values, db) => {
return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO Ingredients (Ingredient_Type_Id, Ingredient_Quantity, Ingredient_Calories, Ingredient_Fats, Ingredient_Carbohydrates, Ingredient_Protein) VALUES (?, ?, ?, ?, ?, ?)`,
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

const ingredientDeleteQuery = async (id, db) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM Ingredients WHERE Ingredient_Id = ?`,
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

const ingredientUpdateQuery = async (id, db, data) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `UPDATE Ingredients SET 
            Ingredient_Type_Id = ?,
            Ingredient_Quantity = ?,
            Ingredient_Calories = ?,
            Ingredient_Fats = ?,
            Ingredient_Carbohydrates = ?,
            Ingredient_Protein = ?,
            WHERE Ingredient_Id = ?`,
            [data.type, data.quantity, data.calories, data.fats, data.carbohydrates, data.protein, id],
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
    ingredientSelectQuery,
    ingredientInsertQuery,
    ingredientDeleteQuery,
    ingredientUpdateQuery
};