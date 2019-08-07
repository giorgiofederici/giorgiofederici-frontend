import { Component, OnInit } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// ngRx
import { Store, select } from '@ngrx/store';

// Reducers
import * as fromSkills from '../../../../admin/shared/reducers/skills/skills.reducer';

// Actions
import { SkillsActions } from '../../../../admin/shared/actions/skills';

// Shared
import { Skill } from '../../../../admin/shared/models/skills/skill.model';

@Component({
  selector: 'website-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
  skills$: Observable<Skill[]>;

  constructor(private store: Store<fromSkills.SkillsState>) {
    this.skills$ = this.store.pipe(select(fromSkills.selectAllSkills));
  }

  ngOnInit() {
    this.store.dispatch(new SkillsActions.GetAllSkills());
  }
}
