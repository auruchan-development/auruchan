module.exports = (auru, message) => {
  
    Array.prototype.random = function() {
      return this[Math.floor(Math.random() * this.length)]
    /*
    The code base is from :
    https://github.com/shidoitsuka/another-miku-bot
    Thanks to him!! COOLAH CODAA!!! ^^--^^
    */
    };
/*
    Array.prototype.sendmsgchan = function() {
      return this[message.channel.send]
    };

    Array.prototype.
    */
};