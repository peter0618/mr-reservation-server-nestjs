import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../../autogen/schema.graphql';
import { ReservationService } from './reservation.service';

@Resolver('Reservation')
export class ReservationResolver {
  constructor(private readonly reservationService: ReservationService) {}

  @Query('reservations')
  async findAll(): Promise<User[]> {
    console.log(`findAll()`);
    return await this.reservationService.findAll();
  }
}
