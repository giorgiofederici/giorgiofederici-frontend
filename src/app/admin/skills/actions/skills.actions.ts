// ngRx
import { Action } from '@ngrx/store';

// Shared
import { Skill } from '../models/skill.model';

export enum SkillsActionTypes {
  // Get All Skills
  GetAllSkills = '[Skills] Get All Skills',
  GetAllSkillsSuccess = '[Skills/API] Get All Skills Success',
  GetAllSkillsFailure = '[Skills/API] Get All Skills Failure',
  // Get Skill
  GetSkill = '[Skills] Get Skill',
  GetSkillSuccess = '[Skills/API] Get Skill Success',
  GetSkillFailure = '[Skills/API] Get Skill Failure'
}

// Get All Skills
export class GetAllSkills implements Action {
  readonly type = SkillsActionTypes.GetAllSkills;
}

export class GetAllSkillsSuccess implements Action {
  readonly type = SkillsActionTypes.GetAllSkillsSuccess;
  constructor(public payload: { skills: Skill[] }) {}
}

export class GetAllSkillsFailure implements Action {
  readonly type = SkillsActionTypes.GetAllSkillsFailure;
  constructor(public payload: { error: any }) {}
}

// Get Skill
export class GetSkill implements Action {
  readonly type = SkillsActionTypes.GetSkill;
  constructor(public payload: { skill: Skill }) {}
}

export class GetSkillSuccess implements Action {
  readonly type = SkillsActionTypes.GetSkillSuccess;
  constructor(public payload: { skills: Skill[] }) {}
}

export class GetSkillFailure implements Action {
  readonly type = SkillsActionTypes.GetSkillFailure;
  constructor(public payload: { error: any }) {}
}

export type SkillsActionsUnion =
  | GetAllSkills
  | GetAllSkillsSuccess
  | GetAllSkillsFailure
  | GetSkill
  | GetSkillSuccess
  | GetSkillFailure;
