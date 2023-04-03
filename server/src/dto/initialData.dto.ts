import { IsString } from 'class-validator';

export class InitialDataDto {
  @IsString()
  vessel_volume: string;

  @IsString()
  feed_temperature: string;

  @IsString()
  feed_mass_flow: string;
}
