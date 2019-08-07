import { Injectable } from '@angular/core';

// Router
import { Router } from '@angular/router';

// RxJs
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

// ngRx
import { Actions, Effect, ofType } from '@ngrx/effects';

// Admin Shared
import { SkillsActions } from '../../actions/skills';
import { SkillsService } from '../../services/skills/skills.service';

// Shared
import { APIResponse } from '../../../../shared/models/api-response.model';

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
          of(new SkillsActions.GetAllSkillsFailure({ error: error.error }))
        )
      )
    )
  );

  @Effect()
  getSkill$ = this.actions$.pipe(
    ofType(SkillsActions.SkillsActionTypes.GetSkill),
    map((action: SkillsActions.GetSkill) => action.payload.skillId),
    switchMap(skillId =>
      this.skillsService.getSkill(skillId).pipe(
        map((res: APIResponse) => {
          const skill = res.data.data;
          return new SkillsActions.GetSkillSuccess({ skill });
        }),
        catchError(error =>
          of(new SkillsActions.GetSkillFailure({ error: error.error }))
        )
      )
    )
  );

  @Effect()
  createSkill$ = this.actions$.pipe(
    ofType(SkillsActions.SkillsActionTypes.CreateSkill),
    map((action: SkillsActions.CreateSkill) => action.payload.skill),
    switchMap(skill =>
      this.skillsService.createSkill(skill).pipe(
        map((res: APIResponse) => {
          const newSkill = res.data.data;
          return new SkillsActions.CreateSkillSuccess({ skill: newSkill });
        }),
        catchError(error =>
          of(new SkillsActions.CreateSkillFailure({ error: error.error }))
        )
      )
    )
  );

  @Effect()
  updateSkill$ = this.actions$.pipe(
    ofType(SkillsActions.SkillsActionTypes.UpdateSkill),
    map((action: SkillsActions.UpdateSkill) => action.payload),
    switchMap(payload =>
      this.skillsService
        .updateSkill(payload.skillId, payload.skillChanges)
        .pipe(
          map((res: APIResponse) => {
            const updatedSkill = res.data.data;
            return new SkillsActions.UpdateSkillSuccess({
              skill: updatedSkill
            });
          }),
          catchError(error =>
            of(new SkillsActions.UpdateSkillFailure({ error: error.error }))
          )
        )
    )
  );

  @Effect()
  deleteSkill$ = this.actions$.pipe(
    ofType(SkillsActions.SkillsActionTypes.DeleteSkill),
    map((action: SkillsActions.DeleteSkill) => action.payload.skillId),
    switchMap(skillId =>
      this.skillsService.deleteSkill(skillId).pipe(
        map((res: APIResponse) => {
          return new SkillsActions.DeleteSkillSuccess({
            skillId
          });
        }),
        catchError(error =>
          of(new SkillsActions.DeleteSkillFailure({ error: error.error }))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  createSkillSuccess$ = this.actions$.pipe(
    ofType(
      SkillsActions.SkillsActionTypes.CreateSkillSuccess,
      SkillsActions.SkillsActionTypes.UpdateSkillSuccess,
      SkillsActions.SkillsActionTypes.DeleteSkillSuccess
    ),
    tap(() => {
      this.router.navigate(['/admin/skills']);
    })
  );

  constructor(
    private actions$: Actions,
    private skillsService: SkillsService,
    private router: Router
  ) {}
}
