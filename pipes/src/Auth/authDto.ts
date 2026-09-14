import { IsAlphanumeric, IsDateString, IsEmail, isEnum, IsEnum, IsNotEmpty, IsOptional, Matches, MaxLength, MinLength } from "class-validator";

export enum Country{
   FRA='FRA',
   POR='POR',
   SPA='SPA',
   ENG='ENG',
   GER='GER',
   BEL='BEL'
   
}

export class AuthDto{
    @IsNotEmpty()
    name:string

    @IsEmail()
    email:string

    @IsNotEmpty()
    @MinLength(4, {message:'Password must be more than 5 characters'})
    @MaxLength(10)
    @IsAlphanumeric()
    password:string

    // @IsEnum(['FRA', 'POR', 'SPA', 'ENG', 'GER', 'BEL'], {message: `Country must be from the [$constraint1] not $value`})
    // country:string
    @IsEnum(Country)
    country:Country

    @IsDateString()
    dob: Date

    @IsOptional()
    // @MaxLength(11)
    // @Matches(/^[0-9]{10,11}$/, {message:`phone number should be 10 or 11 digits`})                                                                                                                                                                                                                                                                                                                                                                                            
    phone: number   

}