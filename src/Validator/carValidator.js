import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁІіЇї]{1,20}$')).required().messages({
        'string.empty': '"model" can not be empty',
        'string.pattern.base': 'Wrong name',
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base': 'Price can be only from 0 till 1000000',
        'number.min': 'Price must not be less than 0'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Year can be only from 1900 till 2022',
        'number.min': 'Year must not be less than 1900'
    })
})