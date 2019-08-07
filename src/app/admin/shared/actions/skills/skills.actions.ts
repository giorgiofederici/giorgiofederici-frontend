// ngRx
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

// Shared
import { Skill } from '../../models/skills/skill.model';

export enum SkillsActionTypes {
  // Get All Skills
  GetAllSkills = '[Skills] Get All Skills',
  GetAllSkillsSuccess = '[Skills/API] Get All Skills Success',
  GetAllSkillsFailure = '[Skills/API] Get All Skills Failure',
  // Get Skill
  GetSkill = '[Skills] Get Skill',
  GetSkillSuccess = '[Skills/API] Get Skill Success',
  GetSkillFailure = '[Skills/API] Get Skill Failure',
  // Create Skill
  CreateSkill = '[Skills] Create Skill',
  CreateSkillSuccess = '[Skills/API] Create Skill Success',
  CreateSkillFailure = '[Skills/API] Create Skill Failure',
  // Update Skill
  UpdateSkill = '[Skills] Update Skill',
  UpdateSkillSuccess = '[Skills/API] Update Skill Success',
  UpdateSkillFailure = '[Skills/API] Update Skill Failure',
  // Delete Skill
  DeleteSkill = '[Skills] Delete Skill',
  DeleteSkillSuccess = '[Skills/API] Delete Skill Success',
  DeleteSkillFailure = '[Skills/API] Delete Skill Failure'
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
  constructor(public payload: { skillId: string }) {}
}

export class GetSkillSuccess implements Action {
  readonly type = SkillsActionTypes.GetSkillSuccess;
  constructor(public payload: { skill: Skill }) {}
}

export class GetSkillFailure implements Action {
  readonly type = SkillsActionTypes.GetSkillFailure;
  constructor(public payload: { error: any }) {}
}

// Create Skill
export class CreateSkill implements Action {
  readonly type = SkillsActionTypes.CreateSkill;
  constructor(public payload: { skill: Skill }) {}
}

export class CreateSkillSuccess implements Action {
  readonly type = SkillsActionTypes.CreateSkillSuccess;
  constructor(public payload: { skill: Skill }) {}
}

export class CreateSkillFailure implements Action {
  readonly type = SkillsActionTypes.CreateSkillFailure;
  constructor(public payload: { error: any }) {}
}

// Update Skill
export class UpdateSkill implements Action {
  readonly type = SkillsActionTypes.UpdateSkill;
  constructor(public payload: { skillId: string; skillChanges: Skill }) {}
}

export class UpdateSkillSuccess implements Action {
  readonly type = SkillsActionTypes.UpdateSkillSuccess;
  constructor(public payload: { skill: Update<Skill> }) {}
}

export class UpdateSkillFailure implements Action {
  readonly type = SkillsActionTypes.UpdateSkillFailure;
  constructor(public payload: { error: any }) {}
}

// Delete Skill
export class DeleteSkill implements Action {
  readonly type = SkillsActionTypes.DeleteSkill;
  constructor(public payload: { skillId: string }) {}
}

export class DeleteSkillSuccess implements Action {
  readonly type = SkillsActionTypes.DeleteSkillSuccess;
  constructor(public payload: { skillId: string }) {}
}

export class DeleteSkillFailure implements Action {
  readonly type = SkillsActionTypes.DeleteSkillFailure;
  constructor(public payload: { error: any }) {}
}

export type SkillsActionsUnion =
  | GetAllSkills
  | GetAllSkillsSuccess
  | GetAllSkillsFailure
  | GetSkill
  | GetSkillSuccess
  | GetSkillFailure
  | CreateSkill
  | CreateSkillSuccess
  | CreateSkillFailure
  | UpdateSkill
  | UpdateSkillSuccess
  | UpdateSkillFailure
  | DeleteSkill
  | DeleteSkillSuccess
  | DeleteSkillFailure;
