
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

export const getDBW = (height) => {
  return (height - 100) - ((height - 100) * 0.10);
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

export const getTER = (weight, gender, bmiClass, dbw, activityLevel, prefWeightChangeAmt) => {
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

export const getCHO = (totalEnergyReq) => {
  return roundTo(totalEnergyReq * 0.65, 5);
}

export const getPRO = (totalEnergyReq) => {
  return roundTo(totalEnergyReq * 0.15, 5);
}

export const getFAT = (totalEnergyReq) => {
  return roundTo(totalEnergyReq * 0.2, 5);
}

export const getChildDBW = (age) => {
  return (age * 2) + 8;
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
