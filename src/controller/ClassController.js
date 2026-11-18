import * as ClassServices from '../services/ClassServices.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/sendResponse.js';

export const getAllClass = asyncHandler(async (req, res) => {
    const result = await ClassServices.getAllClass(req.query);
    return sendResponse(res, 200, result, 'Lấy danh sách Class thành công');
});

export const getClassById = asyncHandler(async (req, res) => {
    const result = await ClassServices.getClassById(req.params.id);
    return sendResponse(res, 200, result, 'Lấy chi tiết Class thành công');
});

export const createClass = asyncHandler(async (req, res) => {
    const result = await ClassServices.createClass(req.body);
    return sendResponse(res, 201, result, 'Tạo Class thành công');
});

export const updateClass = asyncHandler(async (req, res) => {
    const result = await ClassServices.updateClass(req.params.id, req.body);
    return sendResponse(res, 200, result, 'Cập nhật Class thành công');
});

export const deleteClass = asyncHandler(async (req, res) => {
    await ClassServices.deleteClass(req.params.id);
    return res.status(204).end();
});


