import { Component, Input } from '@angular/core';

// Models
import { Project } from '../../../../admin/shared/models/projects/project.model';

@Component({
  selector: 'website-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent {
  @Input() project: Project;

  constructor() {}
}
