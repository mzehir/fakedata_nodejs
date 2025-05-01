import { Router } from 'express';
import { getEmployees } from '../controllers/employee.controller';

const router = Router();

router.get('/employees', getEmployees);

export const employeeRouter = router; 