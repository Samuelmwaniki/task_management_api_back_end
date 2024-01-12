import {Controller,Get,Post,Body,Delete,Param,HttpException,HttpStatus,} from '@nestjs/common';
import { AppService } from './app.service';
import { Tasks } from './app.service';

@Controller('api/tasks')

export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get()
  getTasks(): Tasks[] {
    try {
      return this.appService.getTasks();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Post()
  createTasks(@Body() { name,id }: Tasks): Tasks[] {
    try {
      return this.appService.createTask('name','ids');
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete(':id')
  deleteTasks(@Param('id') id: number): Tasks[] {
    try {
      return this.appService.deleteTasks(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}