import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    successMessage = '';
    errorMessage = '';
    loading = false;

    sendEmail() {
        this.submitted = true;
        this.successMessage = '';
        this.errorMessage = '';

        if (!this.form.name || !this.form.email || !this.form.message) {
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
