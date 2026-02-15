import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
    isRevealed = false;
    @ViewChild('aboutContent') aboutContent!: ElementRef;

    ngAfterViewInit() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.isRevealed = true;
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('about');
        if (section) {
            observer.observe(section);
        }
    }
}
