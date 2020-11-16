import { Component, OnInit } from '@angular/core';
import{VendorRFQ} from '../../../models/VendorRFQ';

import {SupplierrfqService} from '../../../services/supplierrfq.service'

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  PendingRFQ:VendorRFQ[]=[];


  constructor(private supplierRfq:SupplierrfqService ) { }

  ngOnInit(): void {
    this.Pending();


  }

  Pending(){
    this.PendingRFQ=this.supplierRfq.OpenRFQ();
  }


}
