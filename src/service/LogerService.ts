import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export  class LogerService {
  log(message: string) {
    console.log(message);
  }
}
