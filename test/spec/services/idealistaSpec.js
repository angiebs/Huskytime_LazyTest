define(['angular', 'angular-mocks', 'app'], function(){
  'use strict';
  describe('IdealistaFactory', function () {

    var idealistaFactory;
    beforeEach(module('sharpeye.search'));
    beforeEach(inject(function (_IdealistaFactory_) {
      idealistaFactory = _IdealistaFactory_;
    }));

    describe('Model', function () {

      it('should provide 5 type of houses', function () {
        var houseTypes = idealistaFactory.getTypeOfHouses();
        expect(houseTypes.length).toEqual(5);
        expect(houseTypes).toContain('flat');
        expect(houseTypes).toContain('duplex');
        expect(houseTypes).toContain('penthouse');
        expect(houseTypes).toContain('chalet');
        expect(houseTypes).toContain('country-home');
      });

      it('should provide 3 type of house conditions', function(){
        var conditions = idealistaFactory.getHouseConditions();
        expect(conditions.length).toEqual(3);
        expect(conditions).toContain('indifferent');
        expect(conditions).toContain('needs-renovating');
        expect(conditions).toContain('good-condition');
      });

      it('should provide 13 taxonimies', function(){
        var taxonomies = idealistaFactory.getHouseTaxonomies();
        expect(taxonomies.length).toEqual(13);
        expect(taxonomies).toContain('lift');
        expect(taxonomies).toContain('photos');
        expect(taxonomies).toContain('terrace');
      });


    });
  });
});
