import { HttpException, HttpStatus, Injectable, NestMiddleware, } from "@nestjs/common";
import { NextFunction, Request , Response } from "express";
import { AdministratorService } from "src/services/administrator/administrator.service";
import * as jwt from 'jsonwebtoken';
import { JwtDataAdministratorDto } from "src/dtos/administrator/jwt.data.administrator.dto";
import { jwtSecret } from "config/jwt.secret";
import { JwtDataDto } from "src/dtos/auth/jwt.data.dto";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor( private  adminstratorService: AdministratorService) {}
    
    async use(req: Request, res: Response, next: NextFunction) {
       if ( !req.headers.authorization) {
           throw new HttpException('Not Authorized', HttpStatus.UNAUTHORIZED);
       }
       
       const token = req.headers.authorization;


       const tokenParts = token.split(' ');
       if (tokenParts.length !== 2) {
           throw new HttpException('Bad token found', HttpStatus.UNAUTHORIZED);
       }
     
        next();
    }

}