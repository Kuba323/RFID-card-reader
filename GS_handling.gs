var SS = SpreadsheetApp.openById('15fMBfX1QZUv0u91qrQrp_UCDti2LHSGqm7WTimYsDG4');
var timezone = "Europe/Warsaw";
var hours = 0;
var str = "";


function doPost(e) {

  var parsedData;
  var result = {};
  
  try { 
    parsedData = JSON.parse(e.postData.contents);
  } 
  catch(f){
    return ContentService.createTextOutput("Error in parsing request body: " + f.message);
  }
   
  if (parsedData !== undefined){
    var flag = parsedData.format;
    if (flag === undefined){
      flag = 0;
    }
    
    var sheet = SS.getSheetByName(parsedData.sheet_name); 
    var dataArr = parsedData.values.split(","); 
         
    var Curr_Date = Utilities.formatDate(new Date(), timezone, "dd/MM/yyyy"); 
    var Curr_Time = Utilities.formatDate(new Date(), timezone, "hh:mm:ss a"); 


    var value0 = dataArr [0];
    var value1 = dataArr [1];  

  
    var data = sheet.getDataRange().getValues();
    var row_number = 0;
    var time_out = "";

    for(var i = 0; i < data.length ; i++){  
      if(data[i][0] == value1){ 
        row_number = i+1;
        time_out = data[i][4] 
        
        console.log("row number: "+row_number); 
        console.log("time out: "+time_out); 
		break; 
      }
    }

    if(row_number > 0){
      if(time_out === "" && value0 !== "Unknown"){
        sheet.getRange("E"+row_number).setValue(Curr_Time);
        str = "Success"; 
        return ContentService.createTextOutput(str);
      }
    }

    switch (parsedData.command) {
      
      case "insert_row":
         
         sheet.insertRows(2);
         
         sheet.getRange('A2').setValue(value1);     
         sheet.getRange('B2').setValue(value0);     
         sheet.getRange('C2').setValue(Curr_Date); 
         sheet.getRange('D2').setValue(Curr_Time);  
         
         str = "Success"; 
         SpreadsheetApp.flush();
         break;
            
    }
    
    return ContentService.createTextOutput(str);
  } 
  
  else {
    return ContentService.createTextOutput("Error! Request body empty or in incorrect format.");
  }
}
