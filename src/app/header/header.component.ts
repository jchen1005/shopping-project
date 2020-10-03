import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private useSub: Subscription;

  isAuthenticated = false;

  constructor(private authService: AuthService) {
  }

  // collapsed = true;
  /*@Output() featureSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }*/

  ngOnInit() {
    this.useSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.useSub.unsubscribe();
  }


  onLogout(){
    this.authService.logout();
}
}
