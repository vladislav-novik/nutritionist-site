"use server"

import { sendCustomerRequest } from "@/sanity/lib/clientRequests";
import { CustomerRequest } from "@/types/customerRequest";

export async function submitRequest(data: FormData) {
    console.log('handleSubmit', data)

    const validationResult = verifyData(data);

    if (!validationResult.isValid) {
        return {
            success: false,
            status: "Validation error",
            errors: validationResult.errors,
        }
    }

    const customerRequest: CustomerRequest = {
        name: (data.get('name') as string).trim(),
        feedbackWay: (data.get('feedbackWay') as string).trim(),
        feedbackWayData: (data.get('feedbackWayData') as string).trim().toLowerCase(),
        message: (data.get('message') as string).trim(),
    }

    const result = await sendCustomerRequest(customerRequest);

    return result._createdAt ? { success: true } : { success: false, errors: [{ field: 'sanity', value: '', isValid: false, validationMessage: 'Error while sending data' }] };
}


const contactFormFields: FormInputValidation[] = [
    { field: 'name', required: true },
    { field: 'feedbackWay', required: true },
    { field: 'feedbackWayData', required: true },
    { field: 'message', required: true },
];

function verifyData(formData: FormData): { isValid: boolean, errors: ValidationResult<string>[] } {
    const validationResut: ValidationResult<string>[] = [];

    contactFormFields.forEach(field => {
        const value = formData.get(field.field);

        if (field.required && !required<string>(value?.valueOf() as string)) {
            validationResut.push({
                field: field.field,
                value: value?.valueOf() as string,
                isValid: false,
                validationMessage: 'Required field',
            });
        }
    });

    return validationResut.length === 0 ? { isValid: true, errors: [] } : { isValid: false, errors: validationResut };
}

function required<T>(value: T): boolean {
    if (typeof value === 'string') {
        return value.trim().length > 0;
    }

    if (typeof value === 'number') {
        return value > 0;
    }

    return false;
}

type FormInputValidation = {
    field: string;
    required: boolean;
}

type ValidationResult<T> = {
    field: string;
    value: T;
    isValid: boolean;
    validationMessage: string;
}