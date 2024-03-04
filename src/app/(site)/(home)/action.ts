"use server"

import { sendCustomerRequest } from "@/sanity/lib/clientRequests"
import { CustomerRequest } from "@/types/customerRequest"
import { Resend } from 'resend'
import EmailTemplate from '@/components/email-templates/default';

export async function submitRequest(data: FormData) {
  console.log('handleSubmit', data)

  const validationResult = verifyData(data)

  if (!validationResult.isValid) {
    return {
      success: false,
      status: "Validation error",
      errors: validationResult.errors,
    }
  }

  const customerRequest: CustomerRequest = {
    firstName: (data.get('firstName') as string).trim(),
    howToReach: (data.get('howToReach') as string).trim(),
    message: (data.get('message') as string).trim(),
  }

  const sendEmailResult = await sendEmail(customerRequest.firstName);
  console.log('sendEmailResult', sendEmailResult)

  const result = await sendCustomerRequest(customerRequest)

  return result._createdAt ? { success: true } : { success: false, errors: [{ field: 'sanity', value: '', isValid: false, validationMessage: 'Error while sending data' }] }
}


async function sendEmail(firstName: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['vladislavnovik95@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName }),
    });

    return data;
  } catch (error) {
    return error;
  }
}

const contactFormFields: FormInputValidation[] = [
  { field: 'firstName', required: true },
  { field: 'howToReach', required: true },
  { field: 'message', required: true },
]

function verifyData(formData: FormData): { isValid: boolean, errors: ValidationResult<string>[] } {
  const validationResut: ValidationResult<string>[] = []

  contactFormFields.forEach(field => {
    const value = formData.get(field.field)

    if (field.required && !required<string>(value?.valueOf() as string)) {
      validationResut.push({
        field: field.field,
        value: value?.valueOf() as string,
        isValid: false,
        validationMessage: 'Required field',
      })
    }
  })

  return validationResut.length === 0 ? { isValid: true, errors: [] } : { isValid: false, errors: validationResut }
}

function required<T>(value: T): boolean {
  if (typeof value === 'string') {
    return value.trim().length > 0
  }

  if (typeof value === 'number') {
    return value > 0
  }

  return false
}

type FormInputValidation = {
  field: string
  required: boolean
}

type ValidationResult<T> = {
  field: string
  value: T
  isValid: boolean
  validationMessage: string
}