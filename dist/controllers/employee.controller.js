"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployees = void 0;
const employees_1 = require("../data/employees");
const filterType_1 = require("../enums/filterType");
const applyTextFilter = (value, filter) => {
    const filterValue = filter.value;
    switch (filter.type) {
        case filterType_1.TextFilterType.EQUALS:
            return value === filterValue;
        case filterType_1.TextFilterType.NOT_EQUAL:
            return value !== filterValue;
        case filterType_1.TextFilterType.CONTAINS:
            return value.toLowerCase().includes(filterValue.toLowerCase());
        case filterType_1.TextFilterType.NOT_CONTAINS:
            return !value.toLowerCase().includes(filterValue.toLowerCase());
        case filterType_1.TextFilterType.STARTS_WITH:
            return value.toLowerCase().startsWith(filterValue.toLowerCase());
        case filterType_1.TextFilterType.ENDS_WITH:
            return value.toLowerCase().endsWith(filterValue.toLowerCase());
        case filterType_1.TextFilterType.BLANK:
            return value === '';
        case filterType_1.TextFilterType.NOT_BLANK:
            return value !== '';
        default:
            return true;
    }
};
const applyNumberFilter = (value, filter) => {
    const numValue = Number(value);
    const filterValue = filter.value;
    const rangeValue = filter.value;
    switch (filter.type) {
        case filterType_1.NumberFilterType.EQUALS:
            return numValue === Number(filterValue);
        case filterType_1.NumberFilterType.NOT_EQUAL:
            return numValue !== Number(filterValue);
        case filterType_1.NumberFilterType.LESS_THAN:
            return numValue < Number(filterValue);
        case filterType_1.NumberFilterType.LESS_THAN_OR_EQUAL:
            return numValue <= Number(filterValue);
        case filterType_1.NumberFilterType.GREATER_THAN:
            return numValue > Number(filterValue);
        case filterType_1.NumberFilterType.GREATER_THAN_OR_EQUAL:
            return numValue >= Number(filterValue);
        case filterType_1.NumberFilterType.IN_RANGE:
            return numValue >= Number(rangeValue.from) && numValue <= Number(rangeValue.to);
        case filterType_1.NumberFilterType.BLANK:
            return value === '';
        case filterType_1.NumberFilterType.NOT_BLANK:
            return value !== '';
        default:
            return true;
    }
};
const applyDateFilter = (value, filter) => {
    const dateValue = new Date(value.split('.').reverse().join('-'));
    const filterValue = filter.value;
    const rangeValue = filter.value;
    switch (filter.type) {
        case filterType_1.DateFilterType.EQUALS:
            return dateValue.getTime() === new Date(filterValue).getTime();
        case filterType_1.DateFilterType.NOT_EQUAL:
            return dateValue.getTime() !== new Date(filterValue).getTime();
        case filterType_1.DateFilterType.LESS_THAN:
            return dateValue.getTime() < new Date(filterValue).getTime();
        case filterType_1.DateFilterType.GREATER_THAN:
            return dateValue.getTime() > new Date(filterValue).getTime();
        case filterType_1.DateFilterType.IN_RANGE:
            return dateValue.getTime() >= new Date(rangeValue.from).getTime() &&
                dateValue.getTime() <= new Date(rangeValue.to).getTime();
        case filterType_1.DateFilterType.BLANK:
            return value === '';
        case filterType_1.DateFilterType.NOT_BLANK:
            return value !== '';
        default:
            return true;
    }
};
const applyRadioFilter = (value, filter) => {
    const filterValue = filter.value;
    switch (filter.type) {
        case filterType_1.BooleanFilterType.EQUALS:
            return value === filterValue;
        default:
            return true;
    }
};
const getEmployees = (req, res) => {
    try {
        const query = req.query;
        const maxResultCount = query.maxResultCount ? parseInt(query.maxResultCount) : 10;
        const skipCount = query.skipCount ? parseInt(query.skipCount) : 0;
        let filteredEmployees = [...employees_1.employeeRows];
        if (query.name) {
            if (typeof query.name === 'string') {
                try {
                    query.name = JSON.parse(query.name);
                }
                catch (e) {
                    console.error('Name filter parse error:', e);
                }
            }
            filteredEmployees = filteredEmployees.filter(emp => applyTextFilter(emp.name, query.name));
        }
        if (query.gender) {
            if (typeof query.gender === 'string') {
                try {
                    query.gender = JSON.parse(query.gender);
                }
                catch (e) {
                    console.error('Gender filter parse error:', e);
                }
            }
            filteredEmployees = filteredEmployees.filter(emp => applyRadioFilter(emp.gender, query.gender));
        }
        // if (query.age) {
        //   filteredEmployees = filteredEmployees.filter(emp =>
        //     applyNumberFilter(emp.age, query.age!)
        //   );
        // }
        // if (query.birthDate) {
        //   filteredEmployees = filteredEmployees.filter(emp =>
        //     applyDateFilter(emp.birthDate, query.birthDate!)
        //   );
        // }
        if (query.status) {
            filteredEmployees = filteredEmployees.filter(emp => emp.status === query.status);
        }
        const paginatedEmployees = filteredEmployees.slice(skipCount, skipCount + maxResultCount);
        res.json({
            data: {
                items: paginatedEmployees,
                totalCount: filteredEmployees.length
            }
        });
    }
    catch (error) {
        console.error('Error in getEmployees:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getEmployees = getEmployees;
