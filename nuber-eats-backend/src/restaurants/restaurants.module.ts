import { Module } from '@nestjs/common';
import { RerstaurantResolver } from './restaurants.resolver';

@Module({
  providers: [RerstaurantResolver],
})
export class RestaurantsModule {}
