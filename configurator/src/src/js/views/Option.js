'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var config = require('../config.js');

var OptionView = Backbone.View.extend({
    tagName: 'li',

    initialize: function(options) {
        this.options = options;
    },

    render: function() {
        this.$el
            .html(this.model.get('name'))
            .attr('data-id', this.model.get('id'))
            .addClass(this.model.get('name').replace(config.OPTION_PREFIX, ''))
            .toggleClass('selected', this.model.get('selected'));
        return this;
    }
});

module.exports = OptionView;
