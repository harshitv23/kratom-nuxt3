//import Vue from "vue"
//Vue.use(require('prerender-node').set('prerenderToken', 'pjjc0Wf9MdJymh9VMNPB'));

const Prerender = require('prerender-node');

Prerender.set('prerenderToken', 'pjjc0Wf9MdJymh9VMNPB');
module.exports = function (req, res, next) {
    //console.log(req.url);    
    Prerender(req, res, next);
};
