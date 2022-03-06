import * as Validator from 'class-validator';

export class UserRegistrationDto {
    @Validator.IsNotEmpty()
    @Validator.IsEmail({
        allow_ip_domain: false,
        allow_utf8_local_part: true,
        require_tld: true,
    })
    email: string;

    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.Length(6, 128, {
     //   message: 'Lozinka mora da sadrži minimum 6 karaktera'
    })
    password: string;

    @Validator.IsString()
    @Validator.IsNotEmpty()
    @Validator.Length(2, 64)
    forename: string;

    @Validator.IsString()
    @Validator.IsNotEmpty()
    @Validator.Length(2, 64)
    surname: string;

    @Validator.IsNotEmpty()
    @Validator.IsPhoneNumber(null)
    phoneNumber: string;

    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.Length(10, 512)
    postalAddres: string

}