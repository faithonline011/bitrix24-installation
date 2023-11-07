(() => {
	const { MenuSelectField } = jn.require('layout/ui/fields/menu-select');

	class ProjectTypeField extends LayoutComponent
	{
		static get types()
		{
			return {
				public: BX.message('MOBILE_LAYOUT_PROJECT_FIELDS_TYPE_PUBLIC_TITLE'),
				private: BX.message('MOBILE_LAYOUT_PROJECT_FIELDS_TYPE_PRIVATE_TITLE'),
				secret: BX.message('MOBILE_LAYOUT_PROJECT_FIELDS_TYPE_SECRET_TITLE'),
			};
		}

		render()
		{
			return View(
				{},
				MenuSelectField({
					readOnly: false,
					title: BX.message('MOBILE_LAYOUT_PROJECT_FIELDS_TYPE_TITLE'),
					value: this.props.value,
					onChange: (id, title) => this.props.onChange(id, title),
					config: {
						menuTitle: BX.message('MOBILE_LAYOUT_PROJECT_FIELDS_TYPE_MENU_TITLE'),
						menuItems: [
							{
								id: 'public',
								title: ProjectTypeField.types.public,
								subtitle: BX.message('MOBILE_LAYOUT_PROJECT_FIELDS_TYPE_PUBLIC_SUBTITLE'),
								icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5099 10.7668C15.5099 10.7668 15.4924 11.1101 15.4753 11.156C15.4363 11.2153 15.4035 11.2784 15.3773 11.3444C15.3994 11.3444 15.6281 11.453 15.6281 11.453L16.5137 11.7369L16.5009 12.1661C16.3326 12.2348 15.9776 12.4953 15.9165 12.5798C16.7234 12.9144 17.4645 13.5835 17.4836 14.1315C17.4967 14.2291 17.9852 16.0252 18.0143 16.4295H21.4729C21.4759 16.4127 21.3605 14.0894 21.3593 14.0718C21.3593 14.0718 21.1453 13.5122 20.8062 13.4553C20.4694 13.4116 20.1444 13.3028 19.8491 13.135C19.6541 13.0194 19.4483 12.9231 19.2346 12.8473C19.1251 12.7488 19.0403 12.626 18.9871 12.4886C18.8747 12.3457 18.7271 12.2345 18.5587 12.1661L18.5461 11.7369L19.432 11.454C19.432 11.454 19.6605 11.3454 19.6828 11.3454C19.6474 11.2698 19.6066 11.1967 19.5607 11.1269C19.5439 11.0813 19.4604 10.7683 19.4604 10.7683C19.5895 10.9371 19.7414 11.0872 19.9118 11.2142C19.7609 10.9261 19.6318 10.627 19.5256 10.3196C19.4545 10.0349 19.4051 9.74532 19.3778 9.45323C19.3169 8.91043 19.2222 8.37196 19.0942 7.84097C19.0031 7.57713 18.841 7.34356 18.6256 7.16602C18.3099 6.94195 17.9394 6.8076 17.5534 6.77725C17.5461 6.77725 17.5391 6.77725 17.5316 6.77725C17.524 6.77725 17.517 6.77725 17.509 6.77725C17.123 6.80749 16.7524 6.94185 16.4367 7.16602C16.2217 7.34378 16.0597 7.57728 15.9685 7.84097C15.8401 8.37191 15.7453 8.91039 15.6845 9.45323C15.6611 9.75187 15.6141 10.0482 15.5438 10.3394C15.4375 10.6414 15.306 10.9339 15.1508 11.214C15.3202 11.0863 15.5099 10.7668 15.5099 10.7668ZM17.4506 18.4674C17.4506 17.7016 16.609 14.4619 16.609 14.4619C16.609 14.4619 16.0029 13.4474 14.8088 13.1323C14.4032 13.0166 14.0184 12.8378 13.6684 12.6024C13.6123 12.4565 13.5901 12.2998 13.6035 12.1441L13.2207 12.0842C13.2207 12.0506 13.188 11.5546 13.188 11.5546C13.6479 11.3968 13.6007 10.4656 13.6007 10.4656C13.8928 10.631 14.083 9.89513 14.083 9.89513C14.4286 8.87193 13.9109 8.93349 13.9109 8.93349C14.0015 8.30843 14.0015 7.67359 13.9109 7.04854C13.681 4.97557 10.216 5.53767 10.627 6.21532C9.61448 6.02394 9.84558 8.37754 9.84558 8.37754L10.0652 8.98609C9.63406 9.2712 9.93372 9.61702 9.94827 10.0149C9.96953 10.6024 10.3207 10.4805 10.3207 10.4805C10.3425 11.4494 10.81 11.5767 10.81 11.5767C10.8979 12.1852 10.8433 12.0803 10.8433 12.0803L10.427 12.1318C10.4327 12.2701 10.4217 12.4085 10.3943 12.5442C9.9035 12.768 9.79914 12.8978 9.31258 13.1152C8.37248 13.5349 7.35069 14.083 7.16938 14.8194C6.98808 15.5559 6.44696 18.4674 6.44696 18.4674H17.4506ZM8.43657 11.1534C8.47583 11.2131 8.5089 11.2766 8.53528 11.343C8.51307 11.343 8.28282 11.4523 8.28282 11.4523L7.39111 11.7378L7.40398 12.1698C7.57342 12.239 7.722 12.3509 7.8352 12.4947C7.87809 12.5905 7.93071 12.6816 7.99223 12.7666C7.18005 13.1034 6.43405 13.5965 6.41512 14.1481C6.40174 14.2463 5.91018 16.0542 5.8809 16.4612H2.39935C2.39632 16.4443 2.51246 14.1057 2.51346 14.088C2.51346 14.088 2.72882 13.5248 3.07015 13.4675C3.40916 13.4235 3.73637 13.314 4.03356 13.1451C4.22989 13.0288 4.43704 12.9318 4.6521 12.8555C4.76233 12.7564 4.8477 12.6327 4.90129 12.4945C5.01435 12.3506 5.16298 12.2387 5.3325 12.1698L5.34538 11.7378L4.45367 11.4531C4.45367 11.4531 4.22367 11.3437 4.2012 11.3437C4.2368 11.2676 4.2778 11.1941 4.3239 11.1238C4.34081 11.0779 4.42488 10.7628 4.42488 10.7628C4.29489 10.9327 4.14195 11.0838 3.97045 11.2117C4.12233 10.9216 4.25229 10.6206 4.35924 10.3112C4.43076 10.0247 4.48047 9.73314 4.50795 9.43913C4.56923 8.89276 4.66459 8.35076 4.79349 7.81628C4.88513 7.55071 5.04833 7.31561 5.26509 7.1369C5.5829 6.91135 5.95588 6.77612 6.34438 6.74557C6.35171 6.74557 6.35877 6.74557 6.36635 6.74557C6.37392 6.74557 6.38099 6.74557 6.38907 6.74557C6.7776 6.77601 7.15061 6.91125 7.46836 7.1369C7.68484 7.31582 7.84791 7.55086 7.93972 7.81628C8.0689 8.35071 8.16436 8.89273 8.22551 9.43913C8.24905 9.73973 8.29641 10.038 8.36714 10.3311C8.47419 10.6351 8.60652 10.9296 8.76276 11.2114C8.59229 11.0829 8.44039 10.9314 8.31135 10.7613C8.31135 10.7613 8.4194 11.1072 8.43657 11.1534Z" fill="#828B95"/></svg>',
							},
							{
								id: 'private',
								title: ProjectTypeField.types.private,
								subtitle: BX.message('MOBILE_LAYOUT_PROJECT_FIELDS_TYPE_PRIVATE_SUBTITLE'),
								icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1457 15.0262V16.6184H10.8846V15.0262C10.6577 14.8412 10.5124 14.5586 10.5124 14.2418C10.5124 13.6846 10.9614 13.2329 11.5152 13.2329C12.069 13.2329 12.518 13.6846 12.518 14.2418C12.518 14.5586 12.3727 14.8412 12.1457 15.0262ZM8.76969 8.55751C8.76969 7.0319 9.99888 5.79516 11.5151 5.79516C13.0314 5.79516 14.2606 7.0319 14.2606 8.55751V10.8926H8.76969V8.55751ZM15.7115 10.8926V8.55751C15.7115 6.22563 13.8327 4.33533 11.5151 4.33533C9.19758 4.33533 7.31877 6.22563 7.31877 8.55751V10.8926H6.0448V18.8889H16.9855V10.8926H15.7115Z" fill="#828B95"/></svg>',
							},
							{
								id: 'secret',
								title: ProjectTypeField.types.secret,
								subtitle: BX.message('MOBILE_LAYOUT_PROJECT_FIELDS_TYPE_SECRET_SUBTITLE'),
								icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9075 8.13897C19.1398 9.1233 20.2314 10.272 21.1516 11.5528C21.3405 11.827 21.3405 12.1892 21.1516 12.4634C20.9945 12.6924 17.2464 18.0684 12.4249 18.0684C11.1873 18.0465 9.97292 17.728 8.88377 17.1397L7.13549 18.8824C6.85178 19.1637 6.39439 19.1637 6.11068 18.8824L5.59806 18.3715C5.31624 18.0894 5.31624 17.6323 5.59806 17.3501L7.01729 15.9344C5.75448 14.9373 4.63731 13.7686 3.69824 12.4621C3.50993 12.1882 3.50993 11.8267 3.69824 11.5528C3.8554 11.3238 7.60308 5.94777 12.4254 5.94777C13.6962 5.97145 14.9419 6.30558 16.054 6.92106L17.5161 5.46243C17.8 5.18163 18.257 5.18163 18.5409 5.46243L19.0535 5.97375C19.3354 6.25618 19.3354 6.71354 19.0535 6.99596L17.9075 8.13897ZM12.4249 7.79087C9.34661 7.79087 6.64711 10.8541 5.7405 12.007C6.50224 12.975 7.37827 13.8472 8.3495 14.6048L9.54861 13.409C9.3557 13.0005 9.24782 12.5439 9.24782 12.0621C9.24782 10.3178 10.6619 8.90373 12.4062 8.90373C12.8911 8.90373 13.3505 9.01302 13.7611 9.20833L14.6694 8.30263C13.9652 7.97709 13.2006 7.80276 12.4249 7.79087ZM11.0941 14.9358L10.2744 15.7534C10.9522 16.0539 11.6836 16.2143 12.4249 16.2249C15.4933 16.2249 18.1993 13.16 19.1085 12.0074C18.3667 11.0647 17.5169 10.2122 16.5766 9.46729L15.2833 10.7573C15.4639 11.155 15.5645 11.5968 15.5645 12.0621C15.5645 13.8064 14.1505 15.2204 12.4062 15.2204C11.938 15.2204 11.4937 15.1186 11.0941 14.9358Z" fill="#828B95"/></svg>',
							},
						],
						parentWidget: this.props.parentWidget,
					},
				})
			);
		}
	}

	this.ProjectTypeField = ProjectTypeField;
})();