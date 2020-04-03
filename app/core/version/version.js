'use strict';

angular.module('myStore.version', [
  'myStore.version.interpolate-filter',
  'myStore.version.version-directive'
])

.value('version', '0.1');
