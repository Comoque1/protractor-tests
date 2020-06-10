var GridPageObjects = function () {

    // Search objects

    // Sets value in search field 
    var search = element(by.css('input.k-textbox'));
    this.searchInAllColumns = async function (name) {
        await search.sendKeys(name);
    }

    // Checkbox objects - ToDo
    // var gridCheckbox = element.all(by.css('td .k-checkbox')).get();
    // this.setGridCheckbox = async function () {
    //     await gridCheckbox.click();
    // }

    // Gets number of rows from grid
    var rowsNumber = element.all(by.css('kendo-grid-list tr'));
    this.getRowsNumber = function () {
        return rowsNumber.count();
    }

    // Gets text from grid
    var contactDetails = element.all(by.css('kendo-grid td'));
    this.getContactDetails = function () {
        return contactDetails.getText();
    }

    // Gets text: No records available.
    var gridItems = element.all(by.css('.k-widget .k-pager-info'));
    this.getGridItems = function () {
        return gridItems.getText();
    }

    // Exports objects
    var fileName = ('Employees.xlsx');
    var exportExcel = element(by.css('kendo-grid .k-grid-excel'));
}

module.exports = new GridPageObjects();