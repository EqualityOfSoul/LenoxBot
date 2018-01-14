const Discord = require('discord.js');
exports.run = function(client, msg, args, lang) {
	const tableload = client.guildconfs.get(msg.guild.id);
	const roles = [];

	var help = lang.listselfassignablerole_help.replace('%prefix', tableload.prefix);
	const embed = new Discord.RichEmbed()
	.setColor('#ABCDEF')
	.setFooter(help);
	try {
		for (var i = 0; i < tableload.selfassignableroles.length; i++) {
			roles.push(msg.guild.roles.get(tableload.selfassignableroles[i]).name);
		}
		embed.addField(lang.listselfassignablerole_embed, roles.join("\n"), true);
		return msg.channel.send({ embed: embed });
	} catch (error) {
		return msg.channel.send(lang.listselfassignablerole_nolroles);
	}
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['lsar'],
    userpermissions: []
};
exports.help = {
	name: 'listselfassignablerole',
	description: 'Shows you a list of all roles that allows users to assign themselves',
	usage: 'listselfassignablerole',
	example: ['listselfassignablerole'],
	category: 'utility',
    botpermissions: ['SEND_MESSAGES']
};