import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

//https://api.github.com/users/mojombo
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }


  getUserDetails(username:string){
    return this.http.get('https://api.github.com/users/${username}');
  }

  getRepos(repoUrl:string){
    return this.http.get(repoUrl);
  }
}
