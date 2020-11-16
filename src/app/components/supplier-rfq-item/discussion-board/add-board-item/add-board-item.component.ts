import { Component,EventEmitter, OnInit,Output,ViewChild,ElementRef  } from '@angular/core';
import {SupplierrfqService} from 'src/app/services/supplierrfq.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-board-item',
  templateUrl: './add-board-item.component.html',
  styleUrls: ['./add-board-item.component.css']
})
export class AddBoardItemComponent implements OnInit {

  @ViewChild('takeInput') InputVar : ElementRef;

  @Output()
  Refresh: EventEmitter<void>=new EventEmitter<void>();

  urls=[];
  files:string[]=[];
  myFiles: File[] = [];

  constructor(private supplierRfq:SupplierrfqService) { }

  ngOnInit(): void {
  }

  selectedFiles(e){
      if (e.target.files){
          for (var i=0;i< e.target.files.length;i++){
                var reader=new FileReader();
                this.myFiles.push(<File>e.target.files[i]);
                this.files.push(e.target.files[i]);
                reader.readAsDataURL(e.target.files[i])
                reader.onload=(event:any)=>{
                    this.urls.push(event.target.result);
                }
          }
      }

  }


  onSubmitRemarks(form:NgForm){
    const formData=new FormData();
    const Remakrs=form.value.remarks;

    //formData.append("Message",Remakrs);
    for (let i = 0; i < this.myFiles.length; i++) {

      formData.append("fileupload", this.myFiles[i])
    }
    this.supplierRfq.AddDiscussion(Remakrs,formData,this.myFiles)
    this.urls.splice(0, this.urls.length);
    form.reset();
    this.InputVar.nativeElement.value = "";
    this.Refresh.emit();


  }
}
