on('ready', () => {
    on('chat:message', msg => {
        if (msg.type === 'api' && msg.content.includes('!2d20Parse') && msg.inlinerolls) {
            log('Parsing a 2d20 roll');
            let skill, style, focus, difficulty;
            try {
                skill = /{{skill=(.*?)}}/gm.exec(msg.content)[1];
                style = /{{style=(.*?)}}/gm.exec(msg.content)[1];
                focus = /{{focus=(.*?)}}/gm.exec(msg.content)[1];
                difficulty = parseInt(/{{difficulty=(.*?)}}/gm.exec(msg.content)[1]);    
            } catch (e) {
                throw `Error: some arguments are missing or invalid.`;
            }

            let successes = 0;
            let passed = false;
            let momentum = 0;
            let dice = 0;
            msg.inlinerolls.forEach(r => {
                r.results.rolls.forEach(roll => {
                    dice = roll.dice;
                    const crit = roll.mods.customCrit[0].point;
                    const threshold = roll.mods.success.point;
                    roll.results.forEach(die => {
                        if (die.v <= crit) successes += 1;
                        if (die.v <= threshold) successes += 1;
                    })
                })
            })

            passed = successes >= difficulty;

            if (passed) {
                momentum = successes - difficulty;
            }

            const command = `&{template:roll} {{skill=${skill}}} {{style=${style}}} {{focus=${focus}}} {{dice=${dice}}} {{difficulty=${difficulty}}} {{result=${successes}}} {{momentum=${momentum}}} {{class=${passed ? 'passed':'failed'}}} {{passed=${passed ? `passed, with ${momentum} Momentum generated` : 'failed'}}}`;

            log('Debug');
            log(command);

            sendChat(msg.who, command)
        }
    })
})