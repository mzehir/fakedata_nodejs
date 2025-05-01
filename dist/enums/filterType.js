"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanFilterType = exports.DateFilterType = exports.NumberFilterType = exports.TextFilterType = void 0;
var TextFilterType;
(function (TextFilterType) {
    TextFilterType["EQUALS"] = "equals";
    TextFilterType["NOT_EQUAL"] = "notEqual";
    TextFilterType["CONTAINS"] = "contains";
    TextFilterType["NOT_CONTAINS"] = "notContains";
    TextFilterType["STARTS_WITH"] = "startsWith";
    TextFilterType["ENDS_WITH"] = "endsWith";
    TextFilterType["BLANK"] = "blank";
    TextFilterType["NOT_BLANK"] = "notBlank";
})(TextFilterType || (exports.TextFilterType = TextFilterType = {}));
var NumberFilterType;
(function (NumberFilterType) {
    NumberFilterType["EQUALS"] = "equals";
    NumberFilterType["NOT_EQUAL"] = "notEqual";
    NumberFilterType["LESS_THAN"] = "lessThan";
    NumberFilterType["LESS_THAN_OR_EQUAL"] = "lessThanOrEqual";
    NumberFilterType["GREATER_THAN"] = "greaterThan";
    NumberFilterType["GREATER_THAN_OR_EQUAL"] = "greaterThanOrEqual";
    NumberFilterType["IN_RANGE"] = "inRange";
    NumberFilterType["BLANK"] = "blank";
    NumberFilterType["NOT_BLANK"] = "notBlank";
})(NumberFilterType || (exports.NumberFilterType = NumberFilterType = {}));
var DateFilterType;
(function (DateFilterType) {
    DateFilterType["EQUALS"] = "equals";
    DateFilterType["NOT_EQUAL"] = "notEqual";
    DateFilterType["LESS_THAN"] = "lessThan";
    DateFilterType["GREATER_THAN"] = "greaterThan";
    DateFilterType["IN_RANGE"] = "inRange";
    DateFilterType["BLANK"] = "blank";
    DateFilterType["NOT_BLANK"] = "notBlank";
})(DateFilterType || (exports.DateFilterType = DateFilterType = {}));
var BooleanFilterType;
(function (BooleanFilterType) {
    BooleanFilterType["EQUALS"] = "equals";
})(BooleanFilterType || (exports.BooleanFilterType = BooleanFilterType = {}));
