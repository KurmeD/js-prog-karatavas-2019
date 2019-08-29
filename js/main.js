class Karatavas {
constructor(){
    this.a=123; //propertijam a piešķiram vērtību 123 ar new operatoru pasauvam konstruktoru
this.konteiners=document.getElementById(id);
console.log(this.konteiners);
if(this.konteiners){
this.konteiners.innertHTML="Te būs karatvas";
}
this.statuss=Karatavas.STATUSS_NEINICIALIZEJAS;
}
novakt(){//metode attiecas uz instanci
    if(this.statuss===Karatavas.STATUSS_NOVAKTS) return;
    if(this.konteiners){
        this.konteiners.innerHTML="";
    }
    delete this.konteiners;
    this.statuss= Karatavas.STATUSS_NOVAKTS;
}

}
//statuss spēlei 0=neinicializēta spēle, 1= uzdots uzdevums, 2=spēle beigusies ar uzvaru,
//3=spēle ir beigusies ar zaudējumu,
 //9=spēle ir novākta no ekrāna



//ES6 
//pirms ES-6
//function KK(){
    //this.a=456;
//}var k=new KK();
Karatavas.STATUSS_NEINICIALIZEJAS=0;//statiskais mainīgias lielie burti
Karatavas.STATUSS_SPELE=1;
Karatavas.STATUSS_UZVARA=2;
Karatavas.STATUSS_SAGRAVE=3;
Karatavas.STATUSS_NOVAKTS=9;