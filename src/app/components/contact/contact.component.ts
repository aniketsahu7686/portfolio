import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    contactForm: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.contactForm.valid) {
            console.log('Form Submitted!', this.contactForm.value);
            // Simulate API call
            setTimeout(() => {
                alert('Message sent successfully! (Console Logged)');
                this.contactForm.reset();
                this.submitted = false;
            }, 1000);
        }
    }
}
