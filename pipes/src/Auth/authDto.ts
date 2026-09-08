import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AuthDto{
    @IsEmail()
    email:string
    @IsNotEmpty()
    @MinLength(4, {message:'Password must be more than 5 characters'})
    @MaxLength(10)
    password:string
}