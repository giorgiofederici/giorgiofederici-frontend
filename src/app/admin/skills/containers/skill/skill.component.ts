import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  selector: 'admin-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill: Skill;

  constructor(
    private store: Store<fromSkills.SkillsState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.skill = !this.route.snapshot.data.skill
      ? {}
      : this.route.snapshot.data.skill;
  }

  async addSkill(event: Skill) {
    this.store.dispatch(new SkillsActions.CreateSkill({ skill: event }));
  }

  async updateSkill(event: Skill) {
    const key = this.route.snapshot.params.id;
    this.store.dispatch(
      new SkillsActions.UpdateSkill({ skillId: key, skillChanges: event })
    );
  }

  async removeSkill(event: Skill) {
    const key = this.route.snapshot.params.id;
    this.store.dispatch(new SkillsActions.DeleteSkill({ skillId: key }));
  }
}
