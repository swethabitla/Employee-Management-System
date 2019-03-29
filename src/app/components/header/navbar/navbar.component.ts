import { Component, OnInit, HostListener } from '@angular/core';
import { UserFormAnimationService } from '../../../services/userform-animation';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navMenu = 'inactive';
  user: string = null;
  links = [
    { name: 'Home', url: '/' },
    { name: 'Employee', url: '/clients' },
    { name: 'Chat', url: '/chat' },
    {name:'Contact Us',url:'/contactus'},
    
  ];

  innerWidth: number;

  @HostListener('window:resize')
  
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor(
    private animationService: UserFormAnimationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.authService.getAuth().subscribe(user => {
      this.user = user ? user.email : null;
    });
  }

  toggleForm(form: string): void {
    this.animationService.toggle(form);
  }

  toggleMenu(): void {
    this.navMenu = this.navMenu === 'active' ? 'inactive' : 'active';
  }

  logout(): void {
    this.authService.logout();
  }
}
