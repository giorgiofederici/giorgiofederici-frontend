import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'website-home-presentation',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home-presentation.component.html',
    styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent {
    
    @Output()
    navigate = new EventEmitter();

}
