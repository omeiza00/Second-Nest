import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './authDto.js';


@Controller('auth')
export class AuthController {
    @Post('register')
    @UsePipes(ValidationPipe)
    registerUser(@Body()userData:AuthDto){
        return `The User email is : ${userData.email}`
    }
}
