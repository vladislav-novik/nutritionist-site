const contactFormFields: FormInputValidation[] = [
    { field: 'name', required: true },
    { field: 'feedbackWay', required: true },
    { field: 'feedbackWayData', required: true },
    { field: 'message', required: true },
];

export async function withValidate(action: (data: FormData) => any) {
    return (formData: FormData) => {
        'use server';

        const validationResult = verifyData(formData);

        if (!validationResult.isValid) {
            return {
                success: false,
                errors: validationResult.errors,
            }
        }

        // const data = process(formData);
        return action(formData);
    }
}

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