import { Injectable } from '@angular/core';
import { Project } from '../models/project.interface';
import { Skill } from '../models/skill.interface';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private projects: Project[] = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce application with cart and checkout.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: ['Angular', 'Node.js', 'MongoDB'],
            links: {
                demo: '#',
                github: '#'
            }
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A productivity tool for managing daily tasks and projects.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: ['React', 'Firebase', 'Tailwind'],
            links: {
                demo: '#',
                github: '#'
            }
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'This very website you are looking at!',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: ['Angular', 'SCSS', 'Responsive'],
            links: {
                demo: '#',
                github: '#'
            }
        }
    ];

    private skills: Skill[] = [
        // USING NOW
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', category: 'USING NOW' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', category: 'USING NOW' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', category: 'USING NOW' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'USING NOW' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', category: 'USING NOW' },
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', category: 'USING NOW' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', category: 'USING NOW' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', category: 'USING NOW' },

        // DEVOPS & CLOUD
        { name: 'AWS (EC2, S3, ECS, IAM)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'DEVOPS & CLOUD' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', category: 'DEVOPS & CLOUD' },
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', category: 'DEVOPS & CLOUD' },
        { name: 'SonarQube', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg', category: 'DEVOPS & CLOUD' },
        { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', category: 'DEVOPS & CLOUD' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', category: 'DEVOPS & CLOUD' },
        { name: 'Maven', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg', category: 'DEVOPS & CLOUD' },

        // LEARNING
        { name: 'AI', icon: 'https://img.icons8.com/color/96/artificial-intelligence.png', category: 'LEARNING' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', category: 'LEARNING' },
        { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg', category: 'LEARNING' },
        { name: 'System Design', icon: 'https://img.icons8.com/dusk/64/system-task.png', category: 'LEARNING' },
        { name: 'Microservices', icon: 'https://img.icons8.com/dusk/64/server.png', category: 'LEARNING' }
    ];

    constructor() { }

    getProjects(): Observable<Project[]> {
        return of(this.projects);
    }

    getSkills(): Observable<Skill[]> {
        return of(this.skills);
    }
}
