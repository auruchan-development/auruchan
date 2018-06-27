module.exports = (auru, message) => {
  
    Array.prototype.random = function() {
      return this[Math.floor(Math.random() * this.length)]
    };

    Array.prototype.sendmsgchan = function() {
      return this[message.channel.send]
    };

};      