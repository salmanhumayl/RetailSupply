import { Injectable } from '@angular/core';

import { RFQDetail } from '../models/RFQDetail';
import {VendorRFQ} from 'src/app/models/VendorRFQ';

@Injectable({
  providedIn: 'root'
})
export class SupplierrfqService {


  /* RFQDetail:RFQDetail[]=[
    new RFQDetail('121200','Lenovo ThinkPad T560',5,4500,''),
    new RFQDetail('121200','Lenovo ThinkPad T560',5,2500,''),
    new RFQDetail('121200','Lenovo ThinkPad T560',5,3500,'')


  ] */



 rfqdetail:RFQDetail[]=[
  new RFQDetail(0, '121200',new Date,
    [
      {"LineNo":"1","Description":"Lenovo ThinkPad T560",Qty:5,Price:3500,QuotedPrice:0},
      {"LineNo":"2","Description":"THINKPAD BASIC DOCK 65W",Qty:2,Price:300,QuotedPrice:0},
      {"LineNo":"3","Description":"HP Laser Jet 500",Qty:2,Price:200,QuotedPrice:0}
    ],
     [
        {
          "Feedid":1,
          "RFQID":1,
           "userdetail" :[
             {
              UserID:1,
              RoleID:"Buyer",
            }
          ],
             "Feed" :"Dear Suppier please submit the quotation",
             "Updateed_DateTime":new Date,
             "ImageUrl":['../../../../../assets/images/img1.jpg','../../../../../assets/images/img1.jpg']
            },
             {
              "Feedid":2,
              "RFQID":1,
               "userdetail" :[
                 {
                  UserID:1,
                  RoleID:"Supplier",
                }
              ],
               "Feed" :"Already Submitted",
                "Updateed_DateTime":new Date,
                "ImageUrl":['../../../../../assets/images/img1.jpg',
                            '../../../../../assets/images/img1.jpg'
                          ]
               },

               {
                "Feedid":3,
                "RFQID":1,
                 "userdetail" :[
                   {
                    UserID:1,
                    RoleID:"Supplier",
                  }
                ],
                 "Feed" :"Waiting ....",
                 "Updateed_DateTime":
                 new Date,"ImageUrl":['../../../../../assets/images/img1.jpg','']
                }



     ]



  ),
  new RFQDetail(1, '121300',new Date,
    [
      {"LineNo":"1","Description":"xxxxx",Qty:5,Price:3500,QuotedPrice:0},
      {"LineNo":"2","Description":"yyyy",Qty:2,Price:300,QuotedPrice:0},
      {"LineNo":"3","Description":"xxxxxx",Qty:1,Price:200,QuotedPrice:0}
    ],
    [
      {
        "Feedid":2,
        "RFQID":1,
         "userdetail" :[
           {
            UserID:1,
            RoleID:"Buyer",
          }
        ],
         "Feed" :"Dear Suppier please submit the quotation","Updateed_DateTime":new Date,
         "ImageUrl":['../../../../../assets/images/img1.jpg','']}




   ]
  ),

 ];



 VendorRFQProgressList:VendorRFQ[]=[
    new VendorRFQ (0,"121200","05/11/2020","12/12/2020","Wating for Response"),
    new VendorRFQ (1,"121300","05/11/2020","12/12/2020","Quotation Submitted"),
    new VendorRFQ (2,"121400","05/11/2020","12/12/2020","Wating for Response"),
    new VendorRFQ (3,"121500","05/11/2020","12/12/2020","Wating for Response"),
    new VendorRFQ (4,"121600","05/11/2020","12/12/2020","Wating for Response"),

 ]

 VendorRFQClosedList:VendorRFQ[]=[
  new VendorRFQ (5,"12122555","05/11/2020","12/12/2020","Awarded"),
  new VendorRFQ (6,"12122555","05/11/2020","12/12/2020","Lost"),
  new VendorRFQ (7,"12122555","05/11/2020","12/12/2020","Not Response"),
  new VendorRFQ (8,"12122555","05/11/2020","12/12/2020","Awarded"),


 ]

 constructor() { }


 AddDiscussion(Remarks:string,formData:FormData,myfiles:File[]){
 let filepath:string="";


  for (let i = 0; i < myfiles.length; i++) {
    if (i== myfiles.length-1)
    {
      filepath= filepath + "../../../../../assets/images/" + myfiles[i].name;
    }else{
      filepath= filepath + "../../../../../assets/images/" + myfiles[i].name +"," ;
    }
  }

  //alert(filepath);
  this.rfqdetail[0].Feed.push(
    {
      "Feedid":5,
      "RFQID":1,
      "userdetail" :[
        {
         UserID:1,
         RoleID:"Supplier",
       }
     ],

       "Feed" :Remarks,
       "Updateed_DateTime":new Date,

       ImageUrl:['../../../../../assets/images/'+myfiles[0].name]
      }

  );


 }


 GetRFQ(rfqid:number){
  return this.rfqdetail[rfqid];
  //return this.rfqdetail.find(x=> x.id==rfqid);
}





OpenRFQ():VendorRFQ[]{
  return this.VendorRFQProgressList;
}

getVendorClosedRFQ():VendorRFQ[]{
  return this.VendorRFQClosedList;

}


}




