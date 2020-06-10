var GridPageObjects = function () {

    // Search objects

    // Sets value in search field 
    var searchInput = element(by.css('input.k-textbox'));
    this.searchInAllColumns = async function (name) {
        await searchInput.sendKeys(name);
    }

    // Clears search input field
    this.clearSreachField = async function(){
        await searchInput.clear();
    }

    // Checkbox objects 
    // Note 1: the parameter "val" is the index of the checkbox starting from 0
    // Note 2: index 0 is "select all" checkbox 
    var gridCheckbox = element.all(by.css('kendo-grid .k-checkbox'));
    this.setGridCheckbox = async function (val) {
        await gridCheckbox.get(val).click();
    }

    // Get the state of the checkbox 
    // Note 1: use the same "val" as in the "setGridCheckbox" function
    // Note 2: index 0 is "select all" checkbox
    this.checkStateGridCheckbox = function (val) {
        return gridCheckbox.get(val);
    }

    // Sorts grid column. 
    // Note 1: the parameter "val" is the number of the column starting from 0
    var sortColumn = element.all(by.css('th span.k-link'));
    this.pressSortColumn = async function (val) {
        await sortColumn.get(val).click();
    }

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

    // Gets text from all rows for a columns
    let jobTitle = element.all(by.css('td[data-kendo-grid-column-index=\'2\']'));
    this.getjobTitle = async function () {
        return await jobTitle.getText();
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