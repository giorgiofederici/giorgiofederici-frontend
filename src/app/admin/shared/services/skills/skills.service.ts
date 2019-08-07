import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Model
import { Skill } from '../../models/skills/skill.model';

// Shared
import { APIResponse } from '../../../../shared/models/api-response.model';

// Env
import { environment } from '../../../../../environments/environment';

@Injectable()
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  getAllSkills(): Observable<APIResponse> {
    return this.httpClient.get(`${environment.backendUrl}/api/v1/skills`);
  }

  getSkill(skillId: string): Observable<APIResponse> {
    return this.httpClient.get(
      `${environment.backendUrl}/api/v1/skills/${skillId}`
    );
  }

  createSkill(skill: Skill): Observable<APIResponse> {
    // With credentials set to true will add response cookie
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.httpClient.post<APIResponse>(
      `${environment.backendUrl}/api/v1/skills`,
      skill,
      httpOptions
    );
  }

  updateSkill(skillId: string, skillChanges: Skill): Observable<APIResponse> {
    // With credentials set to true will add response cookie
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.httpClient.patch<APIResponse>(
      `${environment.backendUrl}/api/v1/skills/${skillId}`,
      skillChanges,
      httpOptions
    );
  }

  deleteSkill(skillId: string): Observable<APIResponse> {
    // With credentials set to true will add response cookie
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.httpClient.delete<APIResponse>(
      `${environment.backendUrl}/api/v1/skills/${skillId}`,
      httpOptions
    );
  }
}
