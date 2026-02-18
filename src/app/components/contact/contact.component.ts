import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    form = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    submitted = false;
    loading = false;

    onInput() {
        this.submitted = false;
    }

    sendEmail(contactForm: NgForm) {
        this.submitted = true;

        if (contactForm.invalid) {
            // Scroll to first invalid field smoothly
            setTimeout(() => {
                const firstError = document.querySelector('.form-group input.error, .form-group textarea.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    (firstError as HTMLElement).focus();
                }
            });
            return;
        }

        this.loading = true;

        emailjs.send(
            'service_h9bz33i',
            'template_8kzgbcj',
            this.form,
            '6DPfyh1btH2-MCwMP'
        ).then(
            () => {
                this.form = { name: '', email: '', phone: '', message: '' };
                this.submitted = false;
                this.loading = false;
                contactForm.resetForm();
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Message sent successfully!',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#1f2937',
                    color: '#fff'
                });
            },
            (error) => {
                this.loading = false;
                console.error('EmailJS Error:', error);
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed to send message',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#1f2937',
                    color: '#fff'
                });
            }
        );
    }
}
