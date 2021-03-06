import { Component, OnInit } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// ngRx
import { Store, select } from '@ngrx/store';

// Reducers
import * as fromSkills from '../../../shared/reducers/skills/skills.reducer';

// Actions
import { SkillsActions } from '../../../shared/actions/skills';

// Shared
import { Skill } from '../../../shared/models/skills/skill.model';

@Component({
  selector: 'admin-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<fromSkills.SkillsState>) {
    this.skills$ = this.store.pipe(select(fromSkills.selectAllSkills));
    this.loading$ = store.pipe(select(fromSkills.selectAllSkillsLoading));
    this.error$ = store.pipe(select(fromSkills.selectAllSkillsError));
  }

  ngOnInit() {
    this.store.dispatch(new SkillsActions.GetAllSkills());
  }

  removeSkill(event: Skill) {
    this.store.dispatch(new SkillsActions.DeleteSkill({ skillId: event._id }));
  }
}
