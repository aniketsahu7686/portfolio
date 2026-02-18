import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
    typedText = '';
    private roles = [
        'Software Developer',
        'Java Full Stack Developer',
        'DevOps Engineer',
        'AWS Cloud Engineer',
    ];
    private roleIndex = 0;
    private charIndex = 0;
    private isDeleting = false;
    private typingSpeed = 80;
    private deletingSpeed = 40;
    private pauseAfterType = 2000;
    private pauseAfterDelete = 500;
    private timer: any;

    ngOnInit(): void {
        this.type();
    }

    ngOnDestroy(): void {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    private type(): void {
        const currentRole = this.roles[this.roleIndex];

        if (!this.isDeleting) {
            // Typing
            this.typedText = currentRole.substring(0, this.charIndex + 1);
            this.charIndex++;

            if (this.charIndex === currentRole.length) {
                // Finished typing, pause then delete
                this.timer = setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, this.pauseAfterType);
                return;
            }

            this.timer = setTimeout(() => this.type(), this.typingSpeed);
        } else {
            // Deleting
            this.typedText = currentRole.substring(0, this.charIndex - 1);
            this.charIndex--;

            if (this.charIndex === 0) {
                // Finished deleting, move to next role
                this.isDeleting = false;
                this.roleIndex = (this.roleIndex + 1) % this.roles.length;
                this.timer = setTimeout(() => this.type(), this.pauseAfterDelete);
                return;
            }

            this.timer = setTimeout(() => this.type(), this.deletingSpeed);
        }
    }
}
