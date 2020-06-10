// spec.js
var searchJsonData = require('./search-json-data.json');
var searchJsonDataNoRecords = require('./search-json-data-no-records.json');
var gridPageObjects = require('./grid-page-object.js');

beforeAll(async function () {
    await browser.waitForAngularEnabled(true);
})
beforeEach(async function () {
    await browser.get('http://localhost:4200/');
})

describe('Search', function () {
    it('should return data in grid area', async function () {
        for (var i = 0; i <= 3; i++) {
            await gridPageObjects.searchInAllColumns(searchJsonData[i]);
            await expect(gridPageObjects.getContactDetails()).toContain(searchJsonData[i]);
            await element(by.css('input.k-textbox')).clear();
        }
    })

    it('should Not return data in grid area', async function () {
        for (var i = 0; i <= 1; i++) {
            await gridPageObjects.searchInAllColumns(searchJsonDataNoRecords[i]);
            await expect(gridPageObjects.getContactDetails()).toContain('No records available.');
            await expect(gridPageObjects.getGridItems()).toEqual(['0 - 0 of 0 items']);
            expect(gridPageObjects.getContactDetails().count()).toEqual(1);
            await element(by.css('input.k-textbox')).clear();
        }
    })
}),

    describe('Checkbox', function () {
        it('should set checkbox to first row', async function () {
            var gridCheckbox = await element.all(by.css('kendo-grid-list input')).get(0);
            gridCheckbox.click();
            expect(gridCheckbox.isSelected()).toBe(true);
        });

        it('should set checkbox to all rows', async function () {
            var gridCheckbox = await element(by.css('input#k-grid0-select-all'));
            gridCheckbox.click();
            expect(gridCheckbox.isSelected()).toBe(true);

        });
    }),

    describe('Sort', function () {
        it('should sort by job title', async function () {

            await gridPageObjects.searchInAllColumns('meg');
            expect(gridPageObjects.getRowsNumber()).toEqual(2);
            var b = await element.all(by.css('th span.k-link')).get(1);
            b.click();
        })
    })




