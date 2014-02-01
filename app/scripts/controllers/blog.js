'use strict';

angular.module('stoogedBloggerzApp')
  .controller('BlogCtrl', function ($scope, blogService, authorService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    	$scope.blogPosts= blogService.getPosts();
    	$scope.authorName=authorService.getAuthor();

  });
