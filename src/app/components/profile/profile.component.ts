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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService, FollowService]
})

export class ProfileComponent implements OnInit {

  public title: string;
  public user: User;
  public status: string;
  public identity : any;
  public token: string;
  public stats: any;
  public url: string;
  public follow: any;

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private us: UserService,
    private fs: FollowService

  ) {
      this.title = 'Perfil';
      this.identity = this.us.getIdentity();
      this.token = this.us.getToken();
      this.url = GLOBAL.url ;
   }

  ngOnInit(): void {
    console.log('Profile.componente cargado correctamente!!!');
  }

}
