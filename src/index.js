import React from 'react';
import ReactDOM from 'react-dom';
const rootEl = document.getElementById("root");
/*
color options : 
	 'light.purple'		'dark.purple'
	 'light.blue'		  'dark.blue'
	 'light.green'		'dark.green'
	 'light.orange'		'dark.orange'
	 'light.red'		  'dark.red'
*/
var color = 'light.purple';
if (localStorage.getItem('themeColor')) {
    color = localStorage.getItem('themeColor');
}

let render = () => {
 // import("./assets/css/sass/themes/gogo.light.blue.scss").then(rs=>{ console.log("hihi")});
    console.log(color);
    switch (color) {
        case "light.blue":
            import("./assets/css/sass/themes/gogo.light.blue.scss").then(x => {
                const MainApp = require('./App').default;
                ReactDOM.render(
                    <MainApp />,
                    rootEl
                );
            });
            break;
    }


};
/*
if (module.hot) {
    module.hot.accept('./App', () => {
        const css = import('./assets/css/sass/themes/gogo.' + color + '.scss').then(x => {
            const NextApp = require('./App').default;

            render(
                <NextApp />,
                rootEl
            );
        });
    });

}*/

render() 