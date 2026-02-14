import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/skill.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
    skills$!: Observable<Skill[]>;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.skills$ = this.dataService.getSkills();
    }
}
