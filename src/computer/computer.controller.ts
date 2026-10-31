import { Controller } from '@nestjs/common';
import { DiskService } from '../disk/disk.service';
import { CpuService } from '../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}
}
