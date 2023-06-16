-- Accounts_Create

CREATE TABLE IF NOT EXISTS Accounts(
	Account_Id INTEGER PRIMARY KEY,
	Account_Email NVARCHAR(100) NOT NULL,
	Account_Fullname NVARCHAR(200) NOT NULL,
	Account_Password NVARCHAR(100) NOT NULL,
	Account_Mobile INTEGER NOT NULL,
	Account_Verified BOOLEAN NOT NULL
);

-- Profiles_Create TO-DO Make Macros for each on a separate table

CREATE TABLE IF NOT EXISTS Profiles(
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
);

-- Comorbities_Create

CREATE TABLE IF NOT EXISTS Comorbidities(
	Comorbidity_Id INTEGER PRIMARY KEY,
	Comorbidity_Type NVARCHAR(200) NOT NULL
);

-- Allergens_Create

CREATE TABLE IF NOT EXISTS Allergens(
	Allergen_Id INTEGER PRIMARY KEY,
	Allergen_Type NVARCHAR(200) NOT NULL
);


-- Profile_Restrictions_Create

CREATE TABLE IF NOT EXISTS Profile_Restrictions(
	Profile_Resctriction_Id INTEGER PRIMARY KEY,
	Profile_Id INTEGER,
	Comorbidity_Id INTEGER,
	Allergen_Id INTEGER,
	FOREIGN KEY(Profile_Id) REFERENCES Profiles(Profile_Id),
	FOREIGN KEY(Comorbidity_Id) REFERENCES Comorbidities(Comorbidity_Id),
	FOREIGN KEY(Allergen_Id) REFERENCES Allergens(Allergen_Id)
);

-- Ingredient_Types_Create

CREATE TABLE IF NOT EXISTS Ingredient_Types(
	Ingredient_Type_Id INTEGER PRIMARY KEY,
	Ingredient_Type_Group NVARCHAR(200) NOT NULL
);

-- Restrictions_Create

CREATE TABLE IF NOT EXISTS Restrictions(
	Restriction_Id INTEGER PRIMARY KEY,
	Comorbidity_Id INTEGER,
	Allergen_Id INTEGER,
	Ingredient_Type_Id INTEGER,
	FOREIGN KEY(Comorbidity_Id) REFERENCES Comorbidities(Comorbidity_Id),
	FOREIGN KEY(Allergen_Id) REFERENCES Allergens(Allergen_Id),
	FOREIGN KEY(Ingredient_Type_Id) REFERENCES Ingredient_Types(Ingredient_Type_Id)
);

-- Ingredients_Create

CREATE TABLE IF NOT EXISTS Ingredients(
	Ingredient_Id INTEGER PRIMARY KEY,
	Ingredient_Type_Id INTEGER,
	Ingredient_Energy INTEGER NOT NULL,
	Ingredient_Carbohydrate INTEGER NOT NULL,
	Ingredient_Protein INTEGER NOT NULL,
	Ingredient_Fat INTEGER NOT NULL,
	Ingredient_Cholesterol INTEGER NOT NULL,
	Ingredient_SaturatedFat INTEGER NOT NULL,
  	Ingredient_MonosaturatedFat INTEGER NOT NULL,
 	Ingredient_PolyunsaturatedFat INTEGER NOT NULL,
	FOREIGN KEY(Ingredient_Type_Id) REFERENCES Ingredient_Types(Ingredient_Type_Id)
);

-- Ingredients_Prices

CREATE TABLE IF NOT EXISTS Ingredient_Prices(
	Ingredient_Prices_Id INTEGER PRIMARY KEY,
	Ingredient_Id INTEGER,
	IngredientPrices_Quantity INTEGER NOT NULL,
	IngredientPrices_Unit INTEGER NOT NULL,
	IngredientPrices_Prices INTEGER NOT NULL,
	IngredientPrices_PriceUnit INTEGER NOT NULL,
	IngredientPrices_Measurement INTEGER NOT NULL,
	FOREIGN KEY(Ingredient_Id) REFERENCES Ingredients(Ingredient_Id)
);

-- Meals_Create

CREATE TABLE IF NOT EXISTS Meals(
	Meal_Id INTEGER PRIMARY KEY,
	Meal_Name NVARCHAR(200) NOT NULL,
	Meal_Calories INTEGER NOT NULL,
	Meal_Instruction TEXT NOT NULL
);

-- Meal_Ingredients_Create

CREATE TABLE IF NOT EXISTS Meal_Ingredients(
	Meal_Ingredients_Id	INTEGER PRIMARY KEY,
	Meal_Id INTEGER,
	Ingredient_Id INTEGER,
	Meal_Ingredient_Serving INTEGER NOT NULL,
	FOREIGN KEY(Ingredient_Id) REFERENCES Ingredients(Ingredient_Id)
	FOREIGN KEY(Meal_Id) REFERENCES Meals(Meal_Id)
);

-- Delete Tables

PRAGMA foreign_keys = OFF;
DROP TABLE IF EXISTS Table_Name;
PRAGMA foreign_keys = ON;

-- Remove ForeignKeys

UPDATE Table_Name
SET Column_Name = NULL;