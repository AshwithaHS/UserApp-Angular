import { Component, OnInit, Input, 
  OnChanges,
  ChangeDetectorRef } from '@angular/core';

  import { GithubService } from './../../services/github.service';
  
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user;

  constructor( private githubService: GithubService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

 

}
