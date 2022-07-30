import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AdminComponent } from './admin.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { MaintanenceComponent } from './maintanence/maintanence.component';
import { ManageInstructorComponent } from './manage-instructor/manage-instructor.component';
import { ReportComponent } from './report/report.component';
import { StudentComponent } from './student/student.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'',redirectTo:'student',pathMatch:'full'},
      {path:'student',component:StudentComponent},
      {path:'transaction',component:TransactionComponent},
      {path:'announcement',component:AnnouncementComponent},
      {path:'manage-instructor',component:ManageInstructorComponent},
      {path:'maintanence',component:MaintanenceComponent},
      {path:'user',component:UsersComponent},
      {path:'report',component:ReportComponent},

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
