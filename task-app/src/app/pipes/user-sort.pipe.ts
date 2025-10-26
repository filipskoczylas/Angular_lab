import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'userSort' })
export class UserSortPipe implements PipeTransform {
  transform(vaules: any[]): any[] {
    return vaules.sort((user) => (user.userIsOnline ? -1 : 1))
  }
}