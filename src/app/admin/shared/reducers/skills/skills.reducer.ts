// NgRx
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Actions
import { SkillsActions } from '../../actions/skills';

// Models
import { Skill } from '../../models/skills/skill.model';

export interface SkillsState extends EntityState<Skill> {
  allSkillsLoading: boolean;
  allSkillsError: string | null;
  skillLoading: boolean;
  skillError: string | null;
  createLoading: boolean;
  createError: string | null;
  updateLoading: boolean;
  updateError: string | null;
  deleteLoading: boolean;
  deleteError: string | null;
}

export const adapter: EntityAdapter<Skill> = createEntityAdapter<Skill>({
  selectId: skill => skill._id
});

export const initialSkillsState: SkillsState = adapter.getInitialState({
  allSkillsLoading: false,
  allSkillsError: null,
  skillLoading: false,
  skillError: null,
  createLoading: false,
  createError: null,
  updateLoading: false,
  updateError: null,
  deleteLoading: false,
  deleteError: null
});

export function skillsReducer(
  state = initialSkillsState,
  action:
    | SkillsActions.GetAllSkills
    | SkillsActions.GetAllSkillsSuccess
    | SkillsActions.GetAllSkillsFailure
    | SkillsActions.GetSkill
    | SkillsActions.GetSkillSuccess
    | SkillsActions.GetSkillFailure
    | SkillsActions.CreateSkill
    | SkillsActions.CreateSkillSuccess
    | SkillsActions.CreateSkillFailure
    | SkillsActions.UpdateSkill
    | SkillsActions.UpdateSkillSuccess
    | SkillsActions.UpdateSkillFailure
    | SkillsActions.DeleteSkill
    | SkillsActions.DeleteSkillSuccess
    | SkillsActions.DeleteSkillFailure
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
    case SkillsActions.SkillsActionTypes.GetSkill: {
      return {
        ...state,
        skillLoading: true,
        skillError: null
      };
    }
    case SkillsActions.SkillsActionTypes.GetSkillSuccess: {
      return adapter.addOne(action.payload.skill, {
        ...state,
        skillLoading: false,
        skillError: null
      });
    }
    case SkillsActions.SkillsActionTypes.GetSkillFailure: {
      return {
        ...state,
        skillLoading: true,
        skillError: action.payload.error
      };
    }
    case SkillsActions.SkillsActionTypes.CreateSkill: {
      return {
        ...state,
        createLoading: true,
        createError: null
      };
    }
    case SkillsActions.SkillsActionTypes.CreateSkillSuccess: {
      return adapter.addOne(action.payload.skill, {
        ...state,
        createLoading: false,
        createError: null
      });
    }
    case SkillsActions.SkillsActionTypes.CreateSkillFailure: {
      return {
        ...state,
        createLoading: false,
        createError: action.payload.error
      };
    }
    case SkillsActions.SkillsActionTypes.UpdateSkill: {
      return {
        ...state,
        updateLoading: true,
        updateError: null
      };
    }
    case SkillsActions.SkillsActionTypes.UpdateSkillSuccess: {
      return adapter.updateOne(action.payload.skill, {
        ...state,
        updateLoading: false,
        updateError: null
      });
    }
    case SkillsActions.SkillsActionTypes.UpdateSkillFailure: {
      return {
        ...state,
        updateLoading: false,
        updateError: action.payload.error
      };
    }
    case SkillsActions.SkillsActionTypes.DeleteSkill: {
      return {
        ...state,
        deleteLoading: true,
        deleteError: null
      };
    }
    case SkillsActions.SkillsActionTypes.DeleteSkillSuccess: {
      return adapter.removeOne(action.payload.skillId, {
        ...state,
        deleteLoading: false,
        deleteError: null
      });
    }
    case SkillsActions.SkillsActionTypes.DeleteSkillFailure: {
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

export const selectSkillLoading = createSelector(
  selectSkillsState,
  skillsState => {
    return skillsState.skillLoading;
  }
);

export const selectSkillError = createSelector(
  selectSkillsState,
  skillsState => skillsState.skillError
);

export const selectCreateSkillLoading = createSelector(
  selectSkillsState,
  skillsState => {
    return skillsState.createLoading;
  }
);

export const selectCreateSkillError = createSelector(
  selectSkillsState,
  skillsState => skillsState.createError
);

export const selectUpdateSkillLoading = createSelector(
  selectSkillsState,
  skillsState => {
    return skillsState.updateLoading;
  }
);

export const selectUpdateSkillError = createSelector(
  selectSkillsState,
  skillsState => skillsState.updateError
);

export const selectDeleteSkillLoading = createSelector(
  selectSkillsState,
  skillsState => {
    return skillsState.deleteLoading;
  }
);

export const selectDeleteSkillError = createSelector(
  selectSkillsState,
  skillsState => skillsState.deleteError
);
