import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';

// RxJS
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

// ngRx
import { select, Store } from '@ngrx/store';

// Reducer
import * as fromProjects from '../../reducers/projects/projects.reducer';

// Actions
import { ProjectsActions } from '../../actions/projects/index';

// Model
import { Project } from '../../models/projects/project.model';

// Service
import { ProjectsService } from '../../services/projects/projects.service';

export class ProjectResolver implements Resolve<Project> {
  constructor(
    private store: Store<fromProjects.ProjectsState>,
    private projectsService: ProjectsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Project> {
    const projectId = route.params.id;
    return this.store.pipe(
      select(fromProjects.selectProjectById(projectId)),
      tap(project => {
        if (!project) {
          this.store.dispatch(new ProjectsActions.GetProject({ projectId }));
        }
      }),
      filter(project => !!project),
      first()
    );
  }
}
