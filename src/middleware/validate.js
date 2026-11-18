import { AppError } from '../utils/appError.js';

// Middleware factory: nhận vào một Joi schema, trả về middleware để dùng trong route.
export const validate = (schema) => (req, res, next) => {
    // Validate req.body theo schema.
    // abortEarly: false -> thu thập TẤT CẢ lỗi thay vì dừng ở lỗi đầu tiên.
    // stripUnknown: true -> tự động loại bỏ các field không khai báo trong schema.
    const { value, error } = schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });

    // Nếu có lỗi: gộp mọi message thành 1 chuỗi và chuyển cho errorHandler,
    // kèm HTTP status 400 (Bad Request).
    if (error) {
        const message = error.details.map((detail) => detail.message).join(', ');
        return next(new AppError(message, 400));
    }

    // Hợp lệ: gán lại req.body bằng dữ liệu ĐÃ được chuẩn hóa
    // (đã trim, ép kiểu, bỏ field thừa...) để tầng sau dùng luôn.
    req.body = value;
    next();
};
