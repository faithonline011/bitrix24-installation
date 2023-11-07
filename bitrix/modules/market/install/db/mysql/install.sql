CREATE TABLE IF NOT EXISTS b_market_tag
(
	ID INT AUTO_INCREMENT,
	MODULE_ID VARCHAR(32) NOT NULL,
	TYPE CHAR(1) NOT NULL,
	CODE VARCHAR(32) NOT NULL,
	DATE_VALUE DATE NOT NULL,
	VALUE VARCHAR(32) NOT NULL,
	PRIMARY KEY (ID),
	UNIQUE ux_b_market_tag (TYPE, MODULE_ID, CODE, DATE_VALUE),
	INDEX ix_b_market_tag (TYPE, MODULE_ID, CODE)
);

CREATE TABLE IF NOT EXISTS b_market_app_favorites
(
	ID INT AUTO_INCREMENT,
	APP_CODE VARCHAR(128) NOT NULL,
	USER_ID INT NOT NULL,
	CONSTRAINT b_market_app_favorites_pk
	PRIMARY KEY (ID),
	INDEX ix_market_app_fav(USER_ID)
);