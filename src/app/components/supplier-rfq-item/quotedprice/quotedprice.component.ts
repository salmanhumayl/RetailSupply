import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{BsDatepickerConfig} from 'ngx-bootstrap/datepicker'
import {SupplierrfqService} from '../../../services/supplierrfq.service';
import{RFQDetail} from 'src/app/models/RFQDetail';




@Component({
  selector: 'app-quotedprice',
  templateUrl: './quotedprice.component.html',
  styleUrls: ['./quotedprice.component.css']
})
export class QuotedpriceComponent implements OnInit {
  Items:RFQDetail;
  RFQID:number;
  QuoteFile:File=null;
  TechnicalSheet:File=null;
  SuppDocument:File=null;

  QuoteImage:string;
  DeliveryTerm:string;
  PaymentTerms:string;
  datePickerConfig:Partial<BsDatepickerConfig>;


  constructor(private supplierRfq:SupplierrfqService,
              private router:Router,
              private activeRouter :ActivatedRoute) {
                this.datePickerConfig=Object.assign({},
                  {
                    containerClass:'theme-dark-blue',
                    showWeekNumbers:false,
                    dateInputFormat:'DD/MM/YYYY'
                  });



                this.RFQID=+this.activeRouter.snapshot.params['RFQNumber'];
              }

  ngOnInit(): void {

    this.getItemForQoute();
  }

  getItemForQoute(){
    this.Items=this.supplierRfq.GetRFQ(this.RFQID);
  }

  goback(){

    this.router.navigate(['/ViewRFQ',this.RFQID]);
  }


  save(){
    let payload = {

      "details": this.Items
  };
 alert("Quoted Submitted Successfully");
  console.log(payload);;
  }

  QuoteFileInput(file:FileList){
    this.QuoteFile=file.item(0);
    var reader=new FileReader();
    reader.readAsDataURL(this.QuoteFile);  //The readAsDataURL method is used to read the contents of the specified Blob or File
    reader.onload=(e:any)=>{
      this.QuoteImage=e.target.result;
    }

  }

  SheetFileInput(file:FileList){

  }

  SupportingFileInput(file:FileList){

  }
}









//The FileReader. onload property contains an event handler executed when the load event is fired,
//when content read with readAsArrayBuffer, readAsBinaryString, readAsDataURL or readAsText is available.
