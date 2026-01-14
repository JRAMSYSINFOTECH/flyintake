import Student from "../models/Student.js";

export const createStudentEssentials = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json({
            success: true,
            message: "Student essentials form submitted successfully",
            data: student,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};