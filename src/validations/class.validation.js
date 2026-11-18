import Joi from 'joi';

const tenLop = Joi.string().trim().min(1).max(255).messages({
    'string.base': 'Tên lớp phải là chuỗi',
    'string.empty': 'Tên lớp không được để trống',
    'string.min': 'Tên lớp không được để trống',
    'string.max': 'Tên lớp không được vượt quá 255 ký tự',
    'any.required': 'Tên lớp là bắt buộc',
});

export const createClassSchema = Joi.object({
    ten_lop: tenLop.required(),
});

export const updateClassSchema = Joi.object({
    ten_lop: tenLop.required(),
}).min(1);
