import * as dayjs from 'dayjs';

export enum DateTimeFormat {
  Y = 'YYYY',
  YM = 'YYYY-MM',
  YMD = 'YYYY-MM-DD',
  YMDHMS = 'YYYY-MM-DD HH:mm:ss',
  HMS = 'HH:mm:ss',
  H = 'HH',
  M = 'mm',
  S = 'ss',
}

/**
 * Mysql 로 부터 조회한 시간 정보를 YYYY-MM-DD 형태로 변환해줍니다.
 * @param datetimeFromMysql
 */
export const toYMD = (datetimeFromMysql:string): string => dayjs(datetimeFromMysql).format(DateTimeFormat.YMD);

/**
 * Mysql 로 부터 조회한 시간 정보를 ISO 8601 String 으로 변환해줍니다.
 * @param datetimeFromMysql
 * @constructor
 */
export const toISO8601 = (datetimeFromMysql:string): string => dayjs(datetimeFromMysql).toISOString();
