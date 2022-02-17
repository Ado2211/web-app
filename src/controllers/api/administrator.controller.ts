import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Administrator } from "entities/administrator.entity";
import { AddAdministratorDto } from "src/dtos/administrator/add.administrator.dto";
import { EditAdministratorDto } from "src/dtos/administrator/edit.administrator.dto";
import { ApiResponse } from "src/misc/api.response.class";
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
    getByID(@Param('id') administratorId: number): Promise<Administrator | ApiResponse> {
        return new Promise(async(resolve) => {
            let admin = await this.administratorService.getById(administratorId);

            if (admin === undefined) {
                resolve(new ApiResponse("error", -1002, "Administrator is not exist!" ));
            }

            resolve(admin);
        });
    }

    // POST http://localhost:3000/api/adminstrator/
    @Post()
    add(@Body() data: AddAdministratorDto): Promise<Administrator | ApiResponse> {
        return this.administratorService.add(data);
    }

    // PUT http://localhost:3000/api/adminstrator/4/
    @Put(':id')
    edit(@Param('id') id: number, @Body() data: EditAdministratorDto): Promise<Administrator | ApiResponse> {
        return this.administratorService.editById(id, data);
    }
} 