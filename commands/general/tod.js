module.exports = [
  {
    name: "tod",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:
      {title:Truth or Dare :3?}
      {description:$randomText[Hewwo;Hiii;Hellooo] *!* You got two options to pick. . .\n\n$nonEscape[$customEmoji[git_eye]] **truth**\n***or***\n$customEmoji[git_fire] **dare**}
      {color:$getVar[blueHex]}
      {footer:pick $randomText[truth;dare] 👀}
      {thumbnail:$userAvatar[$clientID]}
    };{actionRow:
      {selectMenu:tod::1:1:no:
        {selectMenuOptions:๑ truth:tod0:humm... no lies okay?:false:$nonEscape[$customEmoji[git_eye]]}
        {selectMenuOptions:๑ dare:tod1:if you dare hhh:false:$nonEscape[$customEmoji[git_fire]]}
      }
    }] 
		`
	},
  {
		name: "tod",
    type: 'interaction',
    prototype: 'selectMenu',
    code: `
    $interactionUpdate[;{newEmbed:{title:\`$username\` has chosen truth...}{thumbnail:$authorAvatar}{description:Ehem... $randomText[What is the most embarrassing thing you’ve ever done?;Who are you crushing on right now?;How many people have you kissed or slept with?;What is the most childish thing you’ve done over the age of 13?;Tell me a time you were rejected, and describe it in detail for at least five minutes!;Tell me something you don’t like about me.;What is something illegal you’ve done?;What is the meanest thing you’ve ever done to somebody?;What is the grossest thing you’ve overheard someone do?;Have you ever peed yourself as an adult or teenager?;Have you ever stolen something from your parents or another person?;Who is one person you wish was still in your life?;Who is a person you don’t like but pretend to?;When was a time you felt really embarrassed for somebody else?;Do you think you’re uglier or better looking than most people you know?;Have you ever catfished anybody? If so, what happened? If not, have you wanted to?;What is the silliest thing you’re genuinely scared of?;Have you ever been pulled over by the cops?;Do you believe in ghosts?;At what age did you stop sleeping with a light on?;What is a really gross habit you have and never wanted anybody to find out?;What is something you did a long time ago that you still regret today?;What is the naughtiest thing you’ve ever done?;Have you ever heard your parents sleeping together?;Have you ever been catfished <lure (someone) into a relationship by means of a fictional online persona.> before? What happened and how did you find out?;Describe your grossest kiss and why it was so nasty!;Have you ever hacked into someone’s social media to read their messages?;Have you ever been in a police car, and if so, why?;Have you ever creeped on or stalked somebody on social media?;What is something your best friend or significant other does that you really hate?;If you had to hook up with one family member, who would it be?;Tell me about a time you fake-cried, or only pretended to be regretful in order to get out of trouble.;Who do you think is the most unattractive of all your friends?;What is the biggest lie you’ve ever told, and who did you tell it to?;If you had to go out on a date with one person of the same s*x, who would it be?]}{color:B2FFB2}};{actionRow:{selectMenu:tod::1:1:yes:{selectMenuOptions:๑ truth:tod0:humm... no lies okay?:yes:$nonEscape[$customEmoji[git_eye]]}}}]

    $onlyIf[$interactionData[values[0]]==tod0;]
		`
	},
  {
		name: "tod",
    type: 'interaction',
    prototype: 'selectMenu',
    code: `
    $interactionUpdate[;{newEmbed:{title:Uuuu, \`$username\` has chosen dare!}{thumbnail:$authorAvatar}{description:Hmm... $randomText[We dare you to send to a person in here $customEmoji[mnsToken] 5,000 AKI Tokens!;Shave your arms and send us a pic.;Message someone you haven’t talked to in at least 1 year on Facebook, Instagram or Discord and take a screenshot and send it to us.;Record yourself singing a song for 15 secs and send it to here in 2 mins!;Text your crush and ask them out on an e-date and send screenshot to us.;Pick the third number on your contacts list and message them a silly poem, and show it to us^^;Cut a piece of your hair and show it to us with peace sign.;Ask a neighbor if they have fifty cents and record voice hhhh;Send us a screenshot of your messages with the last person besides -the person asked- you texted.;Brush your teeth with peanut butter or any food that can be rub on the tooth and send us a pic.;Send us a screenshot of your selfies gallery.;Shave a part of your body you wouldn’t usually shave and send it to us.;Pretend to be a cat for 30 secs in Voice Chat.;ChAt WiTh aN aCcEnT fOr ThE rEst of tHe gaMe lIke a CaT, meow.]}{color:FEB2B2}};{actionRow:{selectMenu:tod::1:1:yes:{selectMenuOptions:๑ dare:tod1:if you dare hhh:yes:$nonEscape[$customEmoji[git_fire]]}}}]

    $onlyIf[$interactionData[values[0]]==tod1;]
		`
	}
]
