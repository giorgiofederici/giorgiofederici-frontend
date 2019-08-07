import { Injectable } from '@angular/core';

// Router
import { Router } from '@angular/router';

// RxJs
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

// ngRx
import { Actions, Effect, ofType } from '@ngrx/effects';

// Admin Shared
import { SkillsActions } from '../actions';
import { SkillsService } from '../services/skills.service';

// Shared
import { APIResponse } from '../../../shared/models/api-response.model';

@Injectable()
export class SkillsEffects {
  @Effect()
  getAllSkills$ = this.actions$.pipe(
    ofType(SkillsActions.SkillsActionTypes.GetAllSkills),
    switchMap(() =>
      this.skillsService.getAllSkills().pipe(
        map((res: APIResponse) => {
          const skills = res.data.data;
          return new SkillsActions.GetAllSkillsSuccess({ skills });
        }),
        catchError(error =>
          of(new SkillsActions.GetAllSkillsFailure({ error }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private skillsService: SkillsService,
    private router: Router
  ) {}
}
