//import React from 'react'
//import Input from './Input';
import Cost from './Cost';
export default function Timeline() {
  
  var a = document.getElementById('date').value.month;  //this values are not good
  var b = document.getElementById('date').value.year;
  
   
    if( === 'Provisional'){

                var PubMon = a + 6
                var PubYear = b + 1
    
                if (PubMon > 12){
                    PubYear += 1 
                    PubMon -= 12
                }
    
                var examReqMon = PubMon + 6;
                var examReqYear = PubYear + 2;
    
                if (examReqMon > 12) {
                    examReqYear += 1;
                    examReqMon -= 12
                }
    
                var FERMon = examReqMon + 9;
                var FERyear = examReqYear + 1
    
                if (FERMon > 12) {
                    FERyear += 1;
                    FERMon -= 12
                }
                var ResMon = FERMon + 6;
                var ResYear = FERyear;
                if (ResMon > 12) {
                    ResYear += 1;
                    ResMon -= 12;
                }

    }
   
   
}    
  
