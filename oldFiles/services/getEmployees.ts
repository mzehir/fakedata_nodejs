import { EmployeeType } from "../fakeData/employeeType";

  export interface GetEmployeesRequestDTO {
    maxResultCount: number;
    skipCount: number;
  }
  
  export interface GetEmployeesResponseDTO {
    data: {
      items: EmployeeType[];
      totalCount: number;
    };
  } 