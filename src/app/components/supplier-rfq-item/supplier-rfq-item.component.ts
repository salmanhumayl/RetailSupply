import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-supplier-rfq-item',
  templateUrl: './supplier-rfq-item.component.html',
  styleUrls: ['./supplier-rfq-item.component.css']
})
export class SupplierRFQItemComponent implements OnInit {

  RFQID:number;


  constructor(private activeRouter:ActivatedRoute) {
    this.RFQID=+this.activeRouter.snapshot.params['RFQNumber'];

  }

  ngOnInit(): void {
  //  alert("rfq-item-Main");
  }



}
