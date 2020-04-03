'use strict';

describe('myStore.version module', function() {
  beforeEach(module('myStore.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
