import { Injectable } from '@angular/core';

// Router
import { Router } from '@angular/router';

// RxJs
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

// ngRx
import { Actions, Effect, ofType } from '@ngrx/effects';

// Admin Shared
import { ProjectsActions } from '../../actions/projects';
import { ProjectsService } from '../../services/projects/projects.service';

// Shared
import { APIResponse } from '../../../../shared/models/api-response.model';

@Injectable()
export class ProjectsEffects {
  @Effect()
  getAllProjects$ = this.actions$.pipe(
    ofType(ProjectsActions.ProjectsActionTypes.GetAllProjects),
    switchMap(() =>
      this.projectsService.getAllProjects().pipe(
        map((res: APIResponse) => {
          const projects = res.data.data;
          return new ProjectsActions.GetAllProjectsSuccess({ projects });
        }),
        catchError(error =>
          of(new ProjectsActions.GetAllProjectsFailure({ error: error.error }))
        )
      )
    )
  );

  @Effect()
  getProject$ = this.actions$.pipe(
    ofType(ProjectsActions.ProjectsActionTypes.GetProject),
    map((action: ProjectsActions.GetProject) => action.payload.projectId),
    switchMap(projectId =>
      this.projectsService.getProject(projectId).pipe(
        map((res: APIResponse) => {
          const project = res.data.data;
          return new ProjectsActions.GetProjectSuccess({ project });
        }),
        catchError(error =>
          of(new ProjectsActions.GetProjectFailure({ error: error.error }))
        )
      )
    )
  );

  @Effect()
  createProject$ = this.actions$.pipe(
    ofType(ProjectsActions.ProjectsActionTypes.CreateProject),
    map((action: ProjectsActions.CreateProject) => action.payload.project),
    switchMap(project =>
      this.projectsService.createProject(project).pipe(
        map((res: APIResponse) => {
          const newProject = res.data.data;
          return new ProjectsActions.CreateProjectSuccess({
            project: newProject
          });
        }),
        catchError(error =>
          of(new ProjectsActions.CreateProjectFailure({ error: error.error }))
        )
      )
    )
  );

  @Effect()
  updateProject$ = this.actions$.pipe(
    ofType(ProjectsActions.ProjectsActionTypes.UpdateProject),
    map((action: ProjectsActions.UpdateProject) => action.payload),
    switchMap(payload =>
      this.projectsService
        .updateProject(payload.projectId, payload.projectChanges)
        .pipe(
          map((res: APIResponse) => {
            const updatedProject = res.data.data;
            return new ProjectsActions.UpdateProjectSuccess({
              project: updatedProject
            });
          }),
          catchError(error =>
            of(new ProjectsActions.UpdateProjectFailure({ error: error.error }))
          )
        )
    )
  );

  @Effect()
  deleteProject$ = this.actions$.pipe(
    ofType(ProjectsActions.ProjectsActionTypes.DeleteProject),
    map((action: ProjectsActions.DeleteProject) => action.payload.projectId),
    switchMap(projectId =>
      this.projectsService.deleteProject(projectId).pipe(
        map((res: APIResponse) => {
          return new ProjectsActions.DeleteProjectSuccess({
            projectId
          });
        }),
        catchError(error =>
          of(new ProjectsActions.DeleteProjectFailure({ error: error.error }))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  createProjectSuccess$ = this.actions$.pipe(
    ofType(
      ProjectsActions.ProjectsActionTypes.CreateProjectSuccess,
      ProjectsActions.ProjectsActionTypes.UpdateProjectSuccess,
      ProjectsActions.ProjectsActionTypes.DeleteProjectSuccess
    ),
    tap(() => {
      this.router.navigate(['/admin/projects']);
    })
  );

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private router: Router
  ) {}
}
