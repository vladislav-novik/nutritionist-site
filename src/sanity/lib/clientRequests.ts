import { CustomerRequest } from '@/types/customerRequest'
import client from './client'

export const sendCustomerRequest = async (data: CustomerRequest) => {
    const response = await client.create({
        _type: 'customerRequest',
        ...data,
    }, {
        token: process.env.NEXT_PUBLIC_SANITY_EDITOR_TOKEN,
    });

    console.log(response);
    return response;
}