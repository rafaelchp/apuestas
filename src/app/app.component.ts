import { Component, OnInit,ViewChild, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameGRService } from './game-gr.service';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gameGR';

  result!: string;
  pointsUser = 0;
  pointsComp =  0;
  WinBalota!:string;
  arraydeapuesta:string[]=[]





  constructor(private route: ActivatedRoute, private playGame: GameGRService){}



  ngOnInit(): void {
    this.result = 'Esperando Apuesta...';
    this.WinBalota='1'
    console.log(this.pointsUser);
  

    
  }
  
  apuesta(dato:string){
   
    this.arraydeapuesta= this.playGame.dataArray(dato)

  }

  apostar(){
    const result =this.playGame.game2(this.arraydeapuesta);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
    this.WinBalota = result.balota;

  }

}
