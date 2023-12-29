import { Body, Controller, Post } from '@nestjs/common';
import { ChangesService } from './changes.service';
import { CreateChangeDTO } from './dto/createchange.dto';

@Controller('changes')
export class ChangesController {

    constructor(private changesService :ChangesService){}
    
    @Post('/')
    createChange(@Body() change :CreateChangeDTO){
        return this.changesService.createChange(change);

    }
}
