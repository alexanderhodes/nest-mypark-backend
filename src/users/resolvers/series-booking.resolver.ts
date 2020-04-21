import {Query, Resolver} from "@nestjs/graphql";
import {SeriesBooking} from "../models/series-booking.entity";
import {SeriesBookingService} from "../services/series-booking.service";

@Resolver(of => SeriesBooking)
export class SeriesBookingResolver {

    constructor(private seriesBookingService: SeriesBookingService) {}

    @Query(returns => [SeriesBooking])
    findSeriesBookingByUser(userId: string): Promise<SeriesBooking[]> {
        return this.seriesBookingService.findAllByUser(userId);
    }

}
