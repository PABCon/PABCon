var Game = (function() {

    var players = {
        playerList: ["Willy"],

        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();

        },

        cacheDom: function() {
            this.$el = $('#form');
            this.$startButton = this.$el.find('#startButton');
            this.$resetButton = this.$el.find('#resetButton');
            this.$input = this.$el.find('input');
            this.$ul = $('ul');
            this.template = this.$ul.find('#template').html();

        },

        bindEvents: function() {

            this.$startButton.on('click', this.addPlayer.bind(this));
            this.$resetButton.on('click', this.clearPlayers.bind(this));
        },

        render: function() {
            var data = {
                playerList: this.playerList,
            };

            this.$ul.html(Mustache.render(this.template, data));
        },

        addPlayer: function() {
            if (this.$input.val() == '') { alert("You need to specify a player name") } else {
                if (this.playerList.length == 2) {

                    alert("Max 2 players can play this game. If you want to change players click Reset");
                    this.$input.val('');
                } else {

                    this.playerList.push(this.$input.val());
                    this.render();
                    this.$input.val('');
                }
            }

        },

        clearPlayers: function() {
            this.playerList = [];
            this.render();
        }

    };

    players.init();

})();