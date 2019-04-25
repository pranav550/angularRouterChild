import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student/student.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { StudentregisterationComponent } from "./studentregisteration/studentregisteration.component";
const routes: Routes = [
  { path: "", redirectTo: "student", pathMatch: "full" },
  {
    path: "student",
    children: [
      { path: "studentdetails", component: StudentdetailsComponent },
      { path: "studentregisteration", component: StudentregisterationComponent }
    ],
    component: StudentComponent
  },

  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
