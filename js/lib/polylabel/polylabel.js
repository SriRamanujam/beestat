/* eslint-disable */

!function(a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).polylabel=a()}(function(){return(function d(e,f,b){function c(a,k){if(!f[a]){if(!e[a]){var i="function"==typeof require&&require;if(!k&&i)return i(a,!0);if(g)return g(a,!0);var j=new Error("Cannot find module '"+a+"'");throw j.code="MODULE_NOT_FOUND",j}var h=f[a]={exports:{}};e[a][0].call(h.exports,function(b){return c(e[a][1][b]||b)},h,h.exports,d,e,f,b)}return f[a].exports}for(var g="function"==typeof require&&require,a=0;a<b.length;a++)c(b[a]);return c})({1:[function(a,b,c){"use strict";var d=a("tinyqueue");function e(a,b){return b.max-a.max}function f(a,b,c,d){this.x=a,this.y=b,this.h=c,this.d=g(a,b,d),this.max=this.d+this.h*Math.SQRT2}function g(j,b,k){for(var d=!1,e=1/0,f=0;f<k.length;f++)for(var g=k[f],i=0,l=g.length,m=l-1;i<l;m=i++){var a=g[i],c=g[m];a[1]>b!=c[1]>b&&j<(c[0]-a[0])*(b-a[1])/(c[1]-a[1])+a[0]&&(d=!d),e=Math.min(e,h(j,b,a,c))}return(d?1:-1)*Math.sqrt(e)}function h(g,h,i,e){var c=i[0],d=i[1],a=e[0]-c,b=e[1]-d;if(0!==a||0!==b){var f=((g-c)*a+(h-d)*b)/(a*a+b*b);f>1?(c=e[0],d=e[1]):f>0&&(c+=a*f,d+=b*f)}return(a=g-c)*a+(b=h-d)*b}b.exports=function(c,o,t){o=o||1;for(var k,l,m,n,i=0;i<c[0].length;i++){var g=c[0][i];(!i||g[0]<k)&&(k=g[0]),(!i||g[1]<l)&&(l=g[1]),(!i||g[0]>m)&&(m=g[0]),(!i||g[1]>n)&&(n=g[1])}for(var p=Math.min(m-k,n-l),a=p/2,h=new d(null,e),q=k;q<m;q+=p)for(var r=l;r<n;r+=p)h.push(new f(q+a,r+a,a,c));for(var j=function m(h){for(var c=0,i=0,j=0,d=h[0],e=0,k=d.length,l=k-1;e<k;l=e++){var a=d[e],b=d[l],g=a[0]*b[1]-b[0]*a[1];i+=(a[0]+b[0])*g,j+=(a[1]+b[1])*g,c+=3*g}return new f(i/c,j/c,0,h)}(c),s=h.length;h.length;){var b=h.pop();b.d>j.d&&(j=b,t&&console.log("found best %d after %d probes",Math.round(1e4*b.d)/1e4,s)),b.max-j.d<=o||(a=b.h/2,h.push(new f(b.x-a,b.y-a,a,c)),h.push(new f(b.x+a,b.y-a,a,c)),h.push(new f(b.x-a,b.y+a,a,c)),h.push(new f(b.x+a,b.y+a,a,c)),s+=4)}return t&&(console.log("num probes: "+s),console.log("best distance: "+j.d)),[j.x,j.y]}},{tinyqueue:2}],2:[function(c,b,d){"use strict";function a(b,d){if(!(this instanceof a))return new a(b,d);if(this.data=b||[],this.length=this.data.length,this.compare=d||e,b)for(var c=Math.floor(this.length/2);c>=0;c--)this._down(c)}function e(a,b){return a<b?-1:a>b?1:0}function f(a,b,c){var d=a[b];a[b]=a[c],a[c]=d}b.exports=a,a.prototype={push:function(a){this.data.push(a),this.length++,this._up(this.length-1)},pop:function(){var a=this.data[0];return this.data[0]=this.data[this.length-1],this.length--,this.data.pop(),this._down(0),a},peek:function(){return this.data[0]},_up:function(a){for(var b=this.data,d=this.compare;a>0;){var c=Math.floor((a-1)/2);if(0>d(b[a],b[c]))f(b,c,a),a=c;else break}},_down:function(b){for(var c=this.data,g=this.compare,h=this.length;;){var d=2*b+1,e=d+1,a=b;if(d<h&&0>g(c[d],c[a])&&(a=d),e<h&&0>g(c[e],c[a])&&(a=e),a===b)return;f(c,a,b),b=a}}}},{}]},{},[1])(1)})