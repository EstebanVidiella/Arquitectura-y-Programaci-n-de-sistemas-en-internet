//En esta practica debemos crear 3 funciones DeepPrint, DeepClone y DeepEqual.


const alumno ={
    nombre:"Esteban",
    telefono:677435737574,
    curso:"tercero",
    amigos:[
        {
            nombre:"Manuel",
            telefono:657575756765,
            curso:"tercero",
        },
        {
            nombre:"Bruno",
            telefono:6577547574,
            curso:"tercero",
        }
    ],
}
const mismoalumno ={
   nombre:"Esteban",
    telefono:677435737574,
    curso:"tercero",
    amigos:[
        {
            nombre:"Manuel",
            telefono:657575756765,
            curso:"tercero",
        },
        {
            nombre:"Bruno",
            telefono:6577547574,
            curso:"tercero",
        }
    ],
}

const profesor={
    nombre:"Alberto",
    telefono:6783483534,
    sueldo:3000,
}

//Funcion para imprimir cualquier objeto
const DeepPrint=(ob: object):void=>{
    Object.keys(ob).forEach(atrib=>{
        if(atrib in ob){
            if(typeof ob[atrib as keyof typeof ob]==='object'){
                console.log(atrib + ": ");               
                //Utilizamos recursividad
                DeepPrint(ob[atrib as keyof typeof ob])
            }else{
            console.log(atrib + ": " + ob[atrib as keyof typeof ob]);
            }            
        }                
    })
}

//Imprimimos por pantalla los datos
console.log("Imprimiendo");
DeepPrint(alumno);
DeepPrint(profesor);

//Funcion para clonar un objeto
const DeepClone=function (ob:object):object {
     if(typeof ob!=='object'){
         return ob;
     }
     const obClone=ob.constructor()
     for(const elements in ob){
         obClone[elements]= DeepClone(ob[elements as keyof typeof ob])//Utilizamos recursividad para poder clonar cada elemento del objeto
     }
     return obClone;
}

//Clonamos el alumno
const clone =DeepClone(alumno); 

//Funcion para comparar todos los valores de dos objetos
const DeepEqual=(ob1:object, ob2:Object):boolean=>{
    let equal:boolean=false;
    if(ob1===ob2){
        equal=true;
    }else if(ob1!=null && ob2!=null){
        if(Object.keys(ob1).length!=Object.keys(ob2).length){
            equal= false
        }else{
            for(const elements in ob1) {
                if(ob2.hasOwnProperty(elements)){
                    equal=DeepEqual(ob1[elements as keyof typeof ob1],ob2[elements as keyof typeof ob2]);
                }else{
                    return false;
                }
            }
        }
    }
    else{
        equal= false
    }
    return equal;
}

//Comprobamos si son identicos los objetos a comparar
console.log(DeepEqual(profesor,alumno)); //Deberia salir false
console.log(DeepEqual(alumno,mismoalumno)); //Deberia salir true
console.log(DeepEqual(clone,alumno));  //Deberia salir true y ademas asi comprobar que se ha clonado perfectamente
