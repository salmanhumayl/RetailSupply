import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { BoardListComponent } from 'src/app/components/supplier-rfq-item/discussion-board/board-list/board-list.component';


@Component({
  selector: 'app-discussion-board',
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css']
})
export class DiscussionBoardComponent implements OnInit {
  @ViewChild(BoardListComponent) BoardListComponent:BoardListComponent;
  @Input() rfqid:number;

  constructor() { }

  ngOnInit(): void {

  }


  RefreshComments(){
   // alert("RefreshComments in discsussion board");
    this.BoardListComponent.RefreshComments();
  }

}
