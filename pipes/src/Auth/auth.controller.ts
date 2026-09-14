import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './authDto.js';
import { PhoneAuth } from './customPipe/phoneAuth.js';


@Controller('auth')
export class AuthController {
    @Post('register')
    @UsePipes(ValidationPipe, PhoneAuth)
    registerUser(@Body()userData:AuthDto){
        return {
            name:userData.name,
            email:userData.email,
            country:userData.country,
            dob:userData.dob,
            phone:userData.phone,
            password:userData.password
        }
    }
}
