define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!app/templates/dashboard.handlebars'
], function(
    $,
    _,
    Backbone,
    Handlebars,
    template
) {
    var DashboardView = Backbone.View.extend({

        template: Handlebars.compile(template),

        initialize: function() {
            var self = this;
            this.constructor.__super__.initialize.apply(this, [this.options]);
        },

        destroy: function() {
            this.off();
        },

        events: {
        },

        render: function() {
            console.log("rendering...");
            this.$el.empty().html(this.template({}));
            return this;
        }


    });
    return DashboardView;
});