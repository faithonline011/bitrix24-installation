<?php

namespace Bitrix\Tasks\Rest\Controllers\ViewedGroup;

use Bitrix\Main\SystemException;
use Bitrix\Tasks\Comments;
use Bitrix\Tasks\Rest\Controllers\Task\Comment;

final class Project extends Base
{
	protected const ITEM = 'PROJECT';
	protected const LIST = 'PROJECTS';

	protected const VIEWED_TYPE = Comments\Viewed\Enum::PROJECT;

	/**
	 * @param $fields
	 * @return bool|null
	 * @throws SystemException
	 */
	public function markAsReadAction($fields): ?bool
	{
		$fields['GROUP_ID'] = ($fields['GROUP_ID'] ?? null);
		$fields['ROLE'] = ($fields['ROLE'] ?? null);

		if (Comments\Viewed\Group::isOn())
		{
			$r = (new Comments\Viewed\Group())->markAsRead(
				$fields['GROUP_ID'],
				Comments\Viewed\Group::ROLE_ALL,
				Comments\Viewed\Enum::resolveTypeById(Comments\Viewed\Enum::PROJECT)
			);

			if ($r->isSuccess() === false)
			{
				$this->addErrors($r->getErrors());
				return null;
			}

			$params = Comments\Viewed\Event::prepare($fields);
			Comments\Viewed\Event::addByTypeCounterService(Comments\Viewed\Enum::PROJECT,  $params);
			Comments\Viewed\Event::addByTypePushService(Comments\Viewed\Enum::PROJECT, $params);

			return true;
		}

		return $this->forward(new Comment(), 'readProject', ['groupId' => $fields['GROUP_ID']]);
	}
}