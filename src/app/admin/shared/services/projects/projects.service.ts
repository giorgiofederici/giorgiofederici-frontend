import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Model
import { Project } from '../../models/projects/project.model';

// Shared
import { APIResponse } from '../../../../shared/models/api-response.model';

// Env
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<APIResponse> {
    return this.httpClient.get(
      `${environment.backendUrl}/api/v1/projects?sort=index`
    );
  }

  getProject(projectId: string): Observable<APIResponse> {
    return this.httpClient.get(
      `${environment.backendUrl}/api/v1/projects/${projectId}`
    );
  }

  createProject(project: Project): Observable<APIResponse> {
    // With credentials set to true will add response cookie
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.httpClient.post<APIResponse>(
      `${environment.backendUrl}/api/v1/projects`,
      project,
      httpOptions
    );
  }

  updateProject(
    projectId: string,
    projectChanges: Project
  ): Observable<APIResponse> {
    // With credentials set to true will add response cookie
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.httpClient.patch<APIResponse>(
      `${environment.backendUrl}/api/v1/projects/${projectId}`,
      projectChanges,
      httpOptions
    );
  }

  deleteProject(projectId: string): Observable<APIResponse> {
    // With credentials set to true will add response cookie
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.httpClient.delete<APIResponse>(
      `${environment.backendUrl}/api/v1/projects/${projectId}`,
      httpOptions
    );
  }
}
