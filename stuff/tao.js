let taoButton = document.querySelector("#taoButton");
let taoText = document.querySelector("#chapter");

let tao = [
    {
        chapter: 1,
        text: `The tao that can be told
        is not the eternal Tao.<br>
        The name that can be named
        is not the eternal Name.<br>
        The unnamable is the eternally real.<br>
        Naming is the origin
        of all particular things.<br>
        Free from desire, you realize the mystery.<br>
        Caught in desire, you see only the manifestations.<br>
        Yet mystery and manifestations
        arise from the same source.<br>
        This source is called darkness.<br>
        Darkness within darkness.<br>
        The gateway to all understanding.`
    },
    {
        chapter: 2,
        text: `When people see some things as beautiful,
        other things become ugly.<br>
        When people see some things as good,
        other things become bad.<br>
        Being and non-being create each other.<br>
        Difficult and easy support each other.<br>
        Long and short define each other.<br>
        High and low depend on each other.<br>
        Before and after follow each other.<br>
        Therefore the Master
        acts without doing anything
        and teaches without saying anything.<br>
        Things arise and she lets them come;<br>
        things disappear and she lets them go.<br>
        She has but doesn't possess,
        acts but doesn't expect.<br>
        When her work is done, she forgets it.<br>
        That is why it lasts forever.`
    },
    {
        chapter: 3,
        text: `If you overesteem great men,
        people become powerless.<br>
        If you overvalue possessions,
        people begin to steal.<br>
        The Master leads
        by emptying people's minds
        and filling their cores,
        by weakening their ambition
        and toughening their resolve.<br>
        He helps people lose everything
        they know, everything they desire,
        and creates confusion
        in those who think that they know.<br>
        Practice not-doing,
        and everything will fall into place.`
    },
    {
        chapter: 4,
        text: `The Tao is like a well:<br>
        used but never used up.<br>
        It is like the eternal void:<br>
        filled with infinite possibilities.<br>
        It is hidden but always present.<br>
        I don't know who gave birth to it.<br>
        It is older than God.<br>`
    },
    {
        chapter: 5,
        text: `The Tao doesn't take sides;<br>
        it gives birth to both good and evil.<br>
        The Master doesn't take sides;<br>
        she welcomes both saints and sinners.<br>
        The Tao is like a bellows:<br>
        it is empty yet infinitely capable.<br>
        The more you use it, the more it produces;<br>
        the more you talk of it, the less you understand.<br>
        Hold on to the center.<br>`
    },
    {
        chapter: 6,
        text: `The Tao is called the Great Mother:<br>
        empty yet inexhaustible,<br>
        it gives birth to infinite worlds.<br>
        It is always present within you.<br>
        You can use it any way you want.<br>`
    },
    {
        chapter: 7,
        text: `The Tao is infinite, eternal.<br>
        Why is it eternal?<br>
        It was never born;<br>
        thus it can never die.<br>
        Why is it infinite?<br>
        It has no desires for itself;<br>
        thus it is present for all beings.<br>
        The Master stays behind;<br>
        that is why she is ahead.<br>
        She is detached from all things;<br>
        that is why she is one with them.<br>
        Because she has let go of herself,<br>
        she is perfectly fulfilled.<br>
        `
    },
    {
        chapter: 8,
        text: `
        The supreme good is like water,<br>
        which nourishes all things without trying to.<br>
        It is content with the low places that people disdain.<br>
        Thus it is like the Tao.<br>
        In dwelling, live close to the ground.<br>
        In thinking, keep to the simple.<br>
        In conflict, be fair and generous.<br>
        In governing, don't try to control.<br>
        In work, do what you enjoy.<br>
        In family life, be completely present.<br>
        When you are content to be simply yourself<br>
        and don't compare or compete,<br>
        everybody will respect you.<br>`
    },
    {
        chapter: 9,
        text: `
        Fill your bowl to the brim
        and it will spill.<br>
        Keep sharpening your knife<br>
        and it will blunt.<br>
        Chase after money and security<br>
        and your heart will never unclench.<br>
        Care about people's approval<br>
        and you will be their prisoner.<br>
        Do your work, then step back.<br>
        The only path to serenity.<br>
        `
    },
    {
        chapter: 10,
        text: `
        Can you coax your mind from its wandering<br>
        and keep to the original oneness?<br>
        Can you let your body become<br>
        supple as a newborn child's?<br>
        Can you cleanse your inner vision<br>
        until you see nothing but the light?<br>
        Can you love people and lead them<br>
        without imposing your will?<br>
        Can you deal with the most vital matters<br>
        by letting events take their course?<br>
        Can you step back from you own mind<br>
        and thus understand all things?<br>
        Giving birth and nourishing,<br>
        having without possessing,<br>
        acting with no expectations,<br>
        leading and not trying to control:<br>
        this is the supreme virtue.<br>
        `
    },
    {
        chapter: 11,
        text: `
        We join spokes together in a wheel,<br>
        but it is the center hole<br>
        that makes the wagon move.<br>
        We shape clay into a pot,<br>
        but it is the emptiness inside<br>
        that holds whatever we want.<br>
        We hammer wood for a house,<br>
        but it is the inner space<br>
        that makes it livable.<br>
        We work with being,<br>
        but non-being is what we use.<br>
        `
    }
]

taoButton.addEventListener("click", () => {
    let chapter = Math.floor(Math.random() * tao.length);
    let framework = `
        <h3> Chapter ${chapter + 1} </h3>
        <div>${tao[chapter].text}</div>`
    taoText.innerHTML = framework;
})