/// <reference path="../../../../typings/tsd.d.ts"/>
var swdb;
(function (swdb) {
    var controllers;
    (function (controllers) {
        'use strict';
        var ShellController = (function () {
            function ShellController() {
                this.title = 'Star Wars Database';
            }
            return ShellController;
        })();
        angular.module('swdb')
            .controller('shellController', ShellController);
    })(controllers = swdb.controllers || (swdb.controllers = {}));
})(swdb || (swdb = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGVsbC9zaGVsbENvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsic3dkYiIsInN3ZGIuY29udHJvbGxlcnMiLCJzd2RiLmNvbnRyb2xsZXJzLlNoZWxsQ29udHJvbGxlciIsInN3ZGIuY29udHJvbGxlcnMuU2hlbGxDb250cm9sbGVyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFFcEQsSUFBTyxJQUFJLENBZ0JWO0FBaEJELFdBQU8sSUFBSTtJQUFDQSxJQUFBQSxXQUFXQSxDQWdCdEJBO0lBaEJXQSxXQUFBQSxXQUFXQSxFQUFDQSxDQUFDQTtRQUN4QkMsWUFBWUEsQ0FBQ0E7UUFPYkE7WUFFQ0M7Z0JBREFDLFVBQUtBLEdBQVdBLG9CQUFvQkEsQ0FBQ0E7WUFFckNBLENBQUNBO1lBQ0ZELHNCQUFDQTtRQUFEQSxDQUpBRCxBQUlDQyxJQUFBRDtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTthQUNwQkEsVUFBVUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0EsRUFoQldELFdBQVdBLEdBQVhBLGdCQUFXQSxLQUFYQSxnQkFBV0EsUUFnQnRCQTtBQUFEQSxDQUFDQSxFQWhCTSxJQUFJLEtBQUosSUFBSSxRQWdCViIsImZpbGUiOiJhcHAvc2hlbGwvc2hlbGxDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XHJcblxyXG5tb2R1bGUgc3dkYi5jb250cm9sbGVycyB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpbnRlcmZhY2UgSVNoZWxsQ29udHJvbGxlclxyXG5cdHtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVxyXG5cclxuXHRjbGFzcyBTaGVsbENvbnRyb2xsZXIgaW1wbGVtZW50cyBJU2hlbGxDb250cm9sbGVye1xyXG5cdFx0dGl0bGU6IHN0cmluZyA9ICdTdGFyIFdhcnMgRGF0YWJhc2UnO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdzd2RiJylcclxuXHRcdC5jb250cm9sbGVyKCdzaGVsbENvbnRyb2xsZXInLCBTaGVsbENvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9