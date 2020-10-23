require.config({
	baseUrl: "app",
	paths: {
		'angular': '../js/angular.min',
		'angular-route': '../js/angular-route.min',
		'angular-animate': '../js/angular-animate.min',
		'ngSanitize': '../js/angular-sanitize.min',
		'angular-md5': '../js/angular-md5.min',
		'ui-grid': '../js/ui-grid.min',
		'highcharts-ng': '../js/highcharts-ng.min',
		'angularAMD': '../js/angularAMD.min',
		'angular-tree-control': '../js/angular-tree-control',
		'ngDraggable': '../js/ngDraggable',
		'ui.bootstrap': '../js/ui-bootstrap.min',
		'angular.directives-round-progress': '../js/angular-round-progress-directive',
		'angular.scrollglue': '../js/angular-scrollglue',
		'angular-websocket': '../js/angular-websocket',
		'ace': '../js/ace/ace',
		'ace-language-tools': '../js/ace/ext-language_tools',
		'blockly': '../js/blockly/blockly_compressed',
		'blockly-blocks': '../js/blockly/blocks_compressed',
		'blockly-msg-en': '../js/blockly/msg/en',
		'luxon': '../js/luxon.min',
		'lodash': '../js/lodash-custom.merge.min',
		Base: 'log/Base',
		AngularBase: 'log/AngularBase',
		DomoticzBase: 'log/DomoticzBase',
		RefreshingChart: 'log/RefreshingChart',
		DataLoader: 'log/DataLoader',
		ChartLoader: 'log/ChartLoader',
		ChartZoomer: 'log/ChartZoomer'
	},
	shim: {
		'angularAMD': ['angular'],
		'angular-route': ['angular'],
		'angular-animate': ['angular'],
		'ngSanitize': ['angular'],
		'angular-md5': ['angular'],
		'ui-grid': ['angular'],
		'highcharts-ng': ['angular'],
		'angular-tree-control': ['angular'],
		'ui.bootstrap': ['angular'],
		'ngDraggable': ['angular'],
		'angular.directives-round-progress': ['angular'],
		'angular.scrollglue': ['angular'],
		'angular-websocket': ['angular'],
		'ace-language-tools': ['ace'],
		'blockly-blocks': ['blockly'],
		'blockly-msg-en': ['blockly']
	},
	deps: ['app']
});
