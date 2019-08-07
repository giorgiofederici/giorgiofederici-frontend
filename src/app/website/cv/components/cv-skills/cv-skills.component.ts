import { Component, Input } from '@angular/core';

// Models
import { Skill } from '../../../../admin/shared/models/skills/skill.model';

@Component({
  selector: 'website-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.scss']
})
export class CVSkillsComponent {
  @Input() skills: Skill[];

  constructor() {}

  getFilledStars(experience: number) {
    return Array(experience);
  }

  getNotFilledStars(experience: number) {
    return Array(5 - experience);
  }
}
