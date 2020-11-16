import { Component, OnInit,Input } from '@angular/core';
import {SupplierrfqService} from 'src/app/services/supplierrfq.service';
import{RFQDetail} from 'src/app/models/RFQDetail';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  RFQDetail:RFQDetail;
  @Input() rfqid:number;
  constructor(private supplierRfq :SupplierrfqService) { }

  ngOnInit(): void {
    this.getDisscussion()

  }

  RefreshComments(){
    //alert("RefreshComments in baord list");
    this.getDisscussion();
  }

  getDisscussion(){
    this.RFQDetail=this.supplierRfq.GetRFQ(this.rfqid);
  }

}
