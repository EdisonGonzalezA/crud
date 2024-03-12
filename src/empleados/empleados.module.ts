import { Module } from '@nestjs/common';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados/servicio-empleados.service';
import { ControladorEmpleadosController } from './controlador-empleados/controlador-empleados.controller';

@Module({
  controllers: [EmpleadosController, ControladorEmpleadosController],
  providers: [EmpleadosService, ServicioEmpleadosService]
})
export class EmpleadosModule {}
