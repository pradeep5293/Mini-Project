// for(var i=1;i<=6;i++){
//     console.log(i);
// }

// but
for(var i=1;i<=6;i++){
    setTimeout(()=>{
    console.log(i);

    },2000)
}

// but in case of let
for(let i=1;i<=6;i++){
    setTimeout(()=>{
    console.log(i);

    },2000)
}
