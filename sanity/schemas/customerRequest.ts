import { defineType } from "sanity";
import { MdOutlineMessage } from "react-icons/md";

export default defineType({
    name: 'customerRequest',
    title: 'Customer request',
    type: 'document',
    icon: MdOutlineMessage,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required().min(2).max(50),
        },
        {
            name: 'feedbackWay',
            title: 'Feedback way',
            type: 'string',
            options: {
                list: [
                    { title: 'Email', value: 'email' },
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'Telegram', value: 'telegram' },
                    { title: 'WhatsApp', value: 'whatsApp' },
                    { title: 'Viber', value: 'viber' },
                ],
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'feedbackWayData',
            title: 'Feedback way data',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text',
            validation: (rule) => rule.required().min(2),
        },
    ],
});