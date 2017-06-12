//////////////////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2017, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////////////////

define(['sources/sqleditor_utils'],
function (SqlEditorUtils) {
  describe('SqlEditorUtils', function () {

    describe('Generate a random string of size 10', function () {
      it('returns string of length 10', function () {
        expect(SqlEditorUtils.epicRandomString(10).length).toEqual(10);
      });
    });

    describe('Generate a unique hash for given string', function () {
      it('returns unique hash', function () {
        expect(SqlEditorUtils.getHash('select * from test')).toEqual(403379630);
      });
    });

  });
});