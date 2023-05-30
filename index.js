function shadowizard(options) {
    let images = document.querySelectorAll('.shadowizard');

    if (options.type === 'hard')
        options.type = '0px'
    else
        options.type = '15px'

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.type} 1px rgba(0,0,0,0.12)`;
        
        if(options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.shadowizard = shadowizard;