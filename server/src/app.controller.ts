import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import { InitialDataDto } from './dto/initialData.dto';
import * as fs from 'fs-extra';
import { path } from 'app-root-path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async processCalculation(@Body() initialData: InitialDataDto) {
    return this.appService.processCalculation(initialData);
  }

  @Get('model')
  getModel() {
    const modelPath = `${path}/src/model/model.json`;
    const modelJSON = fs.createReadStream(modelPath);
    return new StreamableFile(modelJSON);
  }
}
