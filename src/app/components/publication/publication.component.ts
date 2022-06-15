import { Component, OnInit } from '@angular/core';
import {  Router, Params, ActivatedRoute } from '@angular/router';
import { Follow } from 'src/app/models/follow';
import { Publication } from 'src/app/models/publication';
import { User } from 'src/app/models/user';
import { FollowService } from 'src/app/service/follow.service';
import { GLOBAL } from 'src/app/service/global';
import { UploadService } from 'src/app/service/upload.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
  providers: [UserService, UploadService, FollowService]

})

export class PublicationComponent implements OnInit {

  public title: string;
  public users: any;
  public user: any ;
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

  constructor(private us: UserService,
              private _route: ActivatedRoute,
              private up: UploadService,
              private fs:FollowService,

              private _router:Router,
              ) {

    this.title = 'Sidebar' ;
    this.status = '' ;
    this.identity = this.users;
    this.token = this.us.getToken();
    this.url = GLOBAL.url ;
    this.publication = new Publication("", "", "","", "");
  }


  ngOnInit(): void {
  }


  getToken() {
    this.us.signup(this.user, 'true').subscribe(
      response => {
        this.token = response.token;
        if (this.token.length <= 0) {
          this.status = 'error';
        } else {
          // PERSISTIR TOKEN DEL USUARIO
          localStorage.setItem('token', JSON.stringify(this.token));

          //Conseguir los contadores o estadisticas del usuario

          this.getCounters();
          console.log(response)

        }

      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    )
  }

  getCounters(){

    this.us.getCounters().subscribe(

      response => {
        localStorage.setItem('stats', JSON.stringify(response));
        this.stats = 'success';
        console.log(response);


        },
      error => {

      }

    )

  }


}
