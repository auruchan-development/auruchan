module.exports = (auru, message) => {

    Array.prototype.random = function() {
      return this[Math.floor(Math.random() * this.length)]
    };

    sleep = (ms) => {
      var start = new date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) >
      ms) {
        break;
        }
      }
    };

    blocked => {
      message.channel.send(`\`\`\`\`Command currently blocked due to technical issues.\nYou can Check the bot issues at https://www.ggithub.com/auruchan-development/auruchan/issues\nThanks For using Auruchan\`\`\``)
      return;
    }

};
