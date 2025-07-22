import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
    @Get('/')
    root() {
        return { message: 'API está no ar' };
    }

	@Get('hello')
	getHello() {
		return { message: 'Hello from NestJS!' };
	}
}
