import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class UserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Passwords must contain at least 1 upper case, 1 lower case letter, 1 number or special character',
  })
  password: string;

  @IsString()
  @Matches(/^(\+?\d{1,3}|\d{1,4})$/, {
    message: 'provide a valid country code',
  })
  countryCode: string;

  @IsString()
  @Length(10, 11)
  mobileNumber: string;
}
