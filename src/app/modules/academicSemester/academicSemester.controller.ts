import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.services';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  const { ...academicSemesterData } = req.body;
  try {
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = { createAcademicSemester };
