import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Shared
import { APIResponse } from '../../../shared/models/api-response.model';

// Env
import { environment } from '../../../../environments/environment';

@Injectable()
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  getAllSkills(): Observable<APIResponse> {
    return this.httpClient.get(`${environment.backendUrl}/api/v1/skills`);
  }
}
