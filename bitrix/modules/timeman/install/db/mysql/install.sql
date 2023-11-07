create table if not exists b_timeman_entries
(
	ID int(11) not null auto_increment,
	TIMESTAMP_X timestamp not null,
	USER_ID int(18),
	MODIFIED_BY int(18) null,
	ACTIVE char(1) null default 'Y',
	PAUSED char(1) null default 'N',
	DATE_START datetime,
	RECORDED_START_TIMESTAMP int(11) unsigned not null default 0,
	ACTUAL_START_TIMESTAMP int(11) unsigned not null default 0,
	START_OFFSET int(11) not null default 0,
	DATE_FINISH datetime,
	RECORDED_STOP_TIMESTAMP int(11) unsigned not null default 0,
	ACTUAL_STOP_TIMESTAMP int(11) unsigned not null default 0,
	STOP_OFFSET int(11) not null default 0,
	TIME_START int(6),
	TIME_FINISH int(6),
	DURATION int(6) null default 0,
	RECORDED_DURATION int(11) null default 0,
	TIME_LEAKS int(6) null default 0,
	ACTUAL_BREAK_LENGTH int(11) unsigned not null default 0,
	TASKS text null,
	IP_OPEN varchar(50) null default '',
	IP_CLOSE varchar(50) null default '',
	FORUM_TOPIC_ID int(11) null,
	LAT_OPEN DOUBLE null,
	LON_OPEN DOUBLE null,
	LAT_CLOSE DOUBLE null,
	LON_CLOSE DOUBLE null,
	CURRENT_STATUS varchar(50) not null default '',
	SCHEDULE_ID int(10) unsigned not null default 0,
	SHIFT_ID int(10) unsigned not null default 0,
	APPROVED tinyint(3) unsigned not null default 1,
	APPROVED_BY int(18) unsigned not null default 0,
	AUTO_CLOSING_AGENT_ID int unsigned not null default 0,
	PRIMARY KEY pk_b_timeman_entries (ID),
	INDEX ix_b_timeman_entries_1 (USER_ID, DATE_START),
	INDEX ix_b_timeman_entries_2 (LAT_OPEN, LON_OPEN),
	INDEX ix_b_timeman_entries_3 (LAT_CLOSE, LON_CLOSE),
	INDEX ix_b_timeman_entries_4 (ACTIVE, DATE_START, DATE_FINISH, USER_ID),
	INDEX ix_b_timeman_entries_5 (DATE_START, DATE_FINISH, USER_ID)
);

create table if not exists b_timeman_reports
(
	ID int(11) not null auto_increment,
	TIMESTAMP_X timestamp null default CURRENT_TIMESTAMP,
	ENTRY_ID int(11) not null,
	USER_ID int(11) not null,
	ACTIVE char(1) null default 'Y',
	REPORT_TYPE varchar(50) null default 'REPORT',
	REPORT text null,
	PRIMARY KEY pk_b_timeman_reports (ID),
	INDEX ix_b_timeman_reports_1 (ENTRY_ID, REPORT_TYPE, ACTIVE)
);

create table if not exists b_timeman_report_daily
(
	ID int(11) not null auto_increment,
	TIMESTAMP_X timestamp null default CURRENT_TIMESTAMP,
	ACTIVE char(1) null default 'Y',
	USER_ID int(11) not null,
	ENTRY_ID int(11) not null,
	REPORT_DATE datetime,
	TASKS mediumtext DEFAULT NULL,
	EVENTS mediumtext DEFAULT NULL,
	REPORT text null,
	MARK int(5) null default 0,
	PRIMARY KEY pk_b_timeman_report_daily (ID),
	INDEX ix_b_timeman_report_daily_2 (ENTRY_ID),
	INDEX ix_b_timeman_report_daily_3 (USER_ID, REPORT_DATE)
);

CREATE TABLE IF NOT EXISTS b_timeman_report_full (
	ID int(11) NOT NULL AUTO_INCREMENT,
	TIMESTAMP_X timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	ACTIVE char(1) DEFAULT 'Y',
	USER_ID int(11) NOT NULL,
	REPORT_DATE datetime DEFAULT NULL,
	DATE_FROM datetime DEFAULT NULL,
	DATE_TO datetime DEFAULT NULL,
	TASKS mediumtext DEFAULT NULL,
	EVENTS mediumtext DEFAULT NULL,
	FILES text,
	REPORT text,
	PLANS text,
	MARK char(1) DEFAULT 'N',
	APPROVE char(1) DEFAULT 'N',
	APPROVE_DATE datetime DEFAULT NULL,
	APPROVER int(11) NULL,
	FORUM_TOPIC_ID int(11) NOT NULL,
	PRIMARY KEY (ID),
	KEY ix_b_timeman_report_full_1 (USER_ID),
	KEY ix_b_timeman_report_full_2 (ACTIVE, DATE_FROM)
);


CREATE TABLE IF NOT EXISTS b_timeman_absence (
	ID int(11) NOT NULL AUTO_INCREMENT,
	USER_ID int(11) NOT NULL,
	ENTRY_ID int(11) NULL default 0,
	`TYPE` varchar(255) NULL,
	DATE_START datetime NULL,
	DATE_FINISH datetime NULL,
	TIME_START int(6) NULL,
	TIME_FINISH int(6) NULL,
	SOURCE_START varchar(255) NULL,
	SOURCE_FINISH varchar(255) NULL,
	DURATION int(6) NULL default 0,
	ACTIVE char(1) DEFAULT 'Y',
	REPORT_TYPE varchar(255) DEFAULT 'PRIVATE',
	REPORT_TEXT text NULL,
	REPORT_CALENDAR_ID int(11) DEFAULT 0,
	SYSTEM_TEXT text NULL,
	IP_START varchar(50) null default '',
	IP_FINISH varchar(50) null default '',
	PRIMARY KEY (ID),
	KEY ix_b_timeman_absence_1 (USER_ID, ACTIVE, DATE_START, TYPE),
	KEY ix_b_timeman_absence_2 (USER_ID, DATE_START, DATE_FINISH)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_calendar (
	ID INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	`NAME` VARCHAR(100) NOT NULL DEFAULT '',
	PARENT_CALENDAR_ID MEDIUMINT(8) UNSIGNED NOT NULL DEFAULT '0',
	SYSTEM_CODE VARCHAR(10) NOT NULL DEFAULT '',
	PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_calendar_exclusion (
	CALENDAR_ID INT(11) UNSIGNED NOT NULL DEFAULT '0',
	YEAR SMALLINT(5) UNSIGNED NOT NULL DEFAULT '0',
	DATES TEXT NOT NULL,
	PRIMARY KEY (CALENDAR_ID, YEAR)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_schedule (
	ID INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`NAME` VARCHAR(255) NOT NULL,
	SCHEDULE_TYPE VARCHAR(25) NOT NULL DEFAULT '',
	CREATED_AT DATETIME NOT NULL,
	CREATED_BY INT(18) UNSIGNED NOT NULL DEFAULT '0',
	UPDATED_BY INT(18) UNSIGNED NOT NULL DEFAULT '0',
	REPORT_PERIOD VARCHAR(25) NOT NULL DEFAULT '',
	REPORT_PERIOD_OPTIONS TEXT NOT NULL,
	CALENDAR_ID INT(10) UNSIGNED NOT NULL DEFAULT '0',
	DELETED TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	IS_FOR_ALL_USERS TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	CONTROLLED_ACTIONS TINYINT(3) UNSIGNED NOT NULL DEFAULT '3',
	ALLOWED_DEVICES VARCHAR(255) NOT NULL DEFAULT '',
	WORKTIME_RESTRICTIONS TEXT NOT NULL,
	DELETED_BY INT UNSIGNED NOT NULL DEFAULT '0',
	DELETED_AT VARCHAR(30) NOT NULL DEFAULT '',
	PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_schedule_department (
	SCHEDULE_ID INT(11) UNSIGNED NOT NULL DEFAULT '0',
	DEPARTMENT_ID INT(11) UNSIGNED NOT NULL DEFAULT '0',
	`STATUS` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	PRIMARY KEY (SCHEDULE_ID, DEPARTMENT_ID)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_schedule_user (
	SCHEDULE_ID INT(11) UNSIGNED NOT NULL DEFAULT '0',
	USER_ID INT(11) UNSIGNED NOT NULL DEFAULT '0',
	`STATUS` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	PRIMARY KEY (SCHEDULE_ID, USER_ID)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_shift (
	ID INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`NAME` VARCHAR(100) NOT NULL,
	BREAK_DURATION MEDIUMINT(9) NOT NULL,
	WORK_TIME_START MEDIUMINT(9) NOT NULL,
	WORK_TIME_END MEDIUMINT(9) NOT NULL,
	SCHEDULE_ID INT(10) UNSIGNED NOT NULL,
	WORK_DAYS CHAR(7) NOT NULL DEFAULT '',
	DELETED TINYINT UNSIGNED NOT NULL DEFAULT '0',
	PRIMARY KEY (ID),
	INDEX SCHEDULE_ID (SCHEDULE_ID)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_shift_plan (
	ID INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	SHIFT_ID INT(11) NOT NULL DEFAULT '0',
	DATE_ASSIGNED DATE NOT NULL,
	USER_ID INT(11) NOT NULL DEFAULT '0',
	DELETED TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	CREATED_AT INT(10) UNSIGNED NOT NULL DEFAULT '0',
	DELETED_AT INT(10) UNSIGNED NOT NULL DEFAULT '0',
	MISSED_SHIFT_AGENT_ID INT(10) UNSIGNED NOT NULL DEFAULT '0',
	PRIMARY KEY (ID),
	UNIQUE INDEX SHIFT_ID_USER_ID_DATE_ASSIGNED (SHIFT_ID, USER_ID, DATE_ASSIGNED)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_time_event_log (
	ID INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	USER_ID INT(10) UNSIGNED NOT NULL DEFAULT '0',
	EVENT_TYPE VARCHAR(50) NOT NULL DEFAULT '',
	EVENT_SOURCE VARCHAR(50) NOT NULL DEFAULT '',
	ACTUAL_TIMESTAMP INT(11) NOT NULL DEFAULT '0',
	RECORDED_VALUE INT(11) NOT NULL DEFAULT '0',
	RECORDED_OFFSET MEDIUMINT(9) NOT NULL DEFAULT '0',
	WORKTIME_RECORD_ID INT(11) NOT NULL DEFAULT '0',
	REASON TEXT NOT NULL,
	PRIMARY KEY (ID),
	INDEX IX_B_TIMEMAN_WORK_TIME_EVENT_LOG_WORKTIME_RECORD_ID (WORKTIME_RECORD_ID)
);

CREATE TABLE IF NOT EXISTS b_timeman_task_access_code (
	TASK_ID INT UNSIGNED NOT NULL,
	ACCESS_CODE VARCHAR(100) NOT NULL,
	PRIMARY KEY (`TASK_ID`, `ACCESS_CODE`)
);

CREATE TABLE IF NOT EXISTS b_timeman_work_schedule_violation_rules (
	`ID` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`SCHEDULE_ID` INT(11) UNSIGNED NOT NULL DEFAULT '0',
	`ENTITY_CODE` VARCHAR(255) NOT NULL DEFAULT 'UA',
	`MAX_EXACT_START` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`MIN_EXACT_END` MEDIUMINT(8) NOT NULL DEFAULT '-1',
    `MAX_OFFSET_START` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`MIN_OFFSET_END` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`RELATIVE_START_FROM` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`RELATIVE_START_TO` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`RELATIVE_END_FROM` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`RELATIVE_END_TO` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`MIN_DAY_DURATION` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`MAX_ALLOWED_TO_EDIT_WORK_TIME` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`MAX_WORK_TIME_LACK_FOR_PERIOD` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`PERIOD_TIME_LACK_AGENT_ID` INT(18) UNSIGNED NOT NULL DEFAULT '0',
	`MAX_SHIFT_START_DELAY` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`MISSED_SHIFT_START` MEDIUMINT(8) NOT NULL DEFAULT '-1',
	`USERS_TO_NOTIFY` TEXT NULL,
	PRIMARY KEY (`ID`),
	UNIQUE INDEX `SCHEDULE_ID` (`SCHEDULE_ID`, `ENTITY_CODE`)
);

CREATE TABLE IF NOT EXISTS b_timeman_monitor_entity (
    ID int not null auto_increment,
    TYPE varchar(100) not null,
    TITLE varchar(2000) not null,
    PUBLIC_CODE varchar(32) default null,
    PRIMARY KEY (ID),
    INDEX IX_B_TIMEMAN_MONITOR_ENTITY_1 (PUBLIC_CODE)
);

CREATE TABLE IF NOT EXISTS b_timeman_monitor_user_log (
	ID int not null auto_increment,
	DATE_LOG date not null,
    USER_ID int not null,
	PRIVATE_CODE varchar(40) not null,
    ENTITY_ID int not null,
    TIME_SPEND int not null default 0,
	DESKTOP_CODE varchar(32) not null,
    PRIMARY KEY (ID),
    INDEX IX_B_TIMEMAN_MONITOR_USER_LOG_2 (USER_ID, DATE_LOG, DESKTOP_CODE)
);

CREATE TABLE IF NOT EXISTS b_timeman_monitor_comment (
	ID int not null auto_increment,
	USER_LOG_ID int not null,
	USER_ID int not null,
	COMMENT text default '',
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS b_timeman_monitor_absence (
	ID int not null auto_increment,
	USER_LOG_ID int not null,
	TIME_START datetime not null,
	TIME_FINISH datetime null,
	PRIMARY KEY (ID),
	INDEX IX_USER_LOG_ID (USER_LOG_ID)
);

CREATE TABLE IF NOT EXISTS b_timeman_monitor_user_chart (
	ID int not null auto_increment,
	DATE_LOG date not null,
    USER_ID int not null,
	DESKTOP_CODE varchar(32) not null,
    GROUP_TYPE varchar(100) not null,
    TIME_START datetime not null,
    TIME_FINISH datetime not null,
    PRIMARY KEY (ID),
    INDEX IX_B_TIMEMAN_MONITOR_USER_CHART_1 (DATE_LOG, USER_ID, DESKTOP_CODE)
);

CREATE TABLE IF NOT EXISTS b_timeman_monitor_report_comment (
	ID int not null auto_increment,
	DATE_LOG date not null,
    USER_ID int not null,
	DESKTOP_CODE varchar(32) default null,
    COMMENT text default '',
    PRIMARY KEY (ID),
    INDEX IX_B_TIMEMAN_MONITOR_REPORT_COMMENT_1 (USER_ID, DATE_LOG, DESKTOP_CODE)
);
