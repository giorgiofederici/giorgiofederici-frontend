import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'website-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './website-footer.component.html',
    styleUrls: ['./website-footer.component.scss']
})
export class WebsiteFooterComponent {}
