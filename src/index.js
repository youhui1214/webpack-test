import _ from 'lodash'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var elementDiv = document.createElement('div');
    // var element = document.createElement('pre');
   
    // Lodash, now imported by this script
    elementDiv.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    
    return elementDiv;
}

document.body.appendChild(component());

