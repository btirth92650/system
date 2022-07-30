import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { StudentComponent } from './student/student.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AdminComponent } from './admin.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ManageInstructorComponent } from './manage-instructor/manage-instructor.component';
import { MaintanenceComponent } from './maintanence/maintanence.component';
import { UsersComponent } from './users/users.component';
import { ReportComponent } from './report/report.component';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { ClickOutsideDirective } from '../clickOutside.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupChildComponent } from './signup-child/signup-child.component'; 
import { FilterPipe } from '../pipe/filter.pipe';
import { ReportChildComponent } from './report-child/report-child.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
     SidebarComponent,
    StudentComponent,
    TransactionComponent,
    AdminComponent,
    AnnouncementComponent,
    ManageInstructorComponent,
    MaintanenceComponent,
    UsersComponent,
    ReportComponent,
    NavbarComponent,
    ClickOutsideDirective,
    SignupChildComponent,
    FilterPipe,
    ReportChildComponent,
    SearchPipe,
    
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminModule { }
