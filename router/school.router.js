import express from 'express';
import { validateAddSchool,validateListSchools } from '../controllers/school.controllers.js';
import { addSchoolHandler,listSchoolsHandler } from '../controllers/school.controllers.js';

const router = express.Router();

router.post('/addSchool', validateAddSchool, addSchoolHandler);
router.get('/listSchools', validateListSchools, listSchoolsHandler);

export default router;
