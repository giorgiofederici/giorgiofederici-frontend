import { Component } from '@angular/core';

// CV
import { SkillItem } from 'src/app/website/shared/models/skill-item.model';

@Component({
    selector: 'website-cv-skills-nodejs',
    templateUrl: './nodejs.component.html',
    styleUrls: ['./nodejs.component.html']
})
export class NodeJsComponent {

    items: SkillItem[];

    constructor() {
        this.items = [
            {
                name: 'Simple Web Server',
                link: 'https://github.com/giorgiofederici/nodejs-knowledge/tree/master/01-web-server-simple'
            },
            {
                name: 'Simple Routing',
                link: 'https://github.com/giorgiofederici/nodejs-knowledge/tree/master/02-routing-simple'
            }
        ];
     }

     test(event: any) {

     }

}
