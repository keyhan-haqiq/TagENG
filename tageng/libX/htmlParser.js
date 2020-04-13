



function makeJsonOfIt(value)  {
    return JSON.stringify(value);
}


function targetDomTree(targetArr) {
    let treeObject = {};


    for(let i = 0,counter = 1;i<targetArr.length;i++) {

        if(treeObject.hasOwnProperty(targetArr[i].tagName.toLowerCase())){

            treeObject[targetArr[i].tagName.toLowerCase() + counter] = targetArr[i];
            counter++;

            continue;



        }
        treeObject[targetArr[i].tagName.toLowerCase()] = targetArr[i];

    }
    return treeObject;



}



// let body = extractBodyFromDom(html);


export let json = makeJsonOfIt;

export let domTree = targetDomTree;

