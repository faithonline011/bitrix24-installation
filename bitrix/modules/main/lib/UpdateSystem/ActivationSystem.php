<? namespace Bitrix\Main\UpdateSystem;$GLOBALS['____1301819889']= array(base64_decode('aXNfd3JpdGF'.'ibGU='),base64_decode('Z'.'m9w'.'ZW4='),base64_decode('Zndya'.'XRl'),base64_decode(''.'ZmNsb3Nl'),base64_decode('aW50'.'dmFs'),base64_decode(''.'a'.'W'.'50dmFs'),base64_decode(''.'aXNfd3'.'JpdGFib'.'GU='),base64_decode('Zm9wZW4'.'='),base64_decode('Zn'.'B1dHM='),base64_decode(''.'ZmN'.'sb3Nl'));if(!function_exists(__NAMESPACE__.'\\___1149344730')){function ___1149344730($_1591603934){static $_1364569903= false; if($_1364569903 == false) $_1364569903=array('RVJ'.'ST1I'.'=','RVJST1I'.'=','X1ZBT'.'FVF',''.'V'.'W5r'.'bm'.'93'.'biBlcnJvc'.'g'.'==','I'.'FtBU1IwMV0=','UkVOVA='.'=','Tm90IGZvdW5kIGx'.'pY2Vuc'.'2U'.'ga'.'W'.'5mb'.'yBb'.'Q'.'VN'.'SMDJd','VjE=','VjI'.'=','U2VydmVyIHJ'.'lc'.'3'.'Bv'.'bnNlIGl'.'zIG5vdCByZWNvZ25pemVkIFt'.'BU0FMST'.'AxXQ='.'=','bW'.'Fpbg'.'==','flNBQVNfT'.'U9ER'.'Q='.'=','WQ==','b'.'WFpbg==','YWRtaW5f'.'c'.'GF'.'z'.'c3dvcmR'.'o',''.'RE9DVU1FTlR'.'fU'.'k9P'.'VA==',''.'L'.'2'.'Jp'.'dHJp'.'eC9tb2'.'R1'.'bG'.'Vz'.'L21haW'.'4vYWR'.'taW'.'4=','RE9DVU1FTlRfUk9PVA==','L'.'2JpdH'.'Jp'.'e'.'C'.'9tb2'.'R1'.'bG'.'VzL21'.'haW'.'4vYWRta'.'W4vZGVm'.'aW5lLnBocA==','dw==','PA==','P0RlZmluZ'.'SgiVE'.'VNUE9SQVJZX0NBQ0'.'hF'.'IiwgIg='.'=','Ii'.'k'.'7'.'Pw'.'==','Pg==','RmlsZSBv'.'cGVuIGZhaW'.'xz'.'IFtBU0FMSTA'.'yXQ==','Rm9sZGVyI'.'GlzIG5'.'vdCB'.'3c'.'ml0YWJs'.'ZS'.'BbQVNBT'.'E'.'kwM10=','REFU'.'RV'.'9U'.'T19TT1V'.'SQ0U=',''.'bWF'.'pbg==',''.'f'.'n'.'N1cH'.'Bv'.'cnR'.'fZ'.'mlu'.'aXN'.'o'.'X'.'2RhdGU=',''.'RE'.'FU'.'RV9U'.'T19TT1VSQ0U=','TUFYX1N'.'JVEVT','b'.'WFpbg==',''.'U'.'EF'.'SQU1fT'.'UFYX1NJVEVT','TUFY'.'X'.'1N'.'JVE'.'VT',''.'TUF'.'YX1'.'VTR'.'VJT','bWFpbg==','UE'.'FSQU1fTUF'.'Y'.'X1'.'VTRVJT',''.'TUFYX1VTR'.'VJT','TU'.'FYX1VT'.'RVJTX'.'1NUUklORw='.'=','bWFpbg==','flBBUk'.'F'.'NX'.'01'.'B'.'WF'.'9VU0V'.'SUw==',''.'TU'.'FYX'.'1VTRVJTX1NU'.'Uk'.'lORw==','REF'.'URV9U'.'T19TT1V'.'S'.'Q0V'.'fU'.'1RSSU5'.'H',''.'b'.'W'.'F'.'pbg'.'='.'=','flBBUkFNX0ZJ'.'Tk'.'lTSF9EQVRF','REFURV'.'9UT19TT1VS'.'Q0VfU'.'1R'.'SSU5H','SVNM'.'Q'.'w'.'==','RE'.'9DVU1'.'FTl'.'R'.'fUk9PVA'.'==',''.'L2J'.'p'.'dHJpeA='.'=','RE'.'9DV'.'U1FTlRfUk9PVA'.'==','L'.'2Jp'.'dHJpe'.'C9'.'s'.'aWNlbn'.'NlX2t'.'l'.'eS5wa'.'HA'.'=','d2I=','PA==','Py'.'RMSU'.'NF'.'TlNFX0tFWSA9ICI=','Ijs/','Pg==',''.'Rmls'.'ZS'.'B'.'vcGVuIGZha'.'Wxz'.'I'.'F'.'tB'.'U'.'0FMS'.'T'.'A0X'.'Q==',''.'Rm9'.'sZGVyIGlzIG5vd'.'CB3'.'cml0YWJ'.'sZSBbQVNBTEkwNV0'.'=','Tm90IGZvdW5kIG'.'xpY2V'.'uc2'.'UgaW5mbyB'.'bQVN'.'BS'.'DAxX'.'Q==',''.'c'.'mVzd'.'Wx'.'0',''.'cmVz'.'dW'.'x0','ZXJyb3'.'I=','bWVzc2FnZQ==','R'.'XJyb3Igc2VuZCBwY'.'XJ0bmVy'.'I'.'GluZm8gW0FTU0lUUDAxXQ==','cm'.'V'.'zcG9u'.'c'.'2'.'U=','cmVxdWV'.'zdA='.'=','ZXJy'.'b3I=','VW5rbm9'.'3biBl'.'cnJvc'.'g==','IFtBU1N'.'J'.'VFAw'.'MV'.'0=');return base64_decode($_1364569903[$_1591603934]);}}; use Bitrix\Main\Application; use Bitrix\Main\Result; use Bitrix\Main\Security\SecurityException; use Bitrix\Main\SystemException; use Bitrix\Main\Web\Json; class ActivationSystem{  public function reincarnate(Coupon $_311925242): Result{  $_1203637489= new ReincarnationRequestBuilder($_311925242); $_284221955=(new RequestFactory($_1203637489))->build();  $_1671813023= $_284221955->send();  $_1974755828= new UpdateServerDataParser($_1671813023); $_1541903137= $_1974755828->parse(); if(isset($_1541903137[___1149344730(0)])){ throw new SystemException(($_1541903137[___1149344730(1)][___1149344730(2)] ?? ___1149344730(3)).___1149344730(4));} $_1541903137= $_1541903137[___1149344730(5)] ??[]; if(empty($_1541903137)){ throw new SystemException(___1149344730(6));} $this->applyLicenseInfo($_1541903137, $_311925242->getKey()); $_1732303721= new Result(); return $_1732303721->setData($_1541903137);}  protected function applyLicenseInfo(array $_1541903137, string $_1699320394): void{ $_837786189= $_1541903137[___1149344730(7)]; $_1218137692= $_1541903137[___1149344730(8)]; if(empty($_837786189) || empty($_1218137692)){ throw new SystemException(___1149344730(9));} \COption::SetOptionString(___1149344730(10), ___1149344730(11), ___1149344730(12)); \COption::SetOptionString(___1149344730(13), ___1149344730(14), $_837786189); if($GLOBALS['____1301819889'][0]($_SERVER[___1149344730(15)].___1149344730(16))){ if($_2041115675= $GLOBALS['____1301819889'][1]($_SERVER[___1149344730(17)].___1149344730(18), ___1149344730(19))){ $GLOBALS['____1301819889'][2]($_2041115675, ___1149344730(20).___1149344730(21).$_1218137692.___1149344730(22).___1149344730(23)); $GLOBALS['____1301819889'][3]($_2041115675);} else{ throw new SystemException(___1149344730(24));}} else{ throw new SystemException(___1149344730(25));} if(isset($_1541903137[___1149344730(26)])){ \COption::SetOptionString(___1149344730(27), ___1149344730(28), $_1541903137[___1149344730(29)]);} if(isset($_1541903137[___1149344730(30)])){ \COption::SetOptionString(___1149344730(31), ___1149344730(32), $GLOBALS['____1301819889'][4]($_1541903137[___1149344730(33)]));} if(isset($_1541903137[___1149344730(34)])){ \COption::SetOptionString(___1149344730(35), ___1149344730(36), $GLOBALS['____1301819889'][5]($_1541903137[___1149344730(37)]));} if(isset($_1541903137[___1149344730(38)])){ \COption::SetOptionString(___1149344730(39), ___1149344730(40), $_1541903137[___1149344730(41)]);} if(isset($_1541903137[___1149344730(42)])){ \COption::SetOptionString(___1149344730(43), ___1149344730(44), $_1541903137[___1149344730(45)]);} if(isset($_1541903137[___1149344730(46)])){ if($GLOBALS['____1301819889'][6]($_SERVER[___1149344730(47)].___1149344730(48))){ if($_2041115675= $GLOBALS['____1301819889'][7]($_SERVER[___1149344730(49)].___1149344730(50), ___1149344730(51))){ $GLOBALS['____1301819889'][8]($_2041115675, ___1149344730(52).___1149344730(53).EscapePHPString($_1699320394).___1149344730(54).___1149344730(55)); $GLOBALS['____1301819889'][9]($_2041115675);} else{ throw new SystemException(___1149344730(56));}} else{ throw new SystemException(___1149344730(57));}}}  public function activateByHash(string $_1022304081): Result{ $_1974755828= new HashCodeParser($_1022304081); $_1541903137= $_1974755828->parse(); if(empty($_1541903137)){ throw new SystemException(___1149344730(58));} $_1699320394= Application::getInstance()->getLicense()->getKey(); $this->applyLicenseInfo($_1541903137, $_1699320394); $_1732303721= new Result(); return $_1732303721->setData($_1541903137);}  public function sendInfoToPartner(string $_68041218, string $_1595764096, string $_903411394): Result{ $_1203637489= new PartnerInfoRequestBuilder($_68041218, $_1595764096, $_903411394); $_284221955=(new RequestFactory($_1203637489))->build();  $_1671813023= $_284221955->send(); $_1671813023= Json::decode($_1671813023); if(!isset($_1671813023[___1149344730(59)]) || $_1671813023[___1149344730(60)] === ___1149344730(61)){ $_1201328475=[ ___1149344730(62) => ___1149344730(63), ___1149344730(64) => $_1671813023, ___1149344730(65) => $_284221955]; throw new SystemException(($_1671813023[___1149344730(66)] ?? ___1149344730(67)).___1149344730(68));} return(new Result())->setData($_1671813023);}}?>