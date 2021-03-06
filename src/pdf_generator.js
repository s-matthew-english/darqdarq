var docTemplate = "1JAPmsrPRrRwXCVAli229C5J7Kr4xaOnfO2rmGqvYyhU"; 
var docName     = "ProofOfCredit";

function onFormSubmit(e) {
   var first_name = e.values[1];
   var last_name = e.values[2];
   var customer_email = e.values[3];
   var order_number = e.values[4];
   var brand = e.values[5];
   var amount = e.values[6];
   var date_of_credit = e.values[7];
   var auth_code = e.values[8];
   var last_4 = e.values[9];
   var request_id = e.values[10];
   var rep_name = e.values[11];
   var copyId = DocsList.getFileById(docTemplate)
                .makeCopy(docName+'_'+order_number)
                .getId();   

   var copyDoc = DocumentApp.openById(copyId);
   var copyBody = copyDoc.getActiveSection();

   copyBody.replaceText('keyFirst', first_name);
   copyBody.replaceText('keyLast', last_name);
   copyBody.replaceText('keyBrand', brand);
   copyBody.replaceText('keyAmount', amount);
   copyBody.replaceText('keyCreditdate', date_of_credit);
   copyBody.replaceText('keyAuth', auth_code);
   copyBody.replaceText('keyRep', rep_name);
   copyBody.replaceText('keyOrder', order_number);
   copyBody.replaceText('keyCClast4', last_4);
   copyBody.replaceText('keyRequestID', request_id);
   var todaysDate = Utilities.formatDate(new Date(), "GMT", "MM/dd/yyyy"); 
   copyBody.replaceText('keyTodaysDate', todaysDate);

   copyDoc.saveAndClose();

   var pdf = DocsList.getFileById(copyId).getAs("application/pdf"); 
   var folder = DocsList.getFolder('Proof of Credit');
   var movefile = DocsList.createFile(pdf);
   movefile.addToFolder(folder);
   movefile.removeFromFolder(DocsList.getRootFolder());
   var subject = "Proof of Credit regarding Order Number: " + order_number;
   var body    = "Hello " + first_name + " " + last_name + "," + "<br /><br />" 
   + "Thank you for calling " + brand + " Support. The attached document contains information " 
   + "for you to reference related to the credits we have issued back to your original form of payment." + "<br /><br />" 
   + "If you have any further questions or require additional assistance please let us know." + "<br /><br />" 
   + "Regards," + "<br /><br />" 
   + rep_name + ", Payments Department" + "<br />" 
   + "test@test.com";
   var cc = "test@test.com";
   MailApp.sendEmail(customer_email, subject, body, {htmlBody: body, attachments: pdf, cc: cc}); 
   DocsList.getFileById(copyId).setTrashed(true);
}