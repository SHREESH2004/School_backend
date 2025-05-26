import { validationResult, body, query } from 'express-validator';
import { SchoolRepo } from '../repository/crud-repository.js';
import db from '../models/index.js';

const schoolRepo = new SchoolRepo(db.School);

export const validateAddSchool = [
  body('name').isString().notEmpty(),
  body('address').isString().notEmpty(),
  body('latitude').isFloat({ min: -90, max: 90 }),
  body('longitude').isFloat({ min: -180, max: 180 }),
];

export async function addSchoolHandler(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const school = await schoolRepo.addSchool(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const validateListSchools = [
  body('latitude').isFloat({ min: -90, max: 90 }),
  body('longitude').isFloat({ min: -180, max: 180 }),
];

export async function listSchoolsHandler(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const userLat = parseFloat(req.body.latitude);
  const userLng = parseFloat(req.body.longitude);

  try {
    const schools = await schoolRepo.listSchools(userLat, userLng);
    res.json(schools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
