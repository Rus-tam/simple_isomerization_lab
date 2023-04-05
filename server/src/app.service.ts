import * as tf from '@tensorflow/tfjs-node';
import { Injectable } from '@nestjs/common';
import { InitialDataDto } from './dto/initialData.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async processCalculation(initialData: InitialDataDto) {
    const model = await tf.loadLayersModel(
      'https://raw.githubusercontent.com/Rus-tam/simple_isomerization_lab/main/server/src/model/model.json',
    );

    const input = tf.tensor([
      parseFloat(initialData.vessel_volume),
      parseFloat(initialData.feed_temperature),
      parseFloat(initialData.feed_mass_flow) / 3600,
    ]);

    const result = await (
      model.predict(input.reshape([-1, 3])) as tf.Tensor
    ).dataSync();

    console.log(result);

    return {
      product_concentration: result['0'],
      product_temperature: result['1'],
    };
  }
}
