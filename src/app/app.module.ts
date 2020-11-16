import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker'

import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SupplierRFQItemComponent } from './components/supplier-rfq-item/supplier-rfq-item.component';
import { ProductListComponent } from './components/supplier-rfq-item/product-list/product-list.component';
import { ProductItemComponent } from './components/supplier-rfq-item/product-list/product-item/product-item.component';
import { DiscussionBoardComponent } from './components/supplier-rfq-item/discussion-board/discussion-board.component';
import { BoardListComponent } from './components/supplier-rfq-item/discussion-board/board-list/board-list.component';

import { AddBoardItemComponent } from './components/supplier-rfq-item/discussion-board/add-board-item/add-board-item.component';
import { RequirementsComponent } from './components/supplier-rfq-item/requirements/requirements.component';
import { PrequalificationComponent } from './components/supplier-rfq-item/prequalification/prequalification.component';
import { TermsconditionComponent } from './components/supplier-rfq-item/termscondition/termscondition.component';
import { QuotedpriceComponent } from './components/supplier-rfq-item/quotedprice/quotedprice.component';

import { SupplierdashboardComponent } from './components/supplierdashboard/supplierdashboard.component';
import { ProgressComponent } from './components/supplierdashboard/progress/progress.component';
import { ClosedComponent } from './components/supplierdashboard/closed/closed.component';
import { LeftnavComponent } from './components/shared/leftnav/leftnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SupplierRFQItemComponent,
    ProductListComponent,
    ProductItemComponent,
    DiscussionBoardComponent,
    BoardListComponent,
    AddBoardItemComponent,
    RequirementsComponent,
    PrequalificationComponent,
    TermsconditionComponent,
    QuotedpriceComponent,
    SupplierdashboardComponent,
    ProgressComponent,
    ClosedComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
