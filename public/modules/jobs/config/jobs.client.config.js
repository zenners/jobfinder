'use strict';

// Jobs module config
angular.module('jobs').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'Jobs', 'jobs', 'dropdown', '/jobs(/create)?');
		Menus.addSubMenuItem('topbar', 'jobs', 'List Jobs', 'jobs');
		Menus.addSubMenuItem('topbar', 'jobs', 'New Job', 'jobs/create');
	}
]);