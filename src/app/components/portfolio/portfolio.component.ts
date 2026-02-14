import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
    projects$!: Observable<Project[]>;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.projects$ = this.dataService.getProjects();
    }
}
