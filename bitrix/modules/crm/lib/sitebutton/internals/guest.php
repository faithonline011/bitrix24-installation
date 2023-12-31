<?
namespace Bitrix\Crm\SiteButton\Internals;

use	Bitrix\Main\Localization\Loc;
use Bitrix\Main\Type\DateTime;
use Bitrix\Main\Security\Random;
use Bitrix\Main\Entity\DataManager;

Loc::loadMessages(__FILE__);

/**
 * Class GuestTable
 *
 * DO NOT WRITE ANYTHING BELOW THIS
 *
 * <<< ORMENTITYANNOTATION
 * @method static EO_Guest_Query query()
 * @method static EO_Guest_Result getByPrimary($primary, array $parameters = [])
 * @method static EO_Guest_Result getById($id)
 * @method static EO_Guest_Result getList(array $parameters = [])
 * @method static EO_Guest_Entity getEntity()
 * @method static \Bitrix\Crm\SiteButton\Internals\EO_Guest createObject($setDefaultValues = true)
 * @method static \Bitrix\Crm\SiteButton\Internals\EO_Guest_Collection createCollection()
 * @method static \Bitrix\Crm\SiteButton\Internals\EO_Guest wakeUpObject($row)
 * @method static \Bitrix\Crm\SiteButton\Internals\EO_Guest_Collection wakeUpCollection($rows)
 */
class GuestTable extends DataManager
{
	/**
	 * Returns DB table name for entity.
	 *
	 * @return string
	 */
	public static function getTableName()
	{
		return 'b_crm_button_guest';
	}

	/**
	 * Returns entity map definition.
	 *
	 * @return array
	 */
	public static function getMap()
	{
		return array(
			'ID' => array(
				'data_type' => 'integer',
				'primary' => true,
				'autocomplete' => true,
			),
			'DATE_CREATE' => array(
				'data_type' => 'datetime',
				'default_value' => new DateTime(),
			),
			'GID' => array(
				'data_type' => 'string',
				'required' => true,
				'unique' => true,
				'default_value' => function(){
					return GuestTable::generateGuestId();
				}
			)
		);
	}

	public static function generateGuestId()
	{
		for ($i = 0; $i < 10; $i++)
		{
			$gid = Random::getString(32);
			$guestDb = static::getList(array(
				'select' => array('ID'),
				'filter' => array('=GID' => $gid),
				'limit' => 2
			));
			if ($guestDb->fetch() === false)
			{
				return $gid;
			}
		}

		return null;
	}
}