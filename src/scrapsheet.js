  // var doc = DocumentApp.openById("1ZSqN-OOxvDV9YLpuDsXhqSWx4X3djUaVehuIlZbanxo");


  // var name_of_doc = doc.getName();

  // var doc_body = doc.getBody();

  // //Use editAsText to obtain a single text element containing
  // //all the characters in the document.
  
  // var text = doc_body.editAsText();

  // //Insert text at the beginning of the document.
  
  // text.insertText(0, values[0][0]);




  // //Insert text at the end of the document.
  // for(n=0;n<values.length;++n){

  //   var cell = values[n][4] ; // x is the index of the column starting from 0

  //   text.appendText( cell );

  // }


  

  // Make the first half of the document blue.
  //text.setForegroundColor(0, text.getText().length / 2, '#00FFFF');









// function writeData(data_greifer, name_sheet_greifer) {
  
//   // Opens doc by its ID
//   var doc = DocumentApp.openById("1ZSqN-OOxvDV9YLpuDsXhqSWx4X3djUaVehuIlZbanxo");

//   var name_of_doc = doc.getName();

//   var doc_body = doc.getBody();

//   // Use editAsText to obtain a single text element containing
//   // all the characters in the document.
//   var text = doc_body.editAsText();

//   // Insert text at the beginning of the document.
//   text.insertText(0, data_greifer);

//   // Insert text at the end of the document.
//   text.appendText( name_sheet_greifer );

//   // Make the first half of the document blue.
//   text.setForegroundColor(0, text.getText().length / 2, '#00FFFF');
  
//   //Browser.msgBox(name_of_doc);

// }