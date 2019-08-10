// NgRx
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Actions
import { ProjectsActions } from '../../actions/projects';

// Models
import { Project } from '../../models/projects/project.model';

export interface ProjectsState extends EntityState<Project> {
  allProjectsLoading: boolean;
  allProjectsError: string | null;
  projectLoading: boolean;
  projectError: string | null;
  createLoading: boolean;
  createError: string | null;
  updateLoading: boolean;
  updateError: string | null;
  deleteLoading: boolean;
  deleteError: string | null;
}

export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>({
  selectId: project => project._id
});

export const initialProjectsState: ProjectsState = adapter.getInitialState({
  allProjectsLoading: false,
  allProjectsError: null,
  projectLoading: false,
  projectError: null,
  createLoading: false,
  createError: null,
  updateLoading: false,
  updateError: null,
  deleteLoading: false,
  deleteError: null
});

export function projectsReducer(
  state = initialProjectsState,
  action:
    | ProjectsActions.GetAllProjects
    | ProjectsActions.GetAllProjectsSuccess
    | ProjectsActions.GetAllProjectsFailure
    | ProjectsActions.GetProject
    | ProjectsActions.GetProjectSuccess
    | ProjectsActions.GetProjectFailure
    | ProjectsActions.CreateProject
    | ProjectsActions.CreateProjectSuccess
    | ProjectsActions.CreateProjectFailure
    | ProjectsActions.UpdateProject
    | ProjectsActions.UpdateProjectSuccess
    | ProjectsActions.UpdateProjectFailure
    | ProjectsActions.DeleteProject
    | ProjectsActions.DeleteProjectSuccess
    | ProjectsActions.DeleteProjectFailure
): ProjectsState {
  switch (action.type) {
    case ProjectsActions.ProjectsActionTypes.GetAllProjects: {
      return {
        ...state,
        allProjectsLoading: true,
        allProjectsError: null
      };
    }
    case ProjectsActions.ProjectsActionTypes.GetAllProjectsSuccess: {
      return adapter.addAll(action.payload.projects, {
        ...state,
        allProjectsLoading: false,
        allProjectsError: null
      });
    }
    case ProjectsActions.ProjectsActionTypes.GetAllProjectsFailure: {
      return {
        ...state,
        allProjectsLoading: false,
        allProjectsError: action.payload.error
      };
    }
    case ProjectsActions.ProjectsActionTypes.GetProject: {
      return {
        ...state,
        projectLoading: true,
        projectError: null
      };
    }
    case ProjectsActions.ProjectsActionTypes.GetProjectSuccess: {
      return adapter.addOne(action.payload.project, {
        ...state,
        projectLoading: false,
        projectError: null
      });
    }
    case ProjectsActions.ProjectsActionTypes.GetProjectFailure: {
      return {
        ...state,
        projectLoading: true,
        projectError: action.payload.error
      };
    }
    case ProjectsActions.ProjectsActionTypes.CreateProject: {
      return {
        ...state,
        createLoading: true,
        createError: null
      };
    }
    case ProjectsActions.ProjectsActionTypes.CreateProjectSuccess: {
      return adapter.addOne(action.payload.project, {
        ...state,
        createLoading: false,
        createError: null
      });
    }
    case ProjectsActions.ProjectsActionTypes.CreateProjectFailure: {
      return {
        ...state,
        createLoading: false,
        createError: action.payload.error
      };
    }
    case ProjectsActions.ProjectsActionTypes.UpdateProject: {
      return {
        ...state,
        updateLoading: true,
        updateError: null
      };
    }
    case ProjectsActions.ProjectsActionTypes.UpdateProjectSuccess: {
      return adapter.updateOne(action.payload.project, {
        ...state,
        updateLoading: false,
        updateError: null
      });
    }
    case ProjectsActions.ProjectsActionTypes.UpdateProjectFailure: {
      return {
        ...state,
        updateLoading: false,
        updateError: action.payload.error
      };
    }
    case ProjectsActions.ProjectsActionTypes.DeleteProject: {
      return {
        ...state,
        deleteLoading: true,
        deleteError: null
      };
    }
    case ProjectsActions.ProjectsActionTypes.DeleteProjectSuccess: {
      return adapter.removeOne(action.payload.projectId, {
        ...state,
        deleteLoading: false,
        deleteError: null
      });
    }
    case ProjectsActions.ProjectsActionTypes.DeleteProjectFailure: {
      return {
        ...state,
        deleteLoading: false,
        deleteError: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}

export const selectProjectsState = createFeatureSelector<ProjectsState>(
  'projects'
);

export const selectAllProjects = createSelector(
  selectProjectsState,
  adapter.getSelectors().selectAll
);

export const selectAllProjectsLoading = createSelector(
  selectProjectsState,
  projectsState => projectsState.allProjectsLoading
);

export const selectAllProjectsError = createSelector(
  selectProjectsState,
  projectsState => projectsState.allProjectsError
);

export const selectProjectById = (id: string) =>
  createSelector(
    selectProjectsState,
    projectsState => projectsState.entities[id]
  );

export const selectProjectLoading = createSelector(
  selectProjectsState,
  projectsState => {
    return projectsState.projectLoading;
  }
);

export const selectProjectError = createSelector(
  selectProjectsState,
  projectsState => projectsState.projectError
);

export const selectCreateProjectLoading = createSelector(
  selectProjectsState,
  projectsState => {
    return projectsState.createLoading;
  }
);

export const selectCreateProjectError = createSelector(
  selectProjectsState,
  projectsState => projectsState.createError
);

export const selectUpdateProjectLoading = createSelector(
  selectProjectsState,
  projectsState => {
    return projectsState.updateLoading;
  }
);

export const selectUpdateProjectError = createSelector(
  selectProjectsState,
  projectsState => projectsState.updateError
);

export const selectDeleteProjectLoading = createSelector(
  selectProjectsState,
  projectsState => {
    return projectsState.deleteLoading;
  }
);

export const selectDeleteProjectError = createSelector(
  selectProjectsState,
  projectsState => projectsState.deleteError
);
