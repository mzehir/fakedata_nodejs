import { Department } from "../enums/department";
import { Gender } from "../enums/gender";
import { PerformanceRating } from "../enums/performanceRating";
import { Position } from "../enums/position";
import { Status } from "../enums/status";

export interface EmployeeType {
    id: number;
    name: string;
    surname: string;
    gender: Gender;
    age: string;
    birthDate: string;
    phone: string;
    email: string;
    address: string;
    department: Department;
    position: Position;
    salary: number;
    status: Status;
    performanceRating: PerformanceRating;
  }