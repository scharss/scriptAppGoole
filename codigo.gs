function doGet(e) {
  
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('index');
   
}

/*function userClicked(num1, num2, num3, num4, num5*/

//function userClicked(num1)
function userClicked(row,col,nom,f){
  
  var url = "https://docs.google.com/spreadsheets/d/1XPmeY6xjK4VGTGxjff_NrPkpzwKk3U0x6p90cqg09dc/edit#gid=1633754573";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("hoja1");
  
  //var Y1 = ws.getRange(2, 2);
  
  var Y1 = ws.getRange(row, col);
  
  Y1.setValue(nom+f);
  
  
  
  
}




















/*
  y2.setValue(num2);
  y3.setValue(num3);
  y4.setValue(num4);
  y5.setValue(num5);
  */



/*
  var y2 = ws.getRange(2, 3);
  var y3 = ws.getRange(2, 4);
  var y4 = ws.getRange(2, 5);
  var y5 = ws.getRange(2, 6);
  */




/*

function myFunction() {

var Code = SpreadsheetApp.getActive();
var hoja1 = Code.getActiveSheet();
var x = hoja1.getRange(2, 2);
var y = hoja1.getRange(2, 3);
var w = hoja1.getRange(2, 4);
var j = hoja1.getRange(2, 4);
var v = hoja1.getRange(2, 4);


x.setValue("juannnn");





}

*/