import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {
    Absence,
    Booking,
    BookingStatus,
    ParkingSpace,
    ParkingSpaceStatus,
    Role,
    SeriesAbsence, SeriesBooking,
    User, UserRole
} from "./users/models/public_api";
import {UsersModule} from './users/users.module';
import {GraphQLModule} from "@nestjs/graphql";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "mypark",
            password: "mypark",
            database: "mypark",
            entities: [
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
            ],
            synchronize: true,
            autoLoadEntities: true
        }),
        UsersModule,
        GraphQLModule.forRoot({
            debug: false,
            autoSchemaFile: 'schema.graphqls',
        })
    ],
    providers: [AppService],
    controllers: [AppController],
})
export class AppModule {
}
