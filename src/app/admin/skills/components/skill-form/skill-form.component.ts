import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// Shared
import { Skill } from '../../../shared/models/skills/skill.model';

@Component({
  selector: 'admin-skill-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skill-form.component.html',
  styleUrls: ['skill-form.component.scss']
})
export class SkillFormComponent implements OnChanges {
  toggled = false;
  exists = false;

  @Input()
  skill: Skill;

  @Output()
  create = new EventEmitter<Skill>();

  @Output()
  update = new EventEmitter<Skill>();

  @Output()
  remove = new EventEmitter<Skill>();

  form = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.skill && this.skill.name) {
      this.exists = true;

      const value = this.skill;
      this.form.patchValue(value);
    }
  }

  get requiredName() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  get requiredType() {
    return (
      this.form.get('type').hasError('required') &&
      this.form.get('type').touched
    );
  }

  createSkill() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateSkill() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeSkill() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
