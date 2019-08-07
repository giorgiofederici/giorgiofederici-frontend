// NgRx
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Actions
import { SkillsActions } from '../actions';

// Models
import { Skill } from '../models/skill.model';

export interface SkillsState extends EntityState<Skill> {
  allSkillsLoading: boolean;
  allSkillsError: string | null;
}

export const adapter: EntityAdapter<Skill> = createEntityAdapter<Skill>({
  selectId: skill => skill._id
});

export const initialSkillsState: SkillsState = adapter.getInitialState({
  allSkillsLoading: false,
  allSkillsError: null
});

export function skillsReducer(
  state = initialSkillsState,
  action:
    | SkillsActions.GetAllSkills
    | SkillsActions.GetAllSkillsSuccess
    | SkillsActions.GetAllSkillsFailure
): SkillsState {
  switch (action.type) {
    case SkillsActions.SkillsActionTypes.GetAllSkills: {
      return {
        ...state,
        allSkillsLoading: true,
        allSkillsError: null
      };
    }
    case SkillsActions.SkillsActionTypes.GetAllSkillsSuccess: {
      return adapter.addAll(action.payload.skills, {
        ...state,
        allSkillsLoading: false,
        allSkillsError: null
      });
    }
    case SkillsActions.SkillsActionTypes.GetAllSkillsFailure: {
      return {
        ...state,
        allSkillsLoading: false,
        allSkillsError: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}

export const selectSkillsState = createFeatureSelector<SkillsState>('skills');

export const selectAllSkills = createSelector(
  selectSkillsState,
  adapter.getSelectors().selectAll
);

export const selectAllSkillsLoading = createSelector(
  selectSkillsState,
  skillsState => skillsState.allSkillsLoading
);

export const selectAllSkillsError = createSelector(
  selectSkillsState,
  skillsState => skillsState.allSkillsError
);

export const selectSkillById = (id: string) =>
  createSelector(
    selectSkillsState,
    skillsState => skillsState.entities[id]
  );
