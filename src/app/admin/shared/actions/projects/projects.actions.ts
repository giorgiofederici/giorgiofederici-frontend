// ngRx
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

// Shared
import { Project } from '../../models/projects/project.model';

export enum ProjectsActionTypes {
  // Get All Projects
  GetAllProjects = '[Projects] Get All Projects',
  GetAllProjectsSuccess = '[Projects/API] Get All Projects Success',
  GetAllProjectsFailure = '[Projects/API] Get All Projects Failure',
  // Get Project
  GetProject = '[Projects] Get Project',
  GetProjectSuccess = '[Projects/API] Get Project Success',
  GetProjectFailure = '[Projects/API] Get Project Failure',
  // Create Project
  CreateProject = '[Projects] Create Project',
  CreateProjectSuccess = '[Projects/API] Create Project Success',
  CreateProjectFailure = '[Projects/API] Create Project Failure',
  // Update Project
  UpdateProject = '[Projects] Update Project',
  UpdateProjectSuccess = '[Projects/API] Update Project Success',
  UpdateProjectFailure = '[Projects/API] Update Project Failure',
  // Delete Project
  DeleteProject = '[Projects] Delete Project',
  DeleteProjectSuccess = '[Projects/API] Delete Project Success',
  DeleteProjectFailure = '[Projects/API] Delete Project Failure'
}

// Get All Projects
export class GetAllProjects implements Action {
  readonly type = ProjectsActionTypes.GetAllProjects;
}

export class GetAllProjectsSuccess implements Action {
  readonly type = ProjectsActionTypes.GetAllProjectsSuccess;
  constructor(public payload: { projects: Project[] }) {}
}

export class GetAllProjectsFailure implements Action {
  readonly type = ProjectsActionTypes.GetAllProjectsFailure;
  constructor(public payload: { error: any }) {}
}

// Get Project
export class GetProject implements Action {
  readonly type = ProjectsActionTypes.GetProject;
  constructor(public payload: { projectId: string }) {}
}

export class GetProjectSuccess implements Action {
  readonly type = ProjectsActionTypes.GetProjectSuccess;
  constructor(public payload: { project: Project }) {}
}

export class GetProjectFailure implements Action {
  readonly type = ProjectsActionTypes.GetProjectFailure;
  constructor(public payload: { error: any }) {}
}

// Create Project
export class CreateProject implements Action {
  readonly type = ProjectsActionTypes.CreateProject;
  constructor(public payload: { project: Project }) {}
}

export class CreateProjectSuccess implements Action {
  readonly type = ProjectsActionTypes.CreateProjectSuccess;
  constructor(public payload: { project: Project }) {}
}

export class CreateProjectFailure implements Action {
  readonly type = ProjectsActionTypes.CreateProjectFailure;
  constructor(public payload: { error: any }) {}
}

// Update Project
export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
  constructor(public payload: { projectId: string; projectChanges: Project }) {}
}

export class UpdateProjectSuccess implements Action {
  readonly type = ProjectsActionTypes.UpdateProjectSuccess;
  constructor(public payload: { project: Update<Project> }) {}
}

export class UpdateProjectFailure implements Action {
  readonly type = ProjectsActionTypes.UpdateProjectFailure;
  constructor(public payload: { error: any }) {}
}

// Delete Project
export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(public payload: { projectId: string }) {}
}

export class DeleteProjectSuccess implements Action {
  readonly type = ProjectsActionTypes.DeleteProjectSuccess;
  constructor(public payload: { projectId: string }) {}
}

export class DeleteProjectFailure implements Action {
  readonly type = ProjectsActionTypes.DeleteProjectFailure;
  constructor(public payload: { error: any }) {}
}

export type ProjectsActionsUnion =
  | GetAllProjects
  | GetAllProjectsSuccess
  | GetAllProjectsFailure
  | GetProject
  | GetProjectSuccess
  | GetProjectFailure
  | CreateProject
  | CreateProjectSuccess
  | CreateProjectFailure
  | UpdateProject
  | UpdateProjectSuccess
  | UpdateProjectFailure
  | DeleteProject
  | DeleteProjectSuccess
  | DeleteProjectFailure;
