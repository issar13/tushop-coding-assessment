import { validateIsNumber, validateLength, validateNumberLessThan100, validatePartsLength, validatePositiveNumber, validateProblemNumberRange, validateTimeRange, validateTimesOrder } from "./helpers";
import { ValidationResponse } from "./interface";
    
    
    
    export const validateTime = (time: string): ValidationResponse => {
        const parsedNumber = parseInt(time);
    
        let ValidationResponse = validateIsNumber(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        ValidationResponse = validateLength(time);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        ValidationResponse = validateTimeRange(time);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        ValidationResponse = validatePositiveNumber(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        return { isValid: true };
    };
    
    export const validateProfit = (profit: string): ValidationResponse => {
        const parsedNumber = parseInt(profit);
    
        let ValidationResponse = validateIsNumber(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        ValidationResponse = validatePositiveNumber(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        return { isValid: true };
    };
    
    export const validateJobCount = (jobCount: string): ValidationResponse => {
        const parsedNumber = parseInt(jobCount);
    
        let ValidationResponse = validateIsNumber(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        ValidationResponse = validatePositiveNumber(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        ValidationResponse = validateNumberLessThan100(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        return { isValid: true };
    };
    
    export const validateProblemNumber = (jobCount: string): ValidationResponse => {
        const parsedNumber = parseInt(jobCount);
    
        let ValidationResponse = validateIsNumber(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        ValidationResponse = validateProblemNumberRange(parsedNumber);
        if (!ValidationResponse.isValid) return ValidationResponse;
    
        return { isValid: true };
    };
    export const validateJobDetails = (input: string): ValidationResponse => {
        const parts = input.split(' ');
        
        const lengthValidation = validatePartsLength(parts);
        if (!lengthValidation.isValid) return lengthValidation;
    
        const [startTimeStr, endTimeStr, profitStr] = parts;
        
        const startTimeValidation = validateTime(startTimeStr)
        if (!startTimeValidation.isValid) return startTimeValidation
        
        const endTimeValidation = validateTime(endTimeStr);
        if (!endTimeValidation.isValid) return endTimeValidation
    
        const profitValidation = validateProfit(profitStr);
        if (!profitValidation.isValid) return profitValidation;
    
        const timesOrderValidation = validateTimesOrder(parseInt(startTimeStr), parseInt(endTimeStr));
        if (!timesOrderValidation.isValid) return timesOrderValidation;
    
        return { isValid: true, message: '' };
    };