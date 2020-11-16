import { Component, OnInit } from '@angular/core';
import{VendorRFQ} from '../../../models/VendorRFQ';
import {SupplierrfqService} from '../../../services/supplierrfq.service'


@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css']
})
export class ClosedComponent implements OnInit {

  ClosedRFQ:VendorRFQ[]=[];

  constructor(private supplierRfq:SupplierrfqService) { }

  ngOnInit(): void {
    this.Closed();
  }

  Closed(){
    this.ClosedRFQ=this.supplierRfq.getVendorClosedRFQ();
  }
}
