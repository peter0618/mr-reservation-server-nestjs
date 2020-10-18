-- 회의실 예약 테이블
CREATE TABLE `reservation_db`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '유일식별자',
  `meeting_agenda` VARCHAR(255) DEFAULT NULL COMMENT '회의 안건',
  `encrypted_password` VARCHAR(255) DEFAULT NULL COMMENT '예약 비밀번호',
  `reserved_at` DATE NOT NULL COMMENT '예약일',
  `start_time` TIME NOT NULL COMMENT '회의실 사용 시각',
  `end_time` TIME NOT NULL COMMENT '회의실 사용 종료 시각',
  `made_by` VARCHAR(255) DEFAULT NULL COMMENT '예약자 이름',
  `del_yn` varchar(1) NOT NULL DEFAULT 'N' COMMENT '삭제여부',
  `mdf_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '변경일시',
  `reg_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='회의실 예약';
