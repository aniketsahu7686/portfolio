import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/skill.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
    groupedSkills$!: Observable<{ category: string, skills: Skill[] }[]>;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.groupedSkills$ = this.dataService.getSkills().pipe(
            map(skills => {
                const groups = skills.reduce((acc, skill) => {
                    if (!acc[skill.category]) {
                        acc[skill.category] = [];
                    }
                    acc[skill.category].push(skill);
                    return acc;
                }, {} as { [key: string]: Skill[] });

                const order = ['USING NOW', 'DEVOPS & CLOUD', 'LEARNING'];
                return order.map(category => ({
                    category,
                    skills: groups[category] || []
                }));
            })
        );
    }
}
