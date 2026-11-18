import * as Class from '../model/Class.js';
import { AppError } from '../utils/appError.js';

const notFound = () => new AppError('Không tìm thấy lớp học', 404);

export const getAllClass = () => {
    return Class.getAllClass();
};

export const getClassById = async (id) => {
    const result = await Class.getClassById(id);
    if (!result) throw notFound();
    return result;
};

export const createClass = (data) => {
    return Class.createClass(data);
};

export const updateClass = async (id, data) => {
    const result = await Class.getClassById(id);
    if (!result) throw notFound();
    return Class.updateClass(id, data);
};

export const deleteClass = async (id) => {
    const result = await Class.deleteClass(id);
    if (!result) throw notFound();
    return result;
};
