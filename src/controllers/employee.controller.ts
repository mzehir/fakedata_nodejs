import { Request, Response } from 'express';
import { employeeRows } from '../data/employees';
import {
  TextFilterType,
  RadioFilterType,
  BaseFilter,
  DateFilterType,
  DateRangeValue,
} from '../enums/filterType';

interface GetEmployeesQuery {
  maxResultCount?: string;
  skipCount?: string;
  name?: BaseFilter<TextFilterType>;
  gender?: BaseFilter<RadioFilterType>;
  birthDate?: BaseFilter<DateFilterType, string | DateRangeValue>;
}

const applyTextFilter = (value: string, filter: BaseFilter<TextFilterType>): boolean => {
  const filterValue = filter.value as string;
  switch (filter.type) {
    case TextFilterType.EQUALS:
      return value === filterValue;
    case TextFilterType.NOT_EQUAL:
      return value !== filterValue;
    case TextFilterType.CONTAINS:
      return value.toLowerCase().includes(filterValue.toLowerCase());
    case TextFilterType.NOT_CONTAINS:
      return !value.toLowerCase().includes(filterValue.toLowerCase());
    case TextFilterType.STARTS_WITH:
      return value.toLowerCase().startsWith(filterValue.toLowerCase());
    case TextFilterType.ENDS_WITH:
      return value.toLowerCase().endsWith(filterValue.toLowerCase());
    case TextFilterType.BLANK:
      return value === '';
    case TextFilterType.NOT_BLANK:
      return value !== '';
    default:
      return true;
  }
};

const applyRadioFilter = (value: string, filter: BaseFilter<RadioFilterType>): boolean => {
  const filterValue = filter.value as string;
  switch (filter.type) {
    case RadioFilterType.EQUALS:
      return value === filterValue;
    default:
      return true;
  }
};

const applyDateFilter = (value: string, filter: BaseFilter<DateFilterType, string | DateRangeValue>): boolean => {
  // Helper: converts '2025-04-01' or '2025-04-01 00:00:00' to Date
  const parseFilterDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;
    const clean = dateStr.split(' ')[0]; // '2025-04-01'
    const [year, month, day] = clean.split('-');
    if (!year || !month || !day) return null;
    return new Date(Number(year), Number(month) - 1, Number(day));
  };
  // Helper: converts 'dd-MM-yyyy' to Date
  const parseEmployeeDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split('-');
    if (!year || !month || !day) return null;
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  const empDate = parseEmployeeDate(value);
  if (!empDate) return false;

  switch (filter.type) {
    case DateFilterType.EQUALS:
      return empDate.getTime() === parseFilterDate(filter.value as string)?.getTime();
    case DateFilterType.NOT_EQUAL:
      return empDate.getTime() !== parseFilterDate(filter.value as string)?.getTime();
    case DateFilterType.LESS_THAN:
      return empDate < (parseFilterDate(filter.value as string) ?? empDate);
    case DateFilterType.GREATER_THAN:
      return empDate > (parseFilterDate(filter.value as string) ?? empDate);
    case DateFilterType.IN_RANGE:
      const range = filter.value as DateRangeValue;
      const from = range.dateFrom ? parseFilterDate(range.dateFrom) : undefined;
      const to = range.dateTo ? parseFilterDate(range.dateTo) : undefined;
      if (from && to) return empDate >= from && empDate <= to;
      if (from) return empDate >= from;
      if (to) return empDate <= to;
      return true;
    case DateFilterType.BLANK:
      return !value;
    case DateFilterType.NOT_BLANK:
      return !!value;
    default:
      return true;
  }
};

export const getEmployees = (req: Request, res: Response) => {
  try {
    const query = req.query as unknown as GetEmployeesQuery;
    const maxResultCount = query.maxResultCount ? parseInt(query.maxResultCount) : 10;
    const skipCount = query.skipCount ? parseInt(query.skipCount) : 0;

    let filteredEmployees = [...employeeRows];

    if (query.name) {
      if (typeof query.name === 'string') {
        try {
          query.name = JSON.parse(query.name);
        } catch (e) {
          console.error('Name filter parse error:', e);
        }
      }

      filteredEmployees = filteredEmployees.filter(emp =>
        applyTextFilter(emp.name, query.name!)
      );
    }

    if (query.gender) {
      if (typeof query.gender === 'string') {
        try {
          query.gender = JSON.parse(query.gender);
        } catch (e) {
          console.error('Gender filter parse error:', e);
        }
      }

      filteredEmployees = filteredEmployees.filter(emp =>
        applyRadioFilter(emp.gender, query.gender!)
      );
    }

    if ((query as any).birthDate) {
      let birthDateFilter = (query as any).birthDate;
      if (typeof birthDateFilter === 'string') {
        try {
          birthDateFilter = JSON.parse(birthDateFilter);
        } catch (e) {
          console.error('BirthDate filter parse error:', e);
        }
      }
      filteredEmployees = filteredEmployees.filter(emp =>
        applyDateFilter(emp.birthDate, birthDateFilter)
      );
    }

    const paginatedEmployees = filteredEmployees.slice(skipCount, skipCount + maxResultCount);

    res.json({
      data: {
        items: paginatedEmployees,
        totalCount: filteredEmployees.length
      }
    });
  } catch (error) {
    console.error('Error in getEmployees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}; 