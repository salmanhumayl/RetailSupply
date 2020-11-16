import { Component, OnInit,Input } from '@angular/core';
import{Router} from '@angular/router';
import {SupplierrfqService} from '../../../services/supplierrfq.service';
import{RFQDetail} from 'src/app/models/RFQDetail';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() rfqid:number;

  RFQDetail:RFQDetail;


  constructor(private supplierRfq:SupplierrfqService,
              private router:Router){}


  ngOnInit(): void {

    this.ShowRFQItems();
  }

  ShowRFQItems(){
    this.RFQDetail=this.supplierRfq.GetRFQ(this.rfqid);



  }
  ReviseQuote(){
    this.router.navigate(['/revise',this.rfqid]);
  }



}












 // Items=[
   //  {RFQ:"1",itemdetail:[{description:"abx",qty:2,price:100},
     //                     {description:"xyz",qty:2,price:100}
       //                   ]
  //                      }
//  ];
