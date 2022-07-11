import {Type} from '@sinclair/typebox';

const RegisterDTOSSchema = Type.Object({
    _id:Type.String({
        format:'uuid',
        errorMessage:{
            type:'Type of _id is not valid, must be a string',
            format:'Format of _id is not valid, must be uuid4'
        }
    }),
    name:Type.String({
        minLength: 2,
        maxLength:20,
        errorMessage:{
           type:'Type of name is not valid, must be a string',
           minLength:'Name must be at least 2 characters long',
           maxLength:'Name must be at most 20 characters long'
        }
    }),
    surname:Type.String({
        minLength: 2,
        maxLength:20,
        errorMessage:{
            type:'Type of surname is not valid, must be a string',
            minLength:'Surname must be at least 2 characters long',
            maxLength:'Surname must be at most 20 characters long'
        }
    }),
    nick:Type.String({
        minLength: 5,
        maxLength:25,
        errorMessage:{
            type:'Type of nickname is not valid, must be a string',
            minLength:'Nickname must be at least 5 characters long',
            maxLength:'Nickname must be at most 25 characters long'
        }
    }),
    password:Type.String({
        format: 'password',
        minLength :5,
        maxLength:25,
        errorMessage:{
            type:'Type of password is not valid, must be a string',
            format:'El formato de contrasenia no es valido, debe contener una mayuscula, una minuscula, un numero y una longitud minima de 8 caracteres',
            minLength:'Nickname must be at least 5 characters long',
            maxLength:'Nickname must be at most 25 characters long'
        }
    }),
    email:Type.String({
        format: 'email',
        errorMessage:{
            type:'Type of email is not valid, must be a string',
            format:'Format of email is not valid, must be a valid email [RFC 5322]'
        }
    }),
    age:Type.Number({
        minLength: 1,
        maxLength:2,
        errorMessage:{
            type:'Type of age is not valid, must be a number',
            minLength:'age must be at least 1 digit long',
            maxLength:'age must must be at most 2 digit long'
        }
    })
})