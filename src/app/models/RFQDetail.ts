import { RFQItems } from './RFQItems';
import { Feed } from './Feed';


export class RFQDetail
{
  id:number;
  RFQNO:string;
  RFQ_Expiry_Date:Date;
  ItemDetail:RFQItems[];
  Feed:Feed[];

constructor(id,RFQNO,RFQ_Expiry_Date,ItemDetail:RFQItems[],Feed:Feed[])
{
  this.id=id;
  this.RFQNO=RFQNO;
  this.RFQ_Expiry_Date=RFQ_Expiry_Date;
  this.ItemDetail=ItemDetail;
  this.Feed=Feed;

}


}

