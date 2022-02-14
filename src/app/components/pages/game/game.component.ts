import { Component, OnInit,ViewChild, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameGRServices } from './game-gr.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title = 'gameGR';

  result!: string;
  pointsUser = 0;
  pointsComp =  0;
  WinBalota!:string;
  ganancia=0;
  arraydeapuesta:string[]=[]



  constructor(private route: ActivatedRoute, private playGame: GameGRServices){}



  ngOnInit(): void {
    this.result = 'Esperando Apuesta...';
    this.WinBalota='trofeo'
    console.log(this.pointsUser);
  

    
  }
  
  apuesta(dato:string){
   
    this.arraydeapuesta= this.playGame.dataArray(dato)

  }

  apostar(id:string){
    const result =this.playGame.game2(this.arraydeapuesta);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
    this.WinBalota = result.balota;

    let bet = <HTMLInputElement>document.getElementById(id);
    
    if( this.result=="Ganaste"){
      
      this.ganancia= Math.round((parseInt(bet.value)*5/(this.arraydeapuesta.length))*1.5)
      


      
    }else{
      this.ganancia=0;
    }
    

    

  }

}
