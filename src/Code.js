  //var doc = DocumentApp.openById("1ZSqN-OOxvDV9YLpuDsXhqSWx4X3djUaVehuIlZbanxo");



// SCRIPT: https://script.google.com/macros/d/1RM2O0kdr0RMspXE6vgu0yfrUWcLvqfWccAsfnn5ywLQDtd9jkMrU9rdG/edit?splash=yes


// FOLDER: https://drive.google.com/drive/folders/0BxVAKBzwjD0BMlVCTGhmelExdTg

// template: https://docs.google.com/document/d/1ZSqN-OOxvDV9YLpuDsXhqSWx4X3djUaVehuIlZbanxo/edit


// this functions executes the two functions below
// it seems this Google app script engine can only 
// run one function at a time, so this one contains
// the other two 
//
// push to Drive with 'gapps upload'
//
function main(){

  // set by user  
  INPUT_SPREADSHEET = "1mrqZ9GJctfWqqshAWcXGZzI2uo6nMLqcSk2-Mj96nRE";
  SUBSHEET = "ABCFinance";

  // where are the emails? set this according to sheet
  Emails = 4
  First_Name = 1

  // call the function that gets the emails from the ABC finance sheet
  emails = extractDataFromSheet( INPUT_SPREADSHEET, SUBSHEET, Emails );

  names = extractDataFromSheet( INPUT_SPREADSHEET, SUBSHEET, First_Name );

  // generate the certificate document
  generateDocument( emails, names );

}




function extractDataFromSheet( INPUT_SPREADSHEET, SUBSHEET, INFO_INDEX ) {

  // create a data sctructure to hold emails
  var extract_data_container = new Array();

  // getting all data from this specific sheet and subsheet 
  var spreadsheet = SpreadsheetApp.openById( INPUT_SPREADSHEET );
  var sheet = spreadsheet.getSheetByName( SUBSHEET );

  // getting all the values across the sheet
  var values = sheet.getDataRange()
                    .getValues();

  //add emails from list to an array
  for(n=0;n<values.length;++n){

    // x is the index of the column starting from 0
    var cell_content = values[n][ INFO_INDEX ] ; 

    extract_data_container.push(cell_content);

  }

  return extract_data_container;
}



function generateDocument(input_array) {

  emails = input_array; 

  // try to write to a template
  var templateid = "1ZSqN-OOxvDV9YLpuDsXhqSWx4X3djUaVehuIlZbanxo"; // get template file id
  var FOLDER_NAME = "Certificates Folder"; // folder name of where to put completed diaries



   var copyId = DriveApp.getFileById( templateid )
                        .makeCopy('TESTNG_'+ emails[5] )
                        .getId();

   var copyDoc = DocumentApp.openById(copyId);
   var copyBody = copyDoc.getActiveSection();

   copyBody.replaceText("%WEEKNO%", emails[5]);


   copyDoc.saveAndClose();



  var file = DriveApp.getFileById( copyId );

  //to put file in folder
  DriveApp.getFolderById("0BxVAKBzwjD0BMlVCTGhmelExdTg")
          .addFile( file );


 

}





