module.exports.run = async(client, message, args) => {

    if (!message.channel.name.startsWith(`ticket-`)) return message.reply(`\nYou can't use the close command outside of a ticket channel.`);

    message.reply(`\nAre you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`yes\` Or \`y\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'yes'||response.content === 'y'
      , {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
        return;
    });    


};
module.exports.configs = {
    command : "close"
};