import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { JsonUtil } from '../../util/json.util';
import { toISO8601, toYMD } from '../../util/time';

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
        row.reservedAt = toYMD(row.reservedAt);
        row.mdfDtm = toISO8601(row.mdfDtm);
        row.regDtm = toISO8601(row.regDtm);
        return row;
      });

    } catch (e) {
      console.log(e);
    }
  }
}
