function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.designation,
    data.subject,
    data.index,
    data.joining,
    data.expiry,
    data.mobile,
    data.blood,
    data.photo
  ]);

  return ContentService.createTextOutput("Success");
}
