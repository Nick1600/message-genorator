const randomNum = () => {
    return Math.floor(Math.random() * 4);
}

const happyRememberMess = ['change the world in little ways', 'enjoy the little things', 'be yourself', 'let your light shine'];
const sadRememberMess = ['take care of yourself', 'spend time with the ones that you love', 'do something that makes you happy', 'be honest about your feelings'];
const excitedRememberMess = ['focus on the present', 'help others feel excited too', 'cultivate your passions', 'express yourself genuinly'];
const nervousRememberMess = ['be present, breath, connect with your surroundings', 'have an outward focus', 'accept your feelings', 'journal, make lists, take some time to prosses where you\'re at']

const happyYouAre = ['capable and enough', 'a world changer', 'radiant', 'brilliant'];
const sadYouAre = ['seen and loved', 'valuble and deserve respect', 'more beautiful than you know', 'worth listning to'];
const excitedYouAre = ['exactly where you\'re meant to be', 'capable of anything you set your mind to', 'ready to conquer the world', 'an inspiration for those around you'];
const nervousYouAre = ['enough for whatever lays ahead', 'capable to conquor your situation', 'an overcommer', 'destined for greatness'];


const messageGen = (feeling) => {
    if (feeling == 'happy' || feeling == 'sad' || feeling == 'excited' || feeling == 'nervous') {
        if (feeling == 'happy') {
            return `So you're feeling happy? Remember to ${happyRememberMess[randomNum()]}. You are ${happyYouAre[randomNum()]}.`;
        } else if (feeling == 'sad') {
            return `So you're feeling sad? Remember to ${sadRememberMess[randomNum()]}. You are ${sadYouAre[randomNum()]}.`;
        } else if (feeling == 'excited') {
            return `So you're feeling excited? Remember to ${excitedRememberMess[randomNum()]}. You are ${excitedYouAre[randomNum()]}.`;
        } else if (feeling == 'nervous') {
            return `So you're feeling nervous? Remember to ${nervousRememberMess[randomNum()]}. You are ${nervousYouAre[randomNum()]}.`;
        }
    } else {
        return 'Invalid feelings. Please refure to README.md for acceptable inputs.'
    }
}

console.log(messageGen('sad'));