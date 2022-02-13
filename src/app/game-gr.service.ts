import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GameGRService {

  datos: string[]=[]
  

  constructor() { }

  getComputerChoice(): string {
    const choices = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    const randomChoice = Math.floor(Math.random() * 9);
    return choices[randomChoice];
  }

  dataArray(data: any): string[]{
    

    this.datos.push(data)
    return this.datos;
  }

  
  game2(datos:string[]):{
    message: string;
    userAdd: number;
    compAdd: number;
    balota: string;
    }{
      const playUserComp= this.getComputerChoice();
    console.log(`win: ${playUserComp}`);

    

    let playStatus!: {
      message: string;
      userAdd: number;
      compAdd: number;
      balota: string;
    };
    for(var i=0; i<datos.length;i++){
     
      let control= (datos[i]==playUserComp);
      //control?playStatus={message: 'Ganaste',userAdd: 1,compAdd: 0,balota: playUserComp}:playStatus={message: 'Perdiste',userAdd: 0,compAdd: 1,balota: playUserComp}

      if(control){
        playStatus = {
          message: 'Ganaste',
          userAdd: 1,
          compAdd: 0,
          balota: playUserComp
        };
        break;

  
      }else{
        playStatus = {
          message: 'perdiste',
          userAdd: 0,
          compAdd: 1,
          balota: playUserComp
        };
      }

    }
    console.log(datos)
    return playStatus;


  }
}

 /* game(
    userChoice: string
  ): {
    message: string;
    userAdd: number;
    compAdd: number;
    balota: string;
  }{
    const playUserComp = userChoice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);

    let playStatus!: {
      message: string;
      userAdd: number;
      compAdd: number;
      balota: string;
    };
    

    if(playUserComp[0]==playUserComp[1]){
      playStatus = {
        message: 'Ganaste',
        userAdd: 1,
        compAdd: 0,
        balota: playUserComp[1]
      };
      console.log("User: ",userChoice);
      console.log("Result: ", this.getComputerChoice());

    }else{
      playStatus = {
        message: 'perdiste',
        userAdd: 0,
        compAdd: 1,
        balota: playUserComp[1]
      };
    }
    return playStatus;
  }*/


