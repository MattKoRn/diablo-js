(function(undefined) {

var imageCount=0;
function loadImage(url,angles,steps,offsetX){
    imageCount++;
    var i=new Image();
    i.onload=function(){
        imageCount--;
        i.offsetX=offsetX?((i.height/angles)>>2):0;
    }
    i.src=url;
    if(typeof angles!="undefined" && typeof steps!="undefined"){
        i.angles=angles;
        i.steps=steps;
    }
    return i;
}
function load(img,callback){
    if(img.complete)callback();
    else img.addEventListener('load',callback,false);
}

var level = {
    floor:{
        prefix:"dttool/output/1/",
        map:[
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0, 756, 756, 756, 756, 756, 756,   0,   0,   0,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756,1140, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756,1140, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 660, 660, 372, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756,1908, 756, 756, 756, 756, 756, 756, 756,],
            [   0,   0, 756, 756, 756, 756, 756, 756,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
        ],
        header:{
            372:false,
            660:false,
            756:false,
            1140:false,
            1908:false,  
        }
    },  
    wall:{
        prefix:"dttool/output/0/",
        map:[
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0, 948, 372, 372, 372, 948, 372,2100,   0,   0,],
            [   0, 948,1140,   0,   0,   0, 468,   0,2004, 372, 948,],
            [   0, 468,   0,   0,   0,   0,1524,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0,1428,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0, 468,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0, 468,   0,   0,   0,1524,],
            [   0, 948, 372, 372, 372, 372,1140,   0,   0,   0,1428,],
            [   0, 468,   0,   0,   0,   0,   0,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0,   0,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0,   0,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0,   0,   0,   0,   0, 468,],
            [   0,2004,2100,   0,   0,   0,   0,   0, 948, 372,2004,],
            [   0,   0,2004, 372, 372, 372, 372, 372,1140,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
        ],
        header:{
            276:{orientation:8, main_index:5, sub_index:2, direction:1, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,]},
            372:{orientation:2, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,]},
            468:{orientation:1, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            564:{orientation:2, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,]},
            660:{orientation:2, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,]},
            756:{orientation:1, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            852:{orientation:1, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            948:{orientation:3, main_index:5, sub_index:0, direction:3, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,]},
            1044:{orientation:4, main_index:5, sub_index:0, direction:3, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,]},
            1140:{orientation:7, main_index:5, sub_index:0, direction:4, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            1236:{orientation:9, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,]},
            1332:{orientation:9, main_index:5, sub_index:1, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            1428:{orientation:8, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            1524:{orientation:8, main_index:5, sub_index:1, direction:1, walk:[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            1620:{orientation:9, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,]},
            1716:{orientation:9, main_index:5, sub_index:1, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            1812:{orientation:8, main_index:5, sub_index:1, direction:1, walk:[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            1908:{orientation:8, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            2004:{orientation:6, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,]},
            2100:{orientation:5, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            2196:{orientation:6, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,]},
            2292:{orientation:5, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            2388:{orientation:2, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,]},
            2484:{orientation:1, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            2580:{orientation:3, main_index:5, sub_index:0, direction:3, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,]},
            2676:{orientation:4, main_index:5, sub_index:0, direction:3, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,]},
            2772:{orientation:12, main_index:5, sub_index:0, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
        }
    },
    object:{
        prefix:"dttool/output/2/",
        map:[
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,5844,   0,   0,3828,   0,   0,   0,],
            [   0,   0,4212,4116,   0,   0,   0,3732,   0,   0,   0,],
            [   0,   0,   0,4404,1524,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,4308,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,5652, 372, 276,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,5748,   0,   0,   0,   0,],
            [   0,   0,   0,2676,2580,2484,   0,   0,   0,   0,   0,],
            [   0,   0,2868,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,3444,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
        ],
        header:{
            276:{orientation:2, main_index:9, sub_index:12, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,]},
            372:{orientation:2, main_index:9, sub_index:11, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,]},
            468:{orientation:12, main_index:50, sub_index:0, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,]},
            564:{orientation:12, main_index:9, sub_index:33, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,]},
            660:{orientation:1, main_index:9, sub_index:33, direction:1, walk:[1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,]},
            756:{orientation:7, main_index:9, sub_index:33, direction:4, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,]},
            852:{orientation:12, main_index:9, sub_index:32, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            948:{orientation:12, main_index:9, sub_index:31, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,]},
            1044:{orientation:1, main_index:9, sub_index:10, direction:1, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            1140:{orientation:1, main_index:9, sub_index:9, direction:1, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            1236:{orientation:1, main_index:9, sub_index:8, direction:1, walk:[1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            1332:{orientation:12, main_index:9, sub_index:11, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,]},
            1428:{orientation:12, main_index:9, sub_index:10, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,]},
            1524:{orientation:12, main_index:9, sub_index:9, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            1620:{orientation:12, main_index:9, sub_index:8, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            1716:{orientation:12, main_index:9, sub_index:7, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            1812:{orientation:12, main_index:9, sub_index:6, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            1908:{orientation:12, main_index:9, sub_index:5, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2004:{orientation:12, main_index:9, sub_index:4, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2100:{orientation:12, main_index:9, sub_index:3, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2196:{orientation:12, main_index:9, sub_index:2, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2292:{orientation:12, main_index:9, sub_index:1, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2388:{orientation:12, main_index:9, sub_index:0, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2484:{orientation:2, main_index:9, sub_index:10, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            2580:{orientation:2, main_index:9, sub_index:9, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,]},
            2676:{orientation:2, main_index:9, sub_index:8, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]},
            2772:{orientation:2, main_index:9, sub_index:7, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            2868:{orientation:2, main_index:9, sub_index:6, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            2964:{orientation:1, main_index:9, sub_index:7, direction:1, walk:[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            3060:{orientation:1, main_index:9, sub_index:6, direction:1, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3156:{orientation:2, main_index:9, sub_index:5, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            3252:{orientation:2, main_index:9, sub_index:4, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,]},
            3348:{orientation:1, main_index:9, sub_index:5, direction:1, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3444:{orientation:1, main_index:9, sub_index:4, direction:1, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3540:{orientation:12, main_index:9, sub_index:30, direction:3, walk:[0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,]},
            3636:{orientation:12, main_index:9, sub_index:29, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,]},
            3732:{orientation:1, main_index:9, sub_index:3, direction:1, walk:[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3828:{orientation:1, main_index:9, sub_index:2, direction:1, walk:[1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3924:{orientation:2, main_index:9, sub_index:3, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,]},
            4020:{orientation:2, main_index:9, sub_index:2, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,]},
            4116:{orientation:2, main_index:9, sub_index:1, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,]},
            4212:{orientation:2, main_index:9, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,]},
            4308:{orientation:1, main_index:9, sub_index:1, direction:1, walk:[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            4404:{orientation:1, main_index:9, sub_index:0, direction:1, walk:[1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            4500:{orientation:12, main_index:9, sub_index:28, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            4596:{orientation:12, main_index:9, sub_index:27, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,]},
            4692:{orientation:12, main_index:9, sub_index:24, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,]},
            4788:{orientation:12, main_index:9, sub_index:23, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,]},
            4884:{orientation:12, main_index:9, sub_index:22, direction:3, walk:[0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,]},
            4980:{orientation:12, main_index:9, sub_index:21, direction:3, walk:[0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,]},
            5076:{orientation:12, main_index:9, sub_index:20, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,]},
            5172:{orientation:12, main_index:9, sub_index:17, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            5268:{orientation:12, main_index:9, sub_index:18, direction:3, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            5364:{orientation:12, main_index:9, sub_index:19, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,]},
            5460:{orientation:12, main_index:9, sub_index:16, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            5556:{orientation:12, main_index:9, sub_index:15, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,]},
            5652:{orientation:12, main_index:9, sub_index:13, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,]},
            5748:{orientation:12, main_index:9, sub_index:12, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,]},
            5844:{orientation:12, main_index:9, sub_index:14, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,]},
        }
    }
};
for(var l in level){
    level[l].tiles={};  
    for(i in level[l].header) if(!level[l].tiles[i]) level[l].tiles[i]=loadImage(level[l].prefix+i+".png");
} 

// Set canvas to fullscreen
var canvas = document.getElementById("floor");
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

var floor=canvas.getContext("2d");
floor.w=canvas.width;
floor.h=canvas.height;
var tw=160, th=tw/2, s=tw*0.705, a=Math.PI/4, visible=7, asin=acos=Math.sin(a);

var barrelSprite=loadImage("sprite/barrel64.png");
var coinSprite=loadImage("sprite/coins10.png");
var potionSprite=loadImage("sprite/potions.png");

function isWayWall(x,y){
    var block_x = Math.floor(x/s),
        block_y = Math.floor(y/s),
        ix = Math.floor((x%s)/(s/5)),
        iy = 4-Math.floor((y%s)/(s/5)),
        w_inx = iy*5+ix, h, idx;
    for(var l in level){
        if(level[l].map[block_y] && (idx=level[l].map[block_y][block_x]) && (h=level[l].header[idx])){
            if(h.walk[w_inx]==1) return false;
            else if(h.orientation==3){
                for(var idx in level.wall.header){
                    var tb=level.wall.header[idx];
                    if(tb.main_index==h.main_index && tb.sub_index==h.sub_index && tb.orientation==4 && h.walk[w_inx]==1){
                        return false;
                    }
                }
            }   
        }
    }    
    return true;
}

function getFloorTile(x, y) {
    if(!level.floor.map[y]) return null;
    if(!level.floor.map[y][x]) return null;
    var f = level.floor.map[y][x];
    return level.floor.tiles[f];
}

var monsterMap={
    SK: {
        A1: loadImage("monsters/SK/A1/map.png",8,16,true),
        NU: loadImage("monsters/SK/NU/map.png",8,8,true),
        WL: loadImage("monsters/SK/WL/map.png",8,8,true),
        DD: loadImage("monsters/SK/DD/map.png",8,1),
        attackOffset:10,
    },
    FS: {
        A1: loadImage("monsters/FS/A1/map.png",8,17,true),
        NU: loadImage("monsters/FS/NU/map.png",8,12,true),
        WL: loadImage("monsters/FS/WL/map.png",8,14,true),
        DD: loadImage("monsters/FS/DD/map.png",8,1),
    },
    SI: {
        A1: loadImage("monsters/SI/A1/map.png",8,16,true),
        NU: loadImage("monsters/SI/NU/map.png",8,8,true),
        WL: loadImage("monsters/SI/WL/map.png",8,9,true),
        DD: loadImage("monsters/SI/DD/map.png",8,1),
    },
    BA: {
        A1: loadImage("monsters/BA/A1/map.png",16,9,true),
        NU: loadImage("monsters/BA/NU/map.png",16,8,true),
        WL: loadImage("monsters/BA/WL/map.png",16,8,true),
    }
};

var hero=new HeroBarbarian(s*3,s*3);
setInterval(function(){
    hero.health=Math.min(hero.health+10, hero.origin_health);
},2000);

// Intelligent Monster Spawn Management
var spawnManager = {
    maxMonsters: 8,
    spawnCooldown: 0,
    spawnRadius: 600,
    
    update: function() {
        if(this.spawnCooldown > 0) {
            this.spawnCooldown--;
            return;
        }
        
        // Maintain optimal monster count
        if(monsters.length < this.maxMonsters) {
            this.spawnMonster();
            this.spawnCooldown = 50; // Cooldown between spawns
        }
    },
    
    spawnMonster: function() {
        var attempts = 0;
        while(attempts < 20) {
            var angle = Math.random() * Math.PI * 2;
            var distance = 300 + Math.random() * this.spawnRadius;
            var x = hero.x + Math.cos(angle) * distance;
            var y = hero.y + Math.sin(angle) * distance;
            
            if(isWayWall(x, y)) {
                var monsterTypes = ['SK', 'FS', 'SI'];
                var type = monsterTypes[Math.floor(Math.random() * monsterTypes.length)];
                var monster = new AgressiveMob(x, y, type);
                
                // Apply difficulty scaling
                monster.origin_health = difficultyManager.getNewMonsterHealth();
                monster.health = monster.origin_health;
                monster.currentDamage = difficultyManager.getNewMonsterDamage();
                monster.difficultyApplied = true;
                
                monsters.push(monster);
                break;
            }
            attempts++;
        }
    }
};

// Automated Resource Management
var resourceManager = {
    lootSpawnCooldown: 0,
    maxPotions: 6,
    maxCoins: 10,
    
    update: function() {
        if(this.lootSpawnCooldown > 0) {
            this.lootSpawnCooldown--;
            return;
        }
        
        // Maintain potion supply
        if(potions.length < this.maxPotions) {
            this.spawnPotion();
            this.lootSpawnCooldown = 30;
        }
        
        // Spawn coins occasionally
        if(coins.length < this.maxCoins && Math.random() > 0.7) {
            this.spawnCoin();
        }
    },
    
    spawnPotion: function() {
        var attempts = 0;
        while(attempts < 15) {
            var angle = Math.random() * Math.PI * 2;
            var distance = 200 + Math.random() * 400;
            var x = hero.x + Math.cos(angle) * distance;
            var y = hero.y + Math.sin(angle) * distance;
            
            if(isWayWall(x, y)) {
                potions.push(new PotionHealth(x, y));
                break;
            }
            attempts++;
        }
    },
    
    spawnCoin: function() {
        var attempts = 0;
        while(attempts < 15) {
            var angle = Math.random() * Math.PI * 2;
            var distance = 150 + Math.random() * 300;
            var x = hero.x + Math.cos(angle) * distance;
            var y = hero.y + Math.sin(angle) * distance;
            
            if(isWayWall(x, y)) {
                coins.push(new Coin(x, y));
                break;
            }
            attempts++;
        }
    }
};

// Difficulty Scaling and Performance System
var difficultyManager = {
    baseMonsterHealth: 1000,
    baseDamage: 30,
    difficultyLevel: 1.0,
    lastUpdate: Date.now(),
    
    update: function() {
        var now = Date.now();
        if(now - this.lastUpdate < 10000) return; // Update every 10 seconds
        this.lastUpdate = now;
        
        var stats = gameStats.getStats();
        var targetEfficiency = 2.0; // Target 2 kills per minute
        
        // Adjust difficulty based on performance
        if(stats.efficiency > targetEfficiency * 1.5) {
            this.difficultyLevel *= 1.1; // Increase difficulty
        } else if(stats.efficiency < targetEfficiency * 0.5 && this.difficultyLevel > 0.5) {
            this.difficultyLevel *= 0.95; // Decrease difficulty
        }
        
        // Apply difficulty scaling to new monsters
        this.updateMonsterStats();
    },
    
    updateMonsterStats: function() {
        for(var i in monsters) {
            var m = monsters[i];
            if(!m.difficultyApplied) {
                m.origin_health = Math.floor(this.baseMonsterHealth * this.difficultyLevel);
                m.health = m.origin_health;
                m.currentDamage = Math.floor(this.baseDamage * this.difficultyLevel);
                m.difficultyApplied = true;
            }
        }
    },
    
    getNewMonsterHealth: function() {
        return Math.floor(this.baseMonsterHealth * this.difficultyLevel);
    },
    
    getNewMonsterDamage: function() {
        return Math.floor(this.baseDamage * this.difficultyLevel);
    }
};

// Performance Monitor
var performanceMonitor = {
    frameCount: 0,
    lastFpsUpdate: Date.now(),
    fps: 60,
    
    update: function() {
        this.frameCount++;
        var now = Date.now();
        if(now - this.lastFpsUpdate >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastFpsUpdate = now;
            
            // Auto-adjust quality based on performance
            if(this.fps < 30) {
                this.optimizePerformance();
            }
        }
    },
    
    optimizePerformance: function() {
        // Reduce monster count if performance is poor
        if(monsters.length > 6) {
            spawnManager.maxMonsters = Math.max(4, spawnManager.maxMonsters - 1);
        }
        
        // Reduce loot count
        if(coins.length > 8) {
            coins.splice(8);
        }
        if(potions.length > 4) {
            potions.splice(4);
        }
    },
    
    getFPS: function() {
        return this.fps;
    }
};
// Game Statistics and Performance Monitoring
var gameStats = {
    startTime: Date.now(),
    monstersKilled: 0,
    coinsCollected: 0,
    potionsUsed: 0,
    damageDealt: 0,
    damageTaken: 0,
    explorationScore: 0,
    
    update: function() {
        // Calculate exploration score based on unique areas visited
        this.explorationScore = aiSystem.exploredAreas.size * 10;
    },
    
    getPlayTime: function() {
        return Math.floor((Date.now() - this.startTime) / 1000);
    },
    
    getStats: function() {
        return {
            playTime: this.getPlayTime(),
            monstersKilled: this.monstersKilled,
            coinsCollected: this.coinsCollected,
            potionsUsed: this.potionsUsed,
            damageDealt: this.damageDealt,
            damageTaken: this.damageTaken,
            explorationScore: this.explorationScore,
            efficiency: Math.round(this.monstersKilled / Math.max(1, this.getPlayTime() / 60) * 100) / 100
        };
    }
};

// Enhanced game loop with automation
var gameUpdateInterval = setInterval(function() {
    spawnManager.update();
    resourceManager.update();
    gameStats.update();
    difficultyManager.update();
    performanceMonitor.update();
}, 100);

// aggresive mobs
var monsters=[],deathmobs=[],barrels=[],coins=[],potions=[],walls=[];
for(var i=0;i<4;i++) monsters.push(new AgressiveMob(randomx(),randomy(), 'SK'));
for(var i=0;i<3;i++) monsters.push(new AgressiveMob(randomx(),randomy(), 'FS'));
for(var i=0;i<3;i++) monsters.push(new AgressiveMob(randomx(),randomy(), 'SI'));
//for(var i=0;i<2;i++) barrels.push(new Barrel(randomx(),randomy()));
for(var i=0;i<4;i++) potions.push(new PotionHealth(randomx(), randomy()));
for(var i=0;i<5;i++) coins.push(new Coin(randomx(), randomy()));

for(var y in level.wall.map){
    for(var x in level.wall.map[y]){
        var index = level.wall.map[y][x];
        if(index>0){
            walls.push(new Wall(index,x*s,y*s));
        }
    }
}
for(var y in level.object.map){
    for(var x in level.object.map[y]){
        var index = level.object.map[y][x];
        if(index>0){
            walls.push(new WallObject(index,x*s,y*s));
        }
    }
}

setInterval(function() { // random step for mobs, attack hero
    if(monsters.length==0)return;
    var m=monsters[Math.ceil(Math.random()*(monsters.length-1))];
    if(typeof m.attacked != "object"){
        m.to_x=m.x+(Math.random()*s-s/2);
        m.to_y=m.y+(Math.random()*s-s/2);
    }
    for(var i in monsters){
        var m=monsters[i], attackDist=100;
        if(m.attack && m.isAboveHero()){
            if(Math.abs(hero.x-m.x)<attackDist &&
               Math.abs(hero.y-m.y)<attackDist){
               m.doAttack(hero);
               m.to_x = m.x;
               m.to_y = m.y;
            }else{
                m.to_x=hero.x;
                m.to_y=hero.y;
            }
        }
    }
}, 200);

floor.canvas.onclick=function(e) { 
    var mx=(e.offsetX==undefined?e.layerX:e.offsetX) - floor.w/2;
    var my=(e.offsetY==undefined?e.layerY:e.offsetY) - floor.h/2;
    var isCanClick=Math.abs(mx) < 100 && Math.abs(my) < 100;
    my *= 2; //unscale
    floor.click_x=hero.x + mx * Math.cos(-a) - my * Math.sin(-a);
    floor.click_y=hero.y + mx * Math.sin(-a) + my * Math.cos(-a);
    if(isCanClick)if(processClick())return;
    hero.to_x=floor.click_x;
    hero.to_y=floor.click_y;
}

window.onkeydown=function(e){
    var beltKeys=[49,50,51,52,53,54,55,56,57,48];
    var beltIndex = beltKeys.indexOf(e.keyCode);
    if(beltIndex>=0){
        if(hero.belt.items[beltIndex] instanceof PotionHealth){
           hero.belt.items[beltIndex].drink(hero);
           remove(hero.belt.items,hero.belt.items[beltIndex]);
        }
        return false;
    }
    if(e.keyCode==9){
        showMap=!showMap;
        return false;
    }
    if(e.keyCode==83){ // 'S' key for stats
        window.showStats=!window.showStats;
        return false;
    }
    if(e.keyCode==65){ // 'A' key for AI status
        window.showAIStatus=!window.showAIStatus;
        return false;
    }
    if(e.keyCode==72){ // 'H' key for help
        window.showHelp=!window.showHelp;
        return false;
    }
}

var showMap=false;
window.showStats=true; // Show stats by default
window.showAIStatus=true; // Show AI status by default
window.showHelp=false;
setInterval(function() {
    if(imageCount>0) return;
    hero.nextStep();
    for(var i in monsters) monsters[i].nextStep();
    floor.fillStyle="black";floor.fillRect(0,0, floor.w,floor.h);
    renderFloor();
    renderHeroHealth();
    renderHeroBelt();
    renderGameStats();
    renderAIStatus();
    renderHelp();
    if(showMap) renderMap();
}, 66);

function renderHeroHealth(){
    var radius=80, padding=20;
    floor.save();
    floor.globalAlpha=0.4;
    // draw health orb
    floor.fillStyle="black";
    floor.beginPath();
    floor.arc(radius+padding, floor.h-radius-padding, radius+4, 0, Math.PI*2);
    floor.closePath();
    floor.fill();
    // draw health
    floor.fillStyle="red";        
    var percent = hero.health / hero.origin_health;
    var angleFrom = Math.PI*(0.5-percent);
    var angleTo   = Math.PI*(0.5+percent);
    floor.beginPath();
    floor.arc(radius+padding, floor.h-radius-padding, radius, angleFrom, angleTo);
    floor.closePath();
    floor.fill();
    floor.restore();
}

function renderGameStats(){
    if(!window.showStats) return;
    
    var stats = gameStats.getStats();
    floor.save();
    floor.fillStyle = "rgba(0, 0, 0, 0.7)";
    floor.fillRect(10, 10, 300, 240);
    
    floor.fillStyle = "rgb(169, 152, 119)";
    floor.font = "12px Verdana, sans-serif";
    
    var y = 30;
    var lineHeight = 20;
    
    floor.fillText("=== GAME STATISTICS ===", 20, y);
    y += lineHeight * 1.5;
    
    floor.fillText("Play Time: " + stats.playTime + "s", 20, y);
    y += lineHeight;
    floor.fillText("Monsters Killed: " + stats.monstersKilled, 20, y);
    y += lineHeight;
    floor.fillText("Coins Collected: " + stats.coinsCollected, 20, y);
    y += lineHeight;
    floor.fillText("Potions Used: " + stats.potionsUsed, 20, y);
    y += lineHeight;
    floor.fillText("Damage Dealt: " + Math.round(stats.damageDealt), 20, y);
    y += lineHeight;
    floor.fillText("Damage Taken: " + Math.round(stats.damageTaken), 20, y);
    y += lineHeight;
    floor.fillText("Exploration: " + stats.explorationScore, 20, y);
    y += lineHeight;
    floor.fillText("Efficiency: " + stats.efficiency + " kills/min", 20, y);
    y += lineHeight;
    floor.fillText("Difficulty: " + Math.round(difficultyManager.difficultyLevel * 100) + "%", 20, y);
    y += lineHeight;
    floor.fillText("FPS: " + performanceMonitor.getFPS(), 20, y);
    
    floor.restore();
}

function renderAIStatus(){
    if(!window.showAIStatus) return;
    
    floor.save();
    floor.fillStyle = "rgba(0, 0, 0, 0.6)";
    floor.fillRect(floor.w - 250, 10, 240, 120);
    
    floor.fillStyle = "rgb(169, 152, 119)";
    floor.font = "11px Verdana, sans-serif";
    
    var y = 30;
    var lineHeight = 16;
    var x = floor.w - 240;
    
    floor.fillText("=== AI STATUS ===", x, y);
    y += lineHeight * 1.5;
    
    var objective = aiSystem.currentObjective || 'combat/loot';
    floor.fillText("Objective: " + objective, x, y);
    y += lineHeight;
    
    floor.fillText("Explored Areas: " + aiSystem.exploredAreas.size, x, y);
    y += lineHeight;
    
    floor.fillText("Active Monsters: " + monsters.length, x, y);
    y += lineHeight;
    
    floor.fillText("Available Loot: " + (coins.length + potions.length), x, y);
    y += lineHeight;
    
    floor.fillText("Health: " + Math.round(hero.health) + "/" + hero.origin_health, x, y);
    
    floor.restore();
}

function renderHeroBelt(){
    floor.save();
    var tile=potionSprite;
    var tw = tile.width / tile.steps;
    var th = tile.height / tile.angles;        
    for(var i=0;i<hero.belt.size;i++){
        floor.drawImage(tile, 
            tw*2, th*3, tw, th,
            200+tw*i, 600, tw, th);
        var p = hero.belt.items[i];
        if(p){
            floor.drawImage(tile, 
                tw*p.step, th*p.angle, tw, th,
                200+tw*i, 600, tw, th);
        }
    }
    floor.restore();
}

function loadZb(order,click){
    var tmp_zb=[], zb=[];
    var all=[monsters,potions,barrels,click?[]:[hero],click?[]:walls];
    for(var t in all) 
        for(var m in all[t]) 
            if(all[t][m].isAboveHero()) 
                tmp_zb.push(all[t][m]);
    // asc sort
    tmp_zb.sort(function(a,b){ var c=(b.x+b.offset_x)+(b.y+b.offset_y)-(a.x+a.offset_x)-(a.y+a.offset_y); return order?c:0-c});
    var all=[coins,deathmobs,tmp_zb];
    for(var i in all) for(var j in all[i]) zb.push(all[i][j]);
    return zb;
}

function processClick(){
    var zb=loadZb(true,true);
    var cx=(floor.click_x - floor.click_y)*acos,
        cy=(floor.click_x + floor.click_y)/2*asin;
    for(var i in zb){
        var m=zb[i]; 
        var spr=m.sprite;
        var sx=(m.x - m.y)*acos+m.offset_x,
            sy=(m.x + m.y)/2*asin+m.offset_y;
        
        var spr_w = spr.angles ? spr.width/spr.angles : spr.width;
        var spr_h = spr.steps ? spr.height/spr.steps : spr.height;
        if( cx >= sx-spr_w/2 && cx <= sx+spr_w/2 && cy >= sy-spr_h && cy <= sy){
            m.use(hero)
            return true;
        }
    }
    return false;
}

function renderObjects(){
    var zb=loadZb(false);
    for(z in zb){
        var m=zb[z];
        floor.save()
        var sx=(m.x - m.y)*acos+m.offset_x,
            sy=(m.x + m.y)/2*asin+m.offset_y;
        var tile=m.sprite;
        // render sprite
        var tw = tile.width;
        var th = tile.height
        if(tile.steps && tile.angles){
            tw/=tile.steps;
            th/=tile.angles;
            floor.drawImage(tile, 
                tw*m.step, th*m.angle, tw, th,
                Math.round(sx-tw/2-tile.offsetX), Math.round(sy-th), tw, th);
        }else{
            floor.drawImage(tile, Math.round(sx-tile.width/2)+1, Math.round(sy-tile.height)+1);
        }
        floor.restore()
        // health line
        if(m.health && m.origin_health && m != hero){
            floor.save()
            floor.globalAlpha=0.7
            sy-=90;
            var lm=Math.floor(m.origin_health/20),
                lr=Math.floor(m.health/20)
            floor.fillStyle="black"
            floor.fillRect(sx-lm/2-1, sy, lm+2, 6);
            floor.fillStyle="red"
            floor.fillRect(sx-lm/2, sy+1, lr, 4);
            floor.restore()
        }
    }
}

function renderFloor() {
    floor.save();
    floor.translate(floor.w/2-th, floor.h/2);// translate to center
    var fdx=Math.floor(hero.x/s), // hero tile
        fdy=Math.floor(hero.y/s),
        miny=Math.max(0, fdy-visible), // calculate camera visible tiles
        maxy=Math.min(level.floor.map.length-1,fdy+visible),
        minx=Math.max(0, fdx-visible),
        maxx=Math.min(level.floor.map[0].length-1,fdx+visible);
    // translate to hero
    var mrx=hero.x * acos - hero.y * asin,
        mry=hero.x * asin + hero.y * acos;
        mry=mry/2;
    floor.translate(-mrx, -mry);
    // render
    for(var y=miny;y<=maxy;y++){
        for(var x=minx;x<=maxx;x++){
            var tile= getFloorTile(x, y);
            if(tile){
                var tx=( x - y ) * th,
                    ty=( x + y ) * th/2;
                floor.drawImage(tile, tx, ty, tile.width+0.707, tile.height+0.707);
            }
        }
    }
    floor.translate(th, 0); // retranslate for diamond textures
    renderObjects();
    floor.restore();
}

function renderHelp(){
    if(!window.showHelp) return;
    
    floor.save();
    floor.fillStyle = "rgba(0, 0, 0, 0.8)";
    floor.fillRect(floor.w/2 - 200, floor.h/2 - 150, 400, 300);
    
    floor.fillStyle = "rgb(169, 152, 119)";
    floor.font = "14px Verdana, sans-serif";
    
    var y = floor.h/2 - 120;
    var lineHeight = 20;
    var x = floor.w/2 - 180;
    
    floor.fillText("=== AUTOMATED DIABLO CONTROLS ===", x, y);
    y += lineHeight * 1.5;
    
    floor.font = "12px Verdana, sans-serif";
    floor.fillText("TAB - Toggle minimap", x, y);
    y += lineHeight;
    floor.fillText("S - Toggle statistics display", x, y);
    y += lineHeight;
    floor.fillText("A - Toggle AI status display", x, y);
    y += lineHeight;
    floor.fillText("H - Toggle this help", x, y);
    y += lineHeight;
    floor.fillText("1-0 - Use belt potions (manual)", x, y);
    y += lineHeight * 1.5;
    
    floor.fillText("AI Features:", x, y);
    y += lineHeight;
    floor.fillText("• Intelligent combat with positioning", x, y);
    y += lineHeight;
    floor.fillText("• Smart exploration and pathfinding", x, y);
    y += lineHeight;
    floor.fillText("• Automatic loot collection", x, y);
    y += lineHeight;
    floor.fillText("• Auto-healing based on health", x, y);
    y += lineHeight;
    floor.fillText("• Dynamic monster spawning", x, y);
    
    floor.restore();
}

function renderMap() {
    floor.save();
    floor.translate(floor.w/2, floor.h/2);
    var sc=0.5;
    floor.scale(1*sc,0.5*sc);
    floor.rotate(Math.PI*0.25);
    floor.translate(-hero.x, -hero.y);
    floor.fillStyle="rgba(0,0,0,0.5)";
    var wallOffset=[];
    for(var y=4;y>=0;y--) for(var x=0;x<=4;x++) wallOffset.push({x:x*s/5, y:y*s/5});
    for(var i in walls){
        var v=walls[i], walk=v.header.walk;
        if(v.header.orientation==4)continue;
        for(var j=0;j<25;j++) if(walk[j]==1) floor.fillRect(v.x+wallOffset[j].x, v.y+wallOffset[j].y, s/5, s/5);
    }
    
    // Show explored areas on map
    floor.fillStyle="rgba(0,255,0,0.3)";
    aiSystem.exploredAreas.forEach(function(coord) {
        var parts = coord.split(',');
        var gx = parseInt(parts[0]) * 100;
        var gy = parseInt(parts[1]) * 100;
        floor.fillRect(gx, gy, 100, 100);
    });
    
    // Show monsters on map
    floor.fillStyle="rgba(255,0,0,0.8)";
    for(var i in monsters) {
        var m = monsters[i];
        floor.fillRect(m.x-10, m.y-10, 20, 20);
    }
    
    // Show loot on map
    floor.fillStyle="rgba(255,255,0,0.8)";
    var allLoot = coins.concat(potions);
    for(var i in allLoot) {
        var l = allLoot[i];
        floor.fillRect(l.x-5, l.y-5, 10, 10);
    }
    
    // Show hero
    floor.fillStyle="rgba(0,0,255,1)";
    floor.fillRect(hero.x-8, hero.y-8, 16, 16);
    floor.restore();
}

function remove(ar,v){var i=ar.indexOf(v);if(i>=0)ar.splice(i,1);}
function randomx(){return Math.floor(Math.random()*(level.floor.map[0].length)*s);}
function randomy(){return Math.floor(Math.random()*(level.floor.map.length)*s);}

function Shape(sprite,x,y){
    this.x=x;
    this.y=y;
    this.offset_x=0;
    this.offset_y=0;
    this.sprite=sprite;
    this.isAboveHero=function(){
        var maxlen=tw*visible/2;
        return (Math.abs(this.x-hero.x)<=maxlen) && (Math.abs(this.y-hero.y)<=maxlen);
    };
}

function BaseWall(sprite,header,x,y){
    Shape.call(this,sprite,x,y);
    this.header=header;
    this.isAboveHero=function(){return true;}
    this.offset_x-=14;
    this.offset_y+=82;
}

function Wall(index,x,y){
    BaseWall.call(this,level.wall.tiles[index],level.wall.header[index],x,y);
    switch(this.header.orientation){
        case 2:
            this.offset_x+=16;
            break;
        case 6:
            this.offset_x+=16;
            break;
        case 5:
            this.offset_x-=16;
            break;
        case 3:
            for(var inx in level.wall.header){
                var h = level.wall.header[inx];
                if(h.orientation==4 && h.main_index==this.header.main_index && h.sub_index==this.header.sub_index){
                    walls.push(new Wall(inx, x, y))
                    break;
                }
            }
            this.offset_x+=16;
            break;
        case 4:
            this.offset_x-=16;
            break;
    }
}

function WallObject(index,x,y){
    BaseWall.call(this,level.object.tiles[index],level.object.header[index],x,y);
    this.offset_x+=16;
    var self=this;
    load(this.sprite, function(){
        if(self.sprite.width<160){
            self.offset_x-=(160-self.sprite.width)/2
        }
    })
    
}

function DeathMob(mob){
    Shape.call(this,mob.death,mob.x,mob.y);
    this.step=0;
    this.angle=mob.angle;
    this.used=false;
    this.use=function(mob){
        if(!this.used && Math.random()>0.5) {
            coins.push(new Coin(this.x+50, this.y+50));
            gameStats.coinsCollected++; // Track coin generation
        }
        if(!this.used && Math.random()>0.5) {
            potions.push(new PotionHealth(this.x+50, this.y));
        }
        this.used=true;
    }
}

function Barrel(x, y){
    Shape.call(this,barrelSprite,x,y);
    this.use=function(mob){
        if(mob.doAttack) mob.doAttack(this);
    };
    this.damage=function(damage){
        remove(barrels,this);
        if(Math.random()>0.7) coins.push(new Coin(this.x, this.y));
    };
}

function Coin(x,y){
    Shape.call(this,coinSprite,x,y);
    this.coins=Math.floor(Math.random()*1000);
    this.use=function(mob){
        remove(coins,this);
        mob.coins+=this.coins;
        gameStats.coinsCollected++; // Track coins collected
    }
}

function Potion(x,y){
    Shape.call(this,potionSprite,x,y);
    this.sprite.steps=6;
    this.sprite.angles=4;
    this.use=function(mob){
        if(mob.addToBelt(this)) remove(potions,this);
    }
}

function PotionHealth(x,y){
    Potion.call(this,x,y);
    this.step=0;
    this.angle=0;
    this.health=1000;
    this.drink=function(mob){
        mob.health=Math.min(mob.origin_health, mob.health+this.health);
        gameStats.potionsUsed++; // Track potions used
    }
}

function Mob(x,y,name){
    this.to_x=x;this.to_y=y;
    this.name=name;
    this.stay=monsterMap[name].NU
    this.run=monsterMap[name].WL
    this.death=monsterMap[name].DD
    this.currentState=this.stay;
    this.step=0;
    this.angle=0;
    this.st=8;
    Shape.call(this, this.currentState, x, y);
    this.rotate = function(sx,sy){
        var l=this.currentState.angles;
        this.angle=Math.round((Math.atan2(sy, sx)/Math.PI+2.75)*l/2+l/2)%l
    }
    this.rotateTo = function(point){
        this.rotate(point.x-this.x,point.y-this.y);
    }
    this.setState=function(state){
        if(this.currentState!=state){
            this.currentState=state;
            this.step=-1;
        }
    }
    this.nextStep=function(){
        var dx=(this.to_x - this.x),
            dy=(this.to_y - this.y);
        if((Math.sqrt((dx*dx)+(dy*dy)))>this.st){ // run
            var tx=0;ty=0;
            for(var st=0;st<this.st;st+=0.01){
                var sx=st * dx / Math.sqrt((dx*dx) + (dy*dy));
                var sy=sx * dy / dx;
                if(isWayWall(this.x+sx,this.y+sy)){tx=sx;ty=sy;}
                else break;
            }
            this.rotate(tx, ty);
            if(Math.sqrt((tx*tx)+(ty*ty))>=this.st/2){
                this.x+=tx;
                this.y+=ty;
                this.setState(this.run);
            }
            else{ this.setState(this.stay); this.x+=tx;this.y+=ty;this.to_x=this.x;this.to_y=this.y;}
        } else{ this.setState(this.stay); this.to_x=this.x;this.to_y=this.y;}
        this.step=(this.step+1)%(this.currentState.steps);
        this.sprite=this.currentState;
    }
    this.origin_health=this.health=1000;
    this.resistance=10; // damage resistance, less than 1000
    this.use = function(mob){
        if(mob.doAttack) mob.doAttack(this);
    };
    this.damage=function(damage){
        var health=this.health - damage * 1000/(1000-this.resistance);
        if(health<=0){
            this.health=0;
            remove(monsters,this);
            if(this.death) deathmobs.push(new DeathMob(this));
            gameStats.monstersKilled++; // Track monsters killed
            gameStats.damageDealt += damage; // Track damage dealt
        }else{
            this.health=health;
            gameStats.damageDealt += damage; // Track damage dealt
        }
    }
}

function AgressiveMob(x,y,name){
    Mob.call(this,x,y,name);
    this.attack=monsterMap[name].A1
    this.attackOffset=monsterMap[name].attackOffset||0;
    this.normalOffset=0;
    this._nextStep=this.nextStep;
    this.nextStep=function(){
        if(!this.isAboveHero())return;
        if(this.currentState == this.attack){
            if(this.step==(this.attack.steps-1)){
                this.currentState=this.stay;
                this.step=-1;
                if(this.attacked){
                    this.attacked.damage(this.getDamage());
                    this.attacked=null;
                }
            }
            this.step=(this.step+1)%(this.currentState.steps);
            this.sprite=this.currentState;
        }else this._nextStep();
        this.offset_y=this.currentState==this.attack?this.attackOffset:this.normalOffset;
    }
    this.currentDamage=30;
    this.getDamage=function(){
        return this.currentDamage;
    }
    this.attacked=null;
    this.doAttack=function(mob){
        if(this.attacked!=mob){
            this.rotateTo(mob);
            this.setState(this.attack);
            this.attacked=mob;            
        }
    }
}

function HeroBarbarian(x,y){
    AgressiveMob.call(this,x,y,"BA");
    this.attackOffset=40;
    this.normalOffset=10;
    this.health=this.origin_health=1000;
    this.belt={items:[], size:10};
    this.st=16;
    this.coins=0; // Initialize coin counter
    this.addToBelt=function(potion){
        for(var i=0;i<this.belt.size;i++){
            if(typeof this.belt.items[i] == "undefined"){
                this.belt.items[i]=potion;
                return true;
            }
        }
        return false;
    }
    this.criticalDamage=0.4;
    this.currentDamage=120;
    this.getDamage=function(){
        return this.currentDamage * ( Math.random() <= this.criticalDamage ? 4 : 1 );
    }
    // Override damage function to track damage taken
    this.damage=function(damage){
        var health=this.health - damage * 1000/(1000-this.resistance);
        gameStats.damageTaken += damage; // Track damage taken
        if(health<=0){
            this.health=0;
            // Game over logic could go here
        }else{
            this.health=health;
        }
    }
}

// Advanced AI System
var aiSystem = {
    exploredAreas: new Set(),
    currentObjective: null,
    lastPosition: {x: 0, y: 0},
    stuckCounter: 0,
    combatStrategy: 'aggressive',
    lootPriority: ['PotionHealth', 'Coin'],
    
    // Get distance between two points
    getDistance: function(p1, p2) {
        return Math.sqrt((p1.x - p2.x)*(p1.x - p2.x) + (p1.y - p2.y)*(p1.y - p2.y));
    },
    
    // Mark area as explored
    markExplored: function(x, y, radius) {
        var gridSize = 100;
        var gx = Math.floor(x / gridSize);
        var gy = Math.floor(y / gridSize);
        for(var dx = -Math.ceil(radius/gridSize); dx <= Math.ceil(radius/gridSize); dx++) {
            for(var dy = -Math.ceil(radius/gridSize); dy <= Math.ceil(radius/gridSize); dy++) {
                this.exploredAreas.add((gx + dx) + ',' + (gy + dy));
            }
        }
    },
    
    // Check if area is explored
    isExplored: function(x, y) {
        var gridSize = 100;
        var gx = Math.floor(x / gridSize);
        var gy = Math.floor(y / gridSize);
        return this.exploredAreas.has(gx + ',' + gy);
    },
    
    // Find nearest unexplored area
    findUnexploredArea: function() {
        var attempts = 0;
        var maxAttempts = 50;
        var bestScore = -1;
        var bestPos = null;
        
        while(attempts < maxAttempts) {
            var angle = Math.random() * Math.PI * 2;
            var distance = 200 + Math.random() * 600;
            var x = hero.x + Math.cos(angle) * distance;
            var y = hero.y + Math.sin(angle) * distance;
            
            // Check if position is valid and unexplored
            if(isWayWall(x, y) && !this.isExplored(x, y)) {
                var score = distance + (this.isExplored(x, y) ? -500 : 500);
                if(score > bestScore) {
                    bestScore = score;
                    bestPos = {x: x, y: y};
                }
            }
            attempts++;
        }
        
        return bestPos;
    },
    
    // Smart combat positioning
    getOptimalCombatPosition: function(target) {
        var angle = Math.atan2(target.y - hero.y, target.x - hero.x);
        var distance = 120; // optimal attack distance
        
        // Try to position for hit-and-run tactics
        var positions = [];
        for(var i = 0; i < 8; i++) {
            var testAngle = angle + (i * Math.PI / 4);
            var x = target.x + Math.cos(testAngle) * distance;
            var y = target.y + Math.sin(testAngle) * distance;
            
            if(isWayWall(x, y)) {
                // Score based on safety (distance from other monsters)
                var safety = 0;
                for(var j in monsters) {
                    if(monsters[j] !== target) {
                        safety += this.getDistance({x: x, y: y}, monsters[j]);
                    }
                }
                positions.push({x: x, y: y, safety: safety});
            }
        }
        
        if(positions.length > 0) {
            positions.sort(function(a, b) { return b.safety - a.safety; });
            return positions[0];
        }
        
        return {x: target.x, y: target.y};
    },
    
    // Intelligent loot prioritization
    prioritizeLoot: function(lootArray) {
        return lootArray.sort(function(a, b) {
            var aScore = 0, bScore = 0;
            
            // Health potions are highest priority when health is low
            if(a instanceof PotionHealth) {
                aScore += hero.health < hero.origin_health * 0.7 ? 1000 : 100;
            }
            if(b instanceof PotionHealth) {
                bScore += hero.health < hero.origin_health * 0.7 ? 1000 : 100;
            }
            
            // Coins are medium priority
            if(a.coins) aScore += 50;
            if(b.coins) bScore += 50;
            
            // Distance factor (closer is better)
            aScore -= aiSystem.getDistance(hero, a) * 0.1;
            bScore -= aiSystem.getDistance(hero, b) * 0.1;
            
            return bScore - aScore;
        });
    }
};

// Enhanced Auto AI for hero
setInterval(function() {
    // Mark current area as explored
    aiSystem.markExplored(hero.x, hero.y, 150);
    
    // Check if hero is stuck
    if(aiSystem.getDistance(hero, aiSystem.lastPosition) < 10) {
        aiSystem.stuckCounter++;
    } else {
        aiSystem.stuckCounter = 0;
        aiSystem.lastPosition = {x: hero.x, y: hero.y};
    }
    
    // Emergency unstuck mechanism
    if(aiSystem.stuckCounter > 10) {
        var escapeAngle = Math.random() * Math.PI * 2;
        hero.to_x = hero.x + Math.cos(escapeAngle) * 200;
        hero.to_y = hero.y + Math.sin(escapeAngle) * 200;
        aiSystem.stuckCounter = 0;
        return;
    }
    
    // Priority 1: Emergency healing
    if(hero.health < hero.origin_health * 0.2) {
        for(var i in hero.belt.items) {
            var p = hero.belt.items[i];
            if(p instanceof PotionHealth) {
                p.drink(hero);
                remove(hero.belt.items, p);
                break;
            }
        }
    }
    
    // Priority 2: Combat with smart positioning
    var monstersInRange = [];
    var nearbyMonsters = [];
    
    for(var i in monsters) {
        var m = monsters[i];
        var dist = aiSystem.getDistance(hero, m);
        if(dist < 150) {
            monstersInRange.push({monster: m, dist: dist});
        }
        if(dist < 400) {
            nearbyMonsters.push({monster: m, dist: dist});
        }
    }
    
    if(monstersInRange.length > 0) {
        // Smart combat: attack weakest or closest based on health
        monstersInRange.sort(function(a, b) {
            if(hero.health < hero.origin_health * 0.5) {
                // When low health, prioritize by distance
                return a.dist - b.dist;
            } else {
                // When healthy, prioritize weaker enemies
                return a.monster.health - b.monster.health;
            }
        });
        
        var target = monstersInRange[0].monster;
        
        // Use hit-and-run if outnumbered or low health
        if(monstersInRange.length > 2 || hero.health < hero.origin_health * 0.4) {
            var optimalPos = aiSystem.getOptimalCombatPosition(target);
            var distToOptimal = aiSystem.getDistance(hero, optimalPos);
            
            if(distToOptimal > 50) {
                hero.to_x = optimalPos.x;
                hero.to_y = optimalPos.y;
            } else {
                hero.doAttack(target);
            }
        } else {
            hero.doAttack(target);
        }
    } else if(nearbyMonsters.length > 0) {
        // Move towards nearest monster with caution
        nearbyMonsters.sort(function(a, b) { return a.dist - b.dist; });
        var target = nearbyMonsters[0].monster;
        hero.to_x = target.x;
        hero.to_y = target.y;
    } else {
        // Priority 3: Loot collection
        var allLoot = coins.concat(potions);
        var nearbyLoot = [];
        
        for(var i in allLoot) {
            var l = allLoot[i];
            var dist = aiSystem.getDistance(hero, l);
            if(dist < 300) {
                nearbyLoot.push(l);
            }
        }
        
        if(nearbyLoot.length > 0) {
            var prioritizedLoot = aiSystem.prioritizeLoot(nearbyLoot);
            var targetLoot = prioritizedLoot[0];
            var distToLoot = aiSystem.getDistance(hero, targetLoot);
            
            if(distToLoot < 50) {
                targetLoot.use(hero);
            } else {
                hero.to_x = targetLoot.x;
                hero.to_y = targetLoot.y;
            }
        } else {
            // Priority 4: Intelligent exploration
            var unexploredArea = aiSystem.findUnexploredArea();
            if(unexploredArea) {
                hero.to_x = unexploredArea.x;
                hero.to_y = unexploredArea.y;
                aiSystem.currentObjective = 'exploring';
            } else {
                // Fallback: patrol the map
                var patrolDistance = 300;
                var patrolAngle = (Date.now() / 5000) % (Math.PI * 2);
                hero.to_x = hero.x + Math.cos(patrolAngle) * patrolDistance;
                hero.to_y = hero.y + Math.sin(patrolAngle) * patrolDistance;
            }
        }
    }
    
    // Preventive healing
    if(hero.health < hero.origin_health * 0.6 && monstersInRange.length === 0) {
        for(var i in hero.belt.items) {
            var p = hero.belt.items[i];
            if(p instanceof PotionHealth) {
                p.drink(hero);
                remove(hero.belt.items, p);
                break;
            }
        }
    }
}, 200); // Faster response for better AI

})();