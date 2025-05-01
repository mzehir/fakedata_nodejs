export enum TextFilterType {
    EQUALS = 'equals',
    NOT_EQUAL = 'notEqual',
    CONTAINS = 'contains',
    NOT_CONTAINS = 'notContains',
    STARTS_WITH = 'startsWith',
    ENDS_WITH = 'endsWith',
    BLANK = 'blank',
    NOT_BLANK = 'notBlank'
}

export enum NumberFilterType {
    EQUALS = 'equals',
    NOT_EQUAL = 'notEqual',
    LESS_THAN = 'lessThan',
    LESS_THAN_OR_EQUAL = 'lessThanOrEqual',
    GREATER_THAN = 'greaterThan',
    GREATER_THAN_OR_EQUAL = 'greaterThanOrEqual',
    IN_RANGE = 'inRange',
    BLANK = 'blank',
    NOT_BLANK = 'notBlank'
}

export enum DateFilterType {
    EQUALS = 'equals',
    NOT_EQUAL = 'notEqual',
    LESS_THAN = 'lessThan',
    GREATER_THAN = 'greaterThan',
    IN_RANGE = 'inRange',
    BLANK = 'blank',
    NOT_BLANK = 'notBlank'
}

// Tarih aralığı filtresi için kullanılacak arayüz
export interface DateRangeValue {
    dateFrom?: string; // Başlangıç tarihi (örn: "2025-04-01 00:00:00" veya "2025-04-01")
    dateTo?: string;   // Bitiş tarihi (örn: "2025-04-24 00:00:00" veya "2025-04-24")
}

export enum RadioFilterType {
    EQUALS = 'equals',
}

// Union type for all filter types
export type FilterType = TextFilterType | NumberFilterType | DateFilterType | RadioFilterType;

// Base filter interface - Artık value tipi generic olarak belirlenebilir
export interface BaseFilter<T extends FilterType, V = string> {
    type: T;
    value: V;
} 