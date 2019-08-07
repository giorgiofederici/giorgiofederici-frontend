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
import * as fromSkills from '../../reducers/skills/skills.reducer';

// Actions
import { SkillsActions } from '../../actions/skills/index';

// Model
import { Skill } from '../../models/skills/skill.model';

// Service
import { SkillsService } from '../../services/skills/skills.service';

export class SkillResolver implements Resolve<Skill> {
  constructor(
    private store: Store<fromSkills.SkillsState>,
    private skillsService: SkillsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Skill> {
    const skillId = route.params.id;
    return this.store.pipe(
      select(fromSkills.selectSkillById(skillId)),
      tap(skill => {
        if (!skill) {
          this.store.dispatch(new SkillsActions.GetSkill({ skillId }));
        }
      }),
      filter(skill => !!skill),
      first()
    );
  }
}
