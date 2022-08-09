import { Component, OnInit } from '@angular/core';
import {  Router, Params, ActivatedRoute } from '@angular/router';
import { Follow } from 'src/app/models/follow';
import { Publication } from 'src/app/models/publication';
import { User } from 'src/app/models/user';
import { FollowService } from 'src/app/service/follow.service';
import { GLOBAL } from 'src/app/service/global';
import { PublicationService } from 'src/app/service/publication.service';
import { UploadService } from 'src/app/service/upload.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [UserService, UploadService, FollowService, PublicationService]

})

export class SidebarComponent implements OnInit {

  public title: string;
  public users: any;
  public identity: any;
  public token:any ;
  public status: string;
  public url: string ;
  public page: any ;
  public next_page: any ;
  public prev_page: any ;
  public follows: any;
  public following: any;
  public followed: any;
  public total: any ;
  public pages : any ;
  public _id: any;
  public stats: any ;
  public publication: Publication;

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  constructor(private us: UserService,
              private _route: ActivatedRoute,
              private up: UploadService,
              private fs:FollowService,
              private ps:PublicationService,
              private _router:Router,
              ) {

    this.title = 'Sidebar' ;
    this.status = '' ;
    this.identity = this.users;
    this.token = this.us.getToken();
    this.url = GLOBAL.url ;
    this.publication = new Publication("", "", "","", "");
  }

  DoCheck(): void {
    this.identity = this.us.getIdentity();
    this.token = this.us.getToken();

    this.stats = this.us.getStats();
    console.log(this.identity);
  }

  ngOnInit(): void {
    this.identity = this.us.getIdentity();
    this.token = this.us.getToken();

    this.stats = this.us.getStats();
    console.log(this.identity);
  }

  onSubmit(){

    this.ps.addPublication(this.publication).subscribe(

        response => {

          if(response.publication){
            // this.publication = response.publication ;
            this.status = 'success';

          }else{
            this.status = 'error';
          }

        },

        error => {

          var errorMessage = <any>error;
          console.log(errorMessage);
          if(errorMessage != null){
            this.status = 'error';
          }

        }

    )}

}
