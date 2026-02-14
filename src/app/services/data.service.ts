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
        { name: 'Angular', icon: 'assets/icons/angular.svg', category: 'Frontend' },
        { name: 'React', icon: 'assets/icons/react.svg', category: 'Frontend' },
        { name: 'TypeScript', icon: 'assets/icons/typescript.svg', category: 'Frontend' },
        { name: 'SCSS', icon: 'assets/icons/sass.svg', category: 'Frontend' },
        { name: 'Node.js', icon: 'assets/icons/node.svg', category: 'Backend' },
        { name: 'Git', icon: 'assets/icons/git.svg', category: 'Tools' }
    ];

    constructor() { }

    getProjects(): Observable<Project[]> {
        return of(this.projects);
    }

    getSkills(): Observable<Skill[]> {
        return of(this.skills);
    }
}
