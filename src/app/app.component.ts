import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from './auth/token-storage.service';
import { AuthService } from './auth/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
  info: any;
  currentUser:string;
  isrole:string;

  constructor(public tokenStorage: TokenStorageService,
    private authService: AuthService,
    private route: ActivatedRoute,
        private router: Router,
    ) {
     this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };
     }

  ngOnInit() {
    this.currentUser = this.tokenStorage.getUsername();
    
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
    
      this.roles.every(role => {
         this.isrole = role;

        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

    

    $(document).ready(function(){
      $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
  });
  

  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}

    
