import { Controller, Get } from '@nestjs/common';
import { AdministratorService } from '../services/administrator/administrator.service';


@Controller()
export class AppController {
   constructor(
     private adminstratorService: AdministratorService
   ) { }
  
  @Get()  // http://localhost:3000/
  getHello(): string {
    return 'Hello World'
  }

  
}
