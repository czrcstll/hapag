import * as SQLite from 'expo-sqlite';

// Function to open the local database
// const openDatabase = () => {
//   const db = SQLite.openDatabase('Hapag.db');
//   return db;
// };

// Function to create or open the database table
const createTables = () => {
  const db = SQLite.openDatabase('Hapag.db');
  return new Promise((resolve, reject) => {
    db.transaction(
      (transaction) => {

        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Accounts(
            Account_Id INTEGER PRIMARY KEY,
            Account_Email NVARCHAR(100) NOT NULL,
            Account_Fullname NVARCHAR(200) NOT NULL,
            Account_Password NVARCHAR(100) NOT NULL,
            Account_Mobile INTEGER NOT NULL,
            Account_Verified BOOLEAN NOT NULL
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );

        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Profiles(
            Profile_Id INTEGER PRIMARY KEY,
            Account_Id INTEGER,
            Profile_Name NVARCHAR(200) NOT NULL,
            Profile_Gender NVARCHAR(50),
            Profile_Birthdate DATE,
            Profile_Height INTEGER,
            Profile_Weight INTEGER,
            Profile_Physical_Factor NVARCHAR(100),
            Profile_BMI INTEGER,
            Profile_Calories INTEGER,
            Profile_Main BOOLEAN NOT NULL,
            Profile_Restricted BOOLEAN NOT NULL,
            FOREIGN KEY(Account_Id) REFERENCES Accounts(Account_Id)
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );
        
        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Comorbidities(
            Comorbidity_Id INTEGER PRIMARY KEY,
            Comorbidity_Type NVARCHAR(200) NOT NULL
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );

        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Allergens(
            Allergen_Id INTEGER PRIMARY KEY,
            Allergen_Type NVARCHAR(200) NOT NULL
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );

        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Profile_Restrictions(
            Profile_Resctriction_Id INTEGER PRIMARY KEY,
            Profile_Id INTEGER,
            Comorbidity_Id INTEGER,
            Allergen_Id INTEGER,
            FOREIGN KEY(Profile_Id) REFERENCES Profiles(Profile_Id),
            FOREIGN KEY(Comorbidity_Id) REFERENCES Comorbidities(Comorbidity_Id),
            FOREIGN KEY(Allergen_Id) REFERENCES Allergens(Allergen_Id)
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );

        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Ingredient_Types(
            Ingredient_Type_Id INTEGER PRIMARY KEY,
            Ingredient_Type_Group NVARCHAR(200) NOT NULL
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );


        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Restrictions(
            Restriction_Id INTEGER PRIMARY KEY,
            Comorbidity_Id INTEGER,
            Allergen_Id INTEGER,
            Ingredient_Type_Id INTEGER,
            FOREIGN KEY(Comorbidity_Id) REFERENCES Comorbidities(Comorbidity_Id),
            FOREIGN KEY(Allergen_Id) REFERENCES Allergens(Allergen_Id),
            FOREIGN KEY(Ingredient_Type_Id) REFERENCES Ingredient_Types(Ingredient_Type_Id)
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );

        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Ingredients(
            Ingredient_Id INTEGER PRIMARY KEY,
            Ingredient_Type_Id INTEGER,
            Ingredient_Name NVARCHAR(200) NOT NULL,
            Ingredient_Energy INTEGER NOT NULL,
            Ingredient_Carbohydrate INTEGER NOT NULL,
            Ingredient_Protein INTEGER NOT NULL,
            Ingredient_Fat INTEGER NOT NULL,
            Ingredient_Cholesterol INTEGER NOT NULL,
            Ingredient_SaturatedFat INTEGER NOT NULL,
            Ingredient_MonosaturatedFat INTEGER NOT NULL,
            Ingredient_PolyunsaturatedFat INTEGER NOT NULL,
            FOREIGN KEY(Ingredient_Type_Id) REFERENCES Ingredient_Types(Ingredient_Type_Id)
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );

        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Ingredient_Prices(
            Ingredient_Prices_Id INTEGER PRIMARY KEY,
            Ingredient_Id INTEGER,
            IngredientPrices_Quantity INTEGER NOT NULL,
            IngredientPrices_Unit INTEGER NOT NULL,
            IngredientPrices_Prices INTEGER NOT NULL,
            IngredientPrices_PriceUnit INTEGER NOT NULL,
            IngredientPrices_Measurement INTEGER NOT NULL,
            FOREIGN KEY(Ingredient_Id) REFERENCES Ingredients(Ingredient_Id)
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );

        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS Meal_Ingredients(
            Meal_Ingredients_Id	INTEGER PRIMARY KEY,
            Meal_Id INTEGER,
            Ingredient_Id INTEGER,
            Meal_Ingredient_Serving INTEGER NOT NULL,
            FOREIGN KEY(Ingredient_Id) REFERENCES Ingredients(Ingredient_Id)
            FOREIGN KEY(Meal_Id) REFERENCES Meals(Meal_Id)
          );`,
          [],
          () => {
            resolve('Database opened or created successfully.');
          },
          (_, error) => {
            reject(new Error(`Failed to create database tables: ${error.message}`));
          }
        );
      },
      (error) => {
        reject(new Error(`Failed to create database tables: ${error.message}`));
      }
    );
  });
};

const getAllTables = () => {
  const db = SQLite.openDatabase('Hapag.db');
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';",
        [],
        (_, result) => {
          const tables = [];
          for (let i = 0; i < result.rows.length; i++) {
            tables.push(result.rows.item(i).name);
          }
          resolve(tables);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}

const dropAllTables = () => {
  const db = SQLite.openDatabase('Hapag.db');
  return new Promise((resolve, reject) => {

    db.transaction(
      (transaction) => {

    transaction.executeSql(
      `DROP TABLE IF EXISTS Accounts;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Profiles;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Comorbidities;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Allergens;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Profile_Restrictions;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Ingredient_Types;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Restrictions;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Ingredients;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Ingredient_Prices;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Meals;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    );

    transaction.executeSql(
      `DROP TABLE IF EXISTS Meal_Ingredients;`,
      [],
      () => {
        resolve('Database deleted successfully.');
      },
      (_, error) => {
        reject(new Error(`Failed to delete table: ${error.message}`));
      }
    )
  });
  });
};


export default {
  createTables,
  getAllTables,
  dropAllTables
};