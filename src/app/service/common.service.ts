import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { States } from '../domain/states';
import { NameValue } from '../domain/namevalue';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {}


  public getBackendService(): string {
    return environment.backendService;
  }

  public isProduction(): boolean {
    return environment.production;
  }

  public getMode(): string {
    return (environment.production) ? 'Production' : 'Development';
  }

  public getAppName(): string {
    return environment.appName;
  }


  public getLoggingUrl(): string {
    return environment.loggingUrl;
  }

  public getContactListType(): NameValue[] {
    const items = [
      {label: 'Person', value: 'Person'},
      {label: 'Company', value: 'Company'},
      {label: 'Group', value: 'Group'}
    ];

    return items
  }

  public getNameSuffixItems(): NameValue[] {
    const items = [
      {label: 'Suffix', value: ''},
      {label: 'Jr.', value: 'Jr.'},
      {label: 'Sr.', value: 'Sr.'},
      {label: '2nd', value: '2nd'},
      {label: '3rd', value: '3rd'},
      {label: 'Esq', value: 'Esq'},
      {label: 'CPA', value: 'CPA'},
      {label: 'MD', value: 'MD'},
      {label: 'RN', value: 'RN'},
      {label: 'JP', value: 'JP'},
      {label: 'PhD', value: 'PhD'},
      {label: 'II', value: 'II'},
      {label: 'III', value: 'III'},
      {label: 'IV', value: 'IV'},
      {label: 'V', value: 'V'},
    ];

    return (items as NameValue[]);
  }


  public getStateSelectItems(): States[] {
    const items = [
      {label: 'Alaska', value: 'AK'},
      {label: 'Alabama', value: 'AL'},
      {label: 'Arizona', value: 'AZ'},
      {label: 'Arkansas', value: 'AR'},
      {label: 'California', value: 'CA'},
      {label: 'Colorado', value: 'CO'},
      {label: 'Connecticut', value: 'CT'},
      {label: 'Delaware', value: 'DE'},
      {label: 'Florida', value: 'FL'},
      {label: 'Georgia', value: 'GA'},
      {label: 'Hawaii', value: 'HI'},
      {label: 'Idaho', value: 'ID'},
      {label: 'Illinois', value: 'IL'},
      {label: 'Indiana', value: 'IN'},
      {label: 'Iowa', value: 'IA'},
      {label: 'Kansas', value: 'KS'},
      {label: 'Kentucky', value: 'KY'},
      {label: 'Louisiana', value: 'LA'},
      {label: 'Maine', value: 'ME'},
      {label: 'Maryland', value: 'MD'},
      {label: 'Massachusetts', value: 'MA'},
      {label: 'Michigan', value: 'MI'},
      {label: 'Minnesota', value: 'MN'},
      {label: 'Mississippi', value: 'MS'},
      {label: 'Missouri', value: 'MO'},
      {label: 'Montana', value: 'MT'},
      {label: 'Nebraska', value: 'NE'},
      {label: 'Nevada', value: 'NV'},
      {label: 'New Hampshire', value: 'NH'},
      {label: 'New Jersey', value: 'NJ'},
      {label: 'New Mexico', value: 'NM'},
      {label: 'New York', value: 'NY'},
      {label: 'North Carolina', value: 'NC'},
      {label: 'North Dekota', value: 'ND'},
      {label: 'Ohio', value: 'OH'},
      {label: 'Oklahoma', value: 'OK'},
      {label: 'Oregon', value: 'OR'},
      {label: 'Pennsylvania', value: 'PA'},
      {label: 'Rhode Island', value: 'RI'},
      {label: 'South Carolina', value: 'SC'},
      {label: 'South Dakota', value: 'SD'},
      {label: 'Tennessee', value: 'TN'},
      {label: 'Texas', value: 'TX'},
      {label: 'Utah', value: 'UT'},
      {label: 'Vermont', value: 'VT'},
      {label: 'Virginia', value: 'VA'},
      {label: 'Washington', value: 'WA'},
      {label: 'West Virginia', value: 'WV'},
      {label: 'Wisconsin', value: 'WI'},
      {label: 'Wyoming', value: 'WY'}
    ];

    return items;
  }

}
