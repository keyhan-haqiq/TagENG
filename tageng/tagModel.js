import {domTree} from './libX/htmlParser.js';
import $ from 'jquery';
import S from 'string';

//right ,left,between

S.TMPL_OPEN = '[[';
S.TMPL_CLOSE = ']]';



function tag() {
    this.model;

}

tag.prototype.setModel = function(mdl) {

    this.model = mdl;
    return this.model;


}

tag.prototype.getDom = function() {

    let elements = document.querySelectorAll('[data-t="tag"]');
    let tree = domTree(elements);
    return tree;


}

tag.prototype.parseInnerValue = function(tag,valuesToBind) {

    let innerValue = tag.innerHTML;

   tag.innerHTML =  S(innerValue).template(valuesToBind).s;


}


tag.prototype.checkForBracket = function(string) {

    let result =  S(`[[${string}]]`).between('[[',']]');
    if(typeof result=='string') {
        return {status:true,value:result};
    }
    return false;


}



tag.prototype.render = function() {

    let dom = this.getDom();

    for(let elm in dom)  {
        console.log(dom[elm]);

      this.parseInnerValue(dom[elm],this.model);



}

return dom;



    //here we do the renderng;



}



export const tagEngine = function() {
    return new tag();

};

