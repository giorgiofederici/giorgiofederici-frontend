/* // ngRx
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

// Reducers
import * as fromRoot from '../../../root/reducers';
import * as fromSkills from '../reducers/skills.reducer';

// Actions
import { SkillsActions } from '../actions';

export interface APIState {
  skills: fromSkills.SkillsState;
}

export interface State extends fromRoot.State {
  api: APIState;
}

export const reducers: ActionReducerMap<
  APIState,
  SkillsActions.SkillsActionsUnion
> = {
  skills: fromSkills.reducer
};

export const selectAPIState = createFeatureSelector<State, APIState>('api');

export const selectAPISkillsState = createSelector(
  selectAPIState,
  (state: APIState) => state.skills
);

export const getSkills = createSelector(
  selectAPISkillsState,
  fromSkills.getSkills
);
 */
