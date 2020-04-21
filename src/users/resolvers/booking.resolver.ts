import {Args, Query, Resolver} from "@nestjs/graphql";
import {Booking} from "../models/booking.entity";
import {BookingService} from "../services/booking.service";

@Resolver(of => Booking)
export class BookingResolver {

    constructor(private readonly bookingService: BookingService) {}

    @Query(returns => [Booking])
    findBookings(): Promise<Booking[]> {
        return this.bookingService.findAll();
    }

    @Query(returns => [Booking])
    findBookingsByUser(@Args('userId') userId: string): Promise<Booking[]> {
        return this.bookingService.findAllByUser(userId);
    }


}
