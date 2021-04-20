import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata:any;
  user = null;
  userName: string;
  error = null;
  constructor(private http:HttpClient,
     private ref: ChangeDetectorRef,
    private githubService: GithubService) { }

  ngOnInit(): void {
    let response=this.http.get("https://api.github.com/users");
    response.subscribe(data => this.userdata = (data));
    console.log(this.userdata);

  }
  
   clciklink(eveVal:number) {
     debugger;
     this.githubService.getUserDetails(eveVal).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
        console.log(this.user);
      },
      (err) => {
        this.user = null;
        this.error = 'User not found';
        this.ref.detectChanges();
      }
    );
  }
}


