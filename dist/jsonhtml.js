/**
 * JSONHTML
 * author: Gus de Boer
 */
var JSONHTML = (function JSONHTML() {

    /**
     * Tags without a closing tag
     *
     * @type {string[]}
     * @private
     */
    var _nonClose = [
        'meta',
        'img',
        'hr',
        'br',
        'input',
        'select'
    ];

    /**
     * Debug boolean, Set to false to disable logging
     *
     * @type {boolean}
     * @private
     */
    var _debug = false;

    return function JSONHTMLConstructor() {
        var _this = this;

        /**
         * Parse JSON object
         *
         * @param object
         * @returns {string}
         */
        _this.parse = function (object) {
            var html = '';
            var c = object.dom.children;

            if(object.hasOwnProperty('onBefore')){

                _this.log('Has onBefore');
                _this.callbacks.onBefore(object);
            }

            for (var e in c) {
                html += _this.createElement(c[e]);
            }

            if(object.hasOwnProperty('onComplete')){

                _this.log('Has onComplete');
                _this.callbacks.onComplete(object);
            }

            return html;
        };

        /**
         * Create and HTML element
         *
         * @param element
         * @returns {string}
         */
        _this.createElement = function (element) {
            var e = _this.createTag(element);

            if(element.hasOwnProperty('children')){
                for(var c in element.children){
                    e += _this.createElement(element.children[c]);
                }
            }
            if(_nonClose.indexOf(element.tag) < 0){
                if(element.hasOwnProperty('inner')){
                    if(element.inner instanceof Array){

                        var value = element.inner[0].replace(/%s/g, function () {
                                return element.inner[1].shift();
                            });

                        e += value;
                    }else{
                        e += element.inner;
                    }
                }
                e += '</' + element.tag + '>';
            }

            return e;
        };

        /**
         * Create a HTML tag with assigned attributes
         *
         * @param element
         * @returns {string}
         */
        _this.createTag = function (element) {
            var tag = '<' + element.tag;
            var value = '';
            for(var a in element.attr){
                if(element.attr[a] instanceof Array){
                    value = element.attr[a].join(' ');
                }else{
                    value = element.attr[a];
                }
                tag += ' ' + a + '="' + value + '"'
            }
            tag += '>';

            return tag;
        };

        /**
         * JSONHTML callbacks
         *
         * @type {{onComplete: JSONHTMLConstructor.callbacks.onComplete, onBefore: JSONHTMLConstructor.callbacks.onBefore}}
         */
        _this.callbacks = {

            /**
             * Execute function when JSONHTML is done parsing
             *
             * @param object
             */
            onComplete: function (object) {
                _this.executeCallback('onComplete', object);
            },

            /**
             * Execute function before everything else
             *
             * @param object
             */
            onBefore: function (object) {
                _this.executeCallback('onBefore', object);
            }

        };

        /**
         * Execute callbacks from string or inline function
         *
         * @param type
         * @param object
         */
        _this.executeCallback = function (type, object) {
            var callback = object[type];
            if (typeof callback === 'string' || callback instanceof String) {

                _this.log(type + ' is a string');
                var fn = window[callback];
                if (typeof fn === 'function') {
                    fn();
                }
            } else if (typeof callback === 'function') {

                _this.log(type + ' is a pre set function');
                callback();
            }
        };

        /**
         * Log if debugging is true
         *
         * @param log
         */
        _this.log = function (log) {
            if(_debug){
                console.log(log);
            }
        }
    };
}());