
const fs = require('fs');
let path = require('path');
const xlsx = require('node-xlsx');

var filepath = path.join(__dirname, './src/code_company.xlsx');
var twoThreeMappingPath = path.join(__dirname, './src/ISO3166.xlsx');


var arr = getCompanyCodeArr(filepath);
var twoThreeArr = getTwoThreeMappingArr(twoThreeMappingPath);

var resultArr = arr.map(item=>{
    var existMapping = findCode(twoThreeArr, item)
    if(existMapping){
        item.twocode = existMapping.two;
        item.threecode = existMapping.three;
    }
    return item;
});

resultArr.sort((x,y)=>{
    return x.threecode?1:-1;
});

writeFile("codemapping.json",JSON.stringify(resultArr));

function findCode(mappingArr, item){
    var mapping = mappingArr.filter(x=>{
        return x.name == item.name
    })
    return mapping && mapping.length>0? mapping[0]:null;
}

function getTwoThreeMappingArr(path){
    var twoThreeMapping = xlsx.parse(path);
    if(twoThreeMapping.length>0){
        twoThreeMapping = twoThreeMapping[0].data;
    }
    var  MappingArr= [];
    twoThreeMapping.forEach(item=>{
        MappingArr.push({
            name: item[0],
            two: item[1],
            three: item[2],
            desc: item[4]
        });
    })
    MappingArr.shift();
    return MappingArr;
}

function getCompanyCodeArr(path){
    var list = xlsx.parse(path);
    if(list.length>0){
        list = list[0].data;
    }
    var CodeArr = [];
    list.forEach(item=>{
        CodeArr.push({
            code:item[0],
            name:item[1],
            cname:item[2]
        });
    })
    CodeArr.shift();
    return CodeArr;
}

function writeFile(fileName,data){  
  fs.writeFile(fileName,data,'utf-8', function(err){
      if(!err){
          console.log("文件生成成功");
      }   
    });
}