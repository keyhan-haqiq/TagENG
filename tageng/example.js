import {tagEngine} from './libX/tagModel.js';

let tag = tagEngine();



 let mdl = {

                 	carname:'ferrari',
                  	capacity:'5',
                  	price:'2000',
                  	speed:'320',
                  	manifa:'italy'



                }

                let md = tag.setModel(mdl);
                let dom = tag.render();




