import * as tf from '@tensorflow/tfjs-node';
import { Injectable } from '@nestjs/common';
import { InitialDataDto } from './dto/initialData.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async processCalculation(initialData: InitialDataDto) {
    const model = await tf.loadGraphModel('file://model/model.json');
    const input = tf.tensor([
      parseFloat(initialData.vessel_volume),
      parseFloat(initialData.feed_temperature),
      parseFloat(initialData.feed_mass_flow),
    ]);

    const result = model.predict(input);

    console.log(result);
  }
}
