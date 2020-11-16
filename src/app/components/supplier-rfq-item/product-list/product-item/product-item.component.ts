import { Component, OnInit,Input} from '@angular/core';
import { RFQDetail } from 'src/app/models/RFQDetail';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input () Items:RFQDetail;

  constructor() { }

  ngOnInit(): void {
  }



}
