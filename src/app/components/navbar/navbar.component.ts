import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    isScrolled = false;
    isMenuOpen = false;
    isRippling = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 50;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
        this.isMenuOpen = false;
    }

    scrollToTop(event: Event) {
        event.preventDefault();
        this.isRippling = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => this.isRippling = false, 600);
    }
}
