import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class PhoneAuth implements PipeTransform{transform(value: any) {
    console.log(value)
    const PhoneNumber = String(value.phone)
    const regex = /^\d{10,11}$/
    if(!regex.test(PhoneNumber)){
        throw new BadRequestException('Phone number must be 10 or 11 digits')
    }
    return value;

}}
