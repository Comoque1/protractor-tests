// spec.js
var searchJsonData = require('./search-json-data.json');
var searchJsonDataNoRecords = require('./search-json-data-no-records.json');
var gridPageObjects = require('./grid-page-object.js');

beforeAll(async function () {
    await browser.waitForAngularEnabled(true);
});
beforeEach(async function () {
    await browser.get('http://localhost:4200/');
});

describe('Search', function () {
    it('should return data in grid area', async function () {
        for (var i = 0; i <= 3; i++) {
            await gridPageObjects.searchInAllColumns(searchJsonData[i]);
            await expect(gridPageObjects.getContactDetails()).toContain(searchJsonData[i]);
            await gridPageObjects.clearSreachField();
        };
    });

    it('should Not return data in grid area', async function () {
        for (var i = 0; i <= 1; i++) {
            await gridPageObjects.searchInAllColumns(searchJsonDataNoRecords[i]);
            await expect(gridPageObjects.getContactDetails()).toContain('No records available.');
            await expect(gridPageObjects.getGridItems()).toEqual(['0 - 0 of 0 items']);
            await expect(gridPageObjects.getContactDetails().count()).toEqual(1);
            await gridPageObjects.clearSreachField();
        };
    });
});

describe('Checkbox', function () {
    it('should set checkbox to first row', async function () {
        await gridPageObjects.setGridCheckbox(1);
        await expect(gridPageObjects.checkStateGridCheckbox(1).isSelected()).toBe(true);
        await expect(gridPageObjects.checkStateGridCheckbox(2).isSelected()).toBe(false);
    });

    it('should set checkbox to all rows', async function () {
        await gridPageObjects.setGridCheckbox(0);
        for (var i = 0; i <= 20; i++) {
            await expect(gridPageObjects.checkStateGridCheckbox(i).isSelected()).toBe(true);
        };
    });
});

describe('Sort', function () {
    it('should sort by job title', async function () {
        await gridPageObjects.searchInAllColumns('meg');
        await expect(gridPageObjects.getRowsNumber()).toEqual(2);
        await expect(gridPageObjects.getjobTitle(1)).toEqual(['Operator', 'Librarian']);
        await gridPageObjects.pressSortColumn(1);
        await expect(gridPageObjects.getjobTitle(1)).toEqual(['Librarian', 'Operator']);
    });
});




