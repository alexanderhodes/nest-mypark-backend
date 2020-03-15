import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {
    AbsenceController,
    BookingController,
    ParkingSpaceController,
    SeriesAbsenceController,
    SeriesBookingController,
    UsersController
} from './controllers/public_api';
import {
    Absence,
    Booking,
    BookingStatus,
    ParkingSpace,
    ParkingSpaceStatus,
    Role,
    SeriesAbsence,
    SeriesBooking,
    User,
    UserRole
} from './models/public_api';
import {
    AbsenceService,
    BookingService,
    BookingStatusService,
    ParkingSpaceService,
    ParkingSpaceStatusService,
    RoleService,
    SeriesAbsenceService,
    SeriesBookingService,
    UserRoleService,
    UsersService
} from './services/public_api';
import {
    AbsenceResolver,
    BookingResolver,
    ParkingSpaceResolver,
    SeriesAbsenceResolver,
    SeriesBookingResolver,
    UsersResolver
} from './resolvers/public_api';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Absence,
            Booking,
            BookingStatus,
            ParkingSpace,
            ParkingSpaceStatus,
            Role,
            SeriesAbsence,
            SeriesBooking,
            User,
            UserRole
        ])
    ],
    providers: [
        AbsenceResolver,
        BookingResolver,
        ParkingSpaceResolver,
        SeriesAbsenceResolver,
        SeriesBookingResolver,
        UsersResolver,
        AbsenceService,
        BookingService,
        BookingStatusService,
        ParkingSpaceService,
        ParkingSpaceStatusService,
        RoleService,
        SeriesAbsenceService,
        SeriesBookingService,
        UserRoleService,
        UsersService
    ],
    controllers: [
        AbsenceController,
        BookingController,
        ParkingSpaceController,
        SeriesAbsenceController,
        SeriesBookingController,
        UsersController
    ]
})
export class UsersModule {
}
