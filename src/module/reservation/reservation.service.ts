import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { JsonUtil } from '../../util/json.util';
import * as dayjs from 'dayjs';

@Injectable()
export class ReservationService {
  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async findAll() {
    try {
      let rows = await this.connection.query(`SELECT * FROM reservation`);
      rows = JsonUtil.snakeToCamelCase(rows);
      this.logger.debug(rows);

      return rows.map(row => {
        row.reservedAt = dayjs(row.reservedAt).format('YYYY-MM-DD');
        row.mdfDtm = dayjs(row.mdfDtm).toISOString();
        row.regDtm = dayjs(row.regDtm).toISOString();
        return row;
      });

    } catch (e) {
      console.log(e);
    }
  }
}
