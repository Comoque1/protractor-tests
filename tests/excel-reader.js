//import{XLSX} from '../js-xlsx';
var XLSX = require('js-xlsx');

class ExcelReader {
    readFromExcel(sheetName, filePath) {
        var workbook = XLSX.readFile(filePath);
        var worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    }
}

module.exports = new ExcelReader();