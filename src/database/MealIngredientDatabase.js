import database from './Database';

const db = database.openDatabase();

const mealIngredientsSelectQuery = (db) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (transaction) => {
                transaction.executeSql(
                    'SELECT * FROM Meal_Ingredients',
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

const mealIngredientsInsertQuery = async (values, db) => {
return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO Meal_Ingredients (Meal_Id, Ingredient_Id, Meal_Ingredient_Serving) VALUES (?, ?, ?)`,
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

const mealIngredientsDeleteQuery = async (id, db) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM Meal_Ingredients WHERE Meal_Ingredients_Id = ?`,
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

const mealIngredientsUpdateQuery = async (id, db, data) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
        transaction.executeSql(
            `UPDATE Meal_Ingredients SET 
            Meal_Id = ?,
            Ingredient_Id = ?,
            Meal_Ingredient_Serving = ?
            WHERE Meal_Ingredients_Id = ?`,
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
    mealIngredientsSelectQuery,
    mealIngredientsInsertQuery,
    mealIngredientsDeleteQuery,
    mealIngredientsUpdateQuery
};