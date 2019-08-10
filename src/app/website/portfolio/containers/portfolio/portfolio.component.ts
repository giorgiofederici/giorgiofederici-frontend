import { Component, OnInit } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// ngRx
import { Store, select } from '@ngrx/store';

// Reducers
import * as fromProjects from '../../../../admin/shared/reducers/projects/projects.reducer';

// Actions
import { ProjectsActions } from '../../../../admin/shared/actions/projects';

// Shared
import { Project } from '../../../../admin/shared/models/projects/project.model';

@Component({
  selector: 'website-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private store: Store<fromProjects.ProjectsState>) {
    this.projects$ = this.store.pipe(select(fromProjects.selectAllProjects));
  }

  ngOnInit() {
    this.store.dispatch(new ProjectsActions.GetAllProjects());
  }
}
