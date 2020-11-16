export class VendorRFQ
{
  id:number;
  RFQNumber:string;
  ReceivedDate:Date;
  ClosingDate:Date;
  Status:string;


  constructor(id,RFQNumber,ReceivedDate,ClosingDate,Status)
    {
      this.id;
        this.RFQNumber=RFQNumber;
        this.ReceivedDate=ReceivedDate
        this.ClosingDate=ClosingDate;
        this.Status=Status;


    }
}
