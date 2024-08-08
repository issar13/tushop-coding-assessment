import { ValidationResponse } from "./interface";

export const validateIsNumber = (parsedNumber: number): ValidationResponse => {
    if (isNaN(parsedNumber)) {
        return { isValid: false, message: '🚫 Please enter numbers only...' };
    }
    return { isValid: true };
};

export const validateLength = (time: string): ValidationResponse => {
    if (time.length !== 4) {
        return { isValid: false, message: '⛔️ Invalid Time Format' };
    }
    return { isValid: true };
};

export const validateTimeRange = (time: string): ValidationResponse => {
    if (time < '0900' || time > '2359') {
        return {
            isValid: false,
            message: '⚠️ Please enter time between 0900 and 2359...',
        };
    }
    return { isValid: true };
};

export const validatePositiveNumber = (parsedNumber: number): ValidationResponse => {
    if (parsedNumber < 1) {
        return {
            isValid: false,
            message: '⚠️ Please enter a number greater than 0...',
        };
    }
    return { isValid: true };
};

export const validateNumberLessThan100 = (parsedNumber: number): ValidationResponse => {
    if (parsedNumber > 100) {
        return {
            isValid: false,
            message: '⚠️ Please enter a number less than 100...',
        };
    }
    return { isValid: true };
};

export const validateAgainstGoodies= (parsedNumber: number, goodies?:number): ValidationResponse => {
    if (parsedNumber > goodies!) {
        return {
            isValid: false,
            message: `⚠️ Please enter employee count that is not more than ${goodies}...`,
        };
    }
    return { isValid: true };
};

export const validateNumberLessThan1 = (parsedNumber: number): ValidationResponse => {
    if (parsedNumber < 1) {
        return {
            isValid: false,
            message: '⚠️ Please enter a number more than 1...',
        };
    }
    return { isValid: true };
};

export const validateProblemNumberRange = (parsedNumber: number): ValidationResponse => {
    if (parsedNumber !== 1 && parsedNumber !== 2) {
        return {
            isValid: false,
            message: '⚠️ Please enter a number between 1 and 2...',
        };
    }
    return { isValid: true };
};



export const validatePartsLength = (parts: string[]): ValidationResponse => {
    if (parts.length !== 3) {
        return { isValid: false, message: '⚠️ Please enter exactly three values: start time, end time, and profit.' };
    }
    return { isValid: true };
};

export const validateTimesOrder = (startTime: number, endTime: number): ValidationResponse => {
    if (startTime >= endTime) {
        return { isValid: false, message: '⚠️ End time must be after the start time.' };
    }
    return { isValid: true };
};

export const validatePositiveProfit = (profit: number): ValidationResponse => {
    if (profit <= 0) {
        return { isValid: false, message: '⚠️ Profit must be a positive number.' };
    }
    return { isValid: true };
};
