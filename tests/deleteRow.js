var XLSX = require('js-xlsx');
class excelReader2 {


    readFromExcel(sheetName, filePath) {
        var workbook = XLSX.readFile(filePath)
        var worksheet = workbook.Sheets[sheetName]
        var range = XLSX.utils.decode_range(worksheet['!ref']);
        range.s.r = 1; // <-- skipping first row with merged cell, but not working either.
        worksheet['!ref'] = XLSX.utils.encode_range(range);
        var a = XLSX.utils.sheet_to_json(worksheet);
        console.log(a[1]);
        return a;
    }
}

module.exports = new excelReader2();