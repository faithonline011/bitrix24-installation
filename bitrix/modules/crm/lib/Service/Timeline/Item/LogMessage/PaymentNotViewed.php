<?php

namespace Bitrix\Crm\Service\Timeline\Item\LogMessage;

use Bitrix\Crm\Service\Timeline\Item\Interfaces;
use Bitrix\Crm\Service\Timeline\Item\Mixin;
use Bitrix\Crm\Service\Timeline\Item\LogMessage;
use Bitrix\Crm\Service\Timeline\Layout\Common\Icon;
use Bitrix\Crm\Service\Timeline\Layout\Header\Tag;
use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__DIR__ . '/../Ecommerce.php');

class PaymentNotViewed extends LogMessage implements Interfaces\HasPaymentDetailsContentBlock
{
	use Mixin\HasPaymentDetailsContentBlock;

	public function getType(): string
	{
		return 'PaymentNotViewed';
	}

	public function getTitle(): ?string
	{
		return Loc::getMessage('CRM_TIMELINE_ECOMMERCE_PAYMENT_PAGE');
	}

	public function getIconCode(): ?string
	{
		return Icon::VIEW;
	}

	public function getTags(): ?array
	{
		return [
			'status' => new Tag(
				Loc::getMessage('CRM_TIMELINE_ECOMMERCE_PAYMENT_PAGE_NOT_VIEWED'),
				Tag::TYPE_SECONDARY
			),
		];
	}

	public function getContentBlocks(): ?array
	{
		return [
			'details' => $this->getPaymentDetailsContentBlock(),
		];
	}
}
