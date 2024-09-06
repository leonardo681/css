document.getElementByI('messageButton').addEverntListener('click', function(){
    var messageParagraph = document.getElementById('message');
    if (messageParagraph.classList.contains('hidden')){
        messageParagraph.classList.remove('hidden');
    } else {
        messageParagraph.classList.add('hidden');
    }
});