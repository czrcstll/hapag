
export const getBMI = (height, weight) => {
    height = height / 100;
    return weight / (height * height);
};

export const getBMIClass = (bmi) => {
    if (bmi < 18.5) {
        return 1; // Underweight
    }
    else if (bmi < 25) {
        return 2; // Normal
    }
    else if (bmi < 30) {
        return 3; // Pre-obese
    }
    else if (bmi < 35) {
        return 4; // Obese class I
    }
    else if (bmi < 40) {
        return 5; // Obese class II
    }
    else {
        return 6; // Obese class III
    }
};

export const getDBW = (height, age) => {
    if (age < 19) {
        return (age * 2) + 8;
    }
    else {
        return (height - 100) - ((height - 100) * 0.10);
    }
};

export const getTimeFrame = (weight, dbw, prefWeightChangeAmt) => {
    const NeededWeightLoss = weight - dbw;

    if (prefWeightChangeAmt === 1) {
        // 1 pound per week
        return NeededWeightLoss / 0.453592;
    }
    else {
        // 2 pounds per week
        return NeededWeightLoss / 0.907185;
    }
};

export const getTER = (weight, gender, age, bmiClass, dbw, activityLevel, prefWeightChangeAmt) => {
    if (age < 4) {
        return roundTo(dbw * 80, 50);
    }
    if (age < 7) {
        return roundTo(dbw * 75, 50);
    }
    if (age < 10) {
        return roundTo(dbw * 65, 50);
    }
    if (age < 13 && gender === 1) {
        return roundTo(dbw * 65, 50);
    }
    if (age < 13) {
        return roundTo(dbw * 55, 50);
    }
    if (age < 16 && gender === 1) {
        return roundTo(dbw * 55, 50);
    }
    if (age < 16) {
        return roundTo(dbw * 45, 50);
    }
    if (age < 19 && gender === 1) {
        return roundTo(dbw * 50, 50);
    }
    if (age < 19) {
        return roundTo(dbw * 40, 50);
    }

    const activityFactor = getActivityFactor(gender, activityLevel);
    let totalEnergyReq;

    if (bmiClass === 1) {
        // Underweight
        totalEnergyReq = weight * activityFactor + (prefWeightChangeAmt === 1 ? 500 : 1000);
    } else if (bmiClass === 2) {
        // Normal
        totalEnergyReq = dbw * activityFactor;
    } else {
        // Overweight
        totalEnergyReq = weight * activityFactor - (prefWeightChangeAmt === 1 ? 500 : 1000);
    }

    return roundTo(totalEnergyReq, 50);
}

const getActivityFactor = (gender, activityLevel) => {
    if (gender === 1) {
        // Male
        switch (activityLevel) {
            case 1:
                return 35;
            case 2:
                return 40;
            case 3:
                return 45;
            case 4:
                return 50;
        }
    }
    else {
        // Female
        switch (activityLevel) {
            case 1:
                return 30;
            case 2:
                return 35;
            case 3:
                return 40;
        }
    }
    return 0;
}

export const getCHO = (totalEnergyReq, age) => {
    let cho = totalEnergyReq * 0.65;
    if (age < 19) {
        cho *= 0.60;
    }
    return roundTo(cho / 4, 5);
}

export const getPRO = (totalEnergyReq, age) => {
    let cho = totalEnergyReq * 0.15;
    if (age < 19) {
        cho *= 0.1;
    }
    return roundTo(cho / 4, 5);
}

export const getFAT = (totalEnergyReq, age) => {
    let cho = totalEnergyReq * 0.2;
    if (age < 19) {
        cho *= 0.3;
    }
    return roundTo(cho / 9, 5);
}

const Calculations = {
    getBMI,
    getBMIClass,
    getDBW,
    getTimeFrame,
    getTER,
    getCHO,
    getPRO,
    getFAT,
};

export default Calculations;

//DEBUGGING
"use client";

import { createContext, useState } from 'react'

export const MenuContext = createContext();

const MenuContextProvider = ({children}) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        console.log('toggle clicked');
        setOpen((prev) => !prev);
    };

    return <MenuContextProvider value = {{open, toggle}}>{children}</MenuContextProvider>
};

export default MenuContextProvider;
