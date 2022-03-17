import { useEffect } from 'react';
import api from './api';
import IcompaniesData from '../types/companies.type';

class CompanieDataService {
  getAllCompanies() {
    return api.get('empresas');
  }
  get(id: string) {
    return api.get<IcompaniesData>(`/tutorials/${id}`);
  }
  createCompanie(data: IcompaniesData) {
    return api.post<IcompaniesData>("empresas/create", data);
  }
  updateCompanie(data: IcompaniesData, id: any) {
    return api.put<any>(`empresas/${id}/update`, data);
  }
  deleteCompanie(id: any) {
    return api.delete<any>(`empresas/${id}/delete`);
  }
  deleteAll() {
    return api.delete<any>(`/tutorials`);
  }
  findByTitle(title: string) {
    return api.get<Array<IcompaniesData>>(`/tutorials?title=${title}`);
  }
}

export default new CompanieDataService();