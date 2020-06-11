var GridPageObjects = function () {

    // Search objects

    // Sets value in all input fields
    // Note 1: the parameter "inputNumber" is the index of the input filed, starting from 0
    // Note 2: the parameter "text" is the text for the input
    var inputValue = element.all(by.css('input.k-textbox'));
    this.setInputValue = async function (inputNumber, text) {
        await inputValue.get(inputNumber).sendKeys(text);
    };

    // Clears search input field
    this.clearSreachField = async function () {
        await inputValue.clear();
    }

    //------------------------------------
    // Checkbox objects 

    // Note 1: the parameter "index" of the checkbox, starting from 0
    // Note 2: index 0 is "select all" checkbox 
    var gridCheckbox = element.all(by.css('kendo-grid .k-checkbox'));
    this.setGridCheckbox = async function (index) {
        await gridCheckbox.get(index).click();
    }

    // Get the state of the checkbox 
    // Note 1: use the same "index" as in the "setGridCheckbox" function
    // Note 2: "index" 0 is "select all" checkbox
    this.checkStateGridCheckbox = function (val) {
        return gridCheckbox.get(val);
    }

    //------------------------------------
    //Filter objects

    // Opens Filter menu 
    // Note 1: the parameter "val" is the index of the filter menu button starting from 0
    var menuButton = element.all(by.css('kendo-grid-column-menu .k-grid-filter'));
    this.pressMenuButton = async function (val) {
        await menuButton.get(val).click();
    };

    // Opens Filter options
    var filterButton = element(by.css('kendo-grid-columnmenu-filter .k-columnmenu-item'));
    this.pressFilterButton = async function () {
        await filterButton.click();
    };

    // Applies Filter options
    var applyFilterButton = element(by.css('.k-filter-menu-container .k-primary'));
    this.pressApplyFilterButton = async function () {
        await applyFilterButton.click();
    };   

    //------------------------------------
    // Grid objects

    // Sorts grid column. 
    // Note 1: the parameter "index" of the column, starting from 0
    var sortColumn = element.all(by.css('th span.k-link'));
    this.pressSortColumn = async function (index) {
        await sortColumn.get(index).click();
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

    //------------------------------------
    // Exports objects
    
    var fileName = ('Employees.xlsx');
    var exportExcel = element(by.css('kendo-grid .k-grid-excel'));
}

module.exports = new GridPageObjects();