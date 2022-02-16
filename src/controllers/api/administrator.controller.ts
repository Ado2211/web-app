import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Administrator } from "entities/administrator.entity";
import { AddAdministratorDto } from "src/dtos/administrator/add.administrator.dto";
import { EditAdministratorDto } from "src/dtos/administrator/edit.administrator.dto";
import { AdministratorService } from "src/services/administrator/administrator.service";


@Controller('api/administrator')
export class AdministratorController {
    constructor(
        private administratorService: AdministratorService
    ) { }

    // GET http://localhost:3000/api/adminstrator/
    @Get()
    getAllAdmins(): Promise<Administrator[]> {
        return this.administratorService.getAll();
    }

    // GET http://localhost:3000/api/adminstrator/4/
    @Get(':id')
    getByID(@Param('id') administratorId: number): Promise<Administrator> {
        return this.administratorService.getById(administratorId);
    }

    // POST http://localhost:3000/api/adminstrator/
    @Post()
    add(@Body() data: AddAdministratorDto) {
        return this.administratorService.add(data);
    }

    // PUT http://localhost:3000/api/adminstrator/4/
    @Put(':id')
    edit(@Param('id') id: number, @Body() data: EditAdministratorDto): Promise<Administrator> {
        return this.administratorService.editById(id, data);
    }
} 