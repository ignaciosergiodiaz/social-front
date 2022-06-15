import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from './service/user.service';
import { GLOBAL } from 'src/app/service/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})

export class AppComponent implements OnInit, DoCheck{
  public title:string;
  public identity: any ;
  public token: any;
  public url: string ;

  constructor(
    private _userService: UserService,
    private _router: Router
  ){
     this.title = 'SOCIAL';
     this.url = GLOBAL.url ;
  }

  ngOnInit():void{
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck(): void {
    this.identity = this._userService.getIdentity();
  }

  logout():void {
    localStorage.clear();
    this._router.navigate(['/login']);
    this.identity = null ;
  }


}
