import { CanActivateFn} from '@angular/router';
import { Router} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(`authGuard`, route, state);
  let url = state.url
  let router = inject(Router);
  if(url === '/' || url === '/home' || url === '/clientes' || url === '/orcamentos'){
    if(!sessionStorage.getItem('login')){
      sessionStorage.setItem('url', url);
      router.navigate(['/login']);
      return false;
    }
  }
  return true;
};
