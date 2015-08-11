'use strict';

//jobs service used for communicating with the articles REST endpoints
angular.module('jobs').factory('Jobs', ['$resource',
	function($resource) {
		return $resource('jobs/:jobId', {
			jobId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);