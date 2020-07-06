import { Component, OnInit, ElementRef } from '@angular/core';
import { ɵBrowserPlatformLocation } from '@angular/common';
import { stringify } from 'querystring';
@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  button1Text: string;
  button1Clicked: boolean = false;
  button2Text: string;
  button2Clicked: boolean = false;
  button3Text: string;
  button3Clicked: boolean = false;
  button4Text: string;
  button4Clicked: boolean = false;
  button5Text: string;
  button5Clicked: boolean = false;
  button6Text: string;
  button6Clicked: boolean = false;
  button7Text: string;
  button7Clicked: boolean = false;
  button8Text: string;
  button8Clicked: boolean = false;
  button9Text: string;
  button9Clicked: boolean = false;

  xTurn: boolean = true;

  turns: number = 0;

  winnerLabel: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  clickSquare(squareNumber): void {
    switch(squareNumber) {
      case 1:
        if(this.xTurn)
        {
          this.button1Text = "X";
          this.xTurn = false;
          this.button1Clicked = true;
          this.turns++;
        }
        else
        {
          this.button1Text = "O";
          this.xTurn = true;
          this.button1Clicked = true;
          this.turns++;
        }

        console.log("button 1 clicked");
        break;
      case 2:
        if(this.xTurn)
        {
          this.button2Text = "X";
          this.xTurn = false;
          this.button2Clicked = true;
          this.turns++;
        }
        else
        {
          this.button2Text = "O";
          this.xTurn = true;
          this.button2Clicked = true;
          this.turns++;
        }

        console.log("button 2 clicked");
        break;
      case 3:
        if(this.xTurn)
        {
          this.button3Text = "X";
          this.xTurn = false;
          this.button3Clicked = true;
          this.turns++;
        }
        else
        {
          this.button3Text = "O";
          this.xTurn = true;
          this.button3Clicked = true;
          this.turns++;
        }

        console.log("button 3 clicked");
        break;
      case 4:
        if(this.xTurn)
        {
          this.button4Text = "X";
          this.xTurn = false;
          this.button4Clicked = true;
          this.turns++;
        }
        else
        {
          this.button4Text = "O";
          this.xTurn = true;
          this.button4Clicked = true;
          this.turns++;
        }

        console.log("button 4 clicked");
        break;
      case 5:
        if(this.xTurn)
        {
          this.button5Text = "X";
          this.xTurn = false;
          this.button5Clicked = true;
          this.turns++;
        }
        else
        {
          this.button5Text = "O";
          this.xTurn = true;
          this.button5Clicked = true;
          this.turns++;
        }

        console.log("button 5 clicked");
        break;
      case 6:
        if(this.xTurn)
        {
          this.button6Text = "X";
          this.xTurn = false;
          this.button6Clicked = true;
          this.turns++;
        }
        else
        {
          this.button6Text = "O";
          this.xTurn = true;
          this.button6Clicked = true;
          this.turns++;
        }

        console.log("button 6 clicked");
        break;
      case 7:
        if(this.xTurn)
        {
          this.button7Text = "X";
          this.xTurn = false;
          this.button7Clicked = true;
          this.turns++;
        }
        else
        {
          this.button7Text = "O";
          this.xTurn = true;
          this.button7Clicked = true;
          this.turns++;
        }

        console.log("button 7 clicked");
        break;
      case 8:
        if(this.xTurn)
        {
          this.button8Text = "X";
          this.xTurn = false;
          this.button8Clicked = true;
          this.turns++;
        }
        else
        {
          this.button8Text = "O";
          this.xTurn = true;
          this.button8Clicked = true;
          this.turns++;
        }

        console.log("button 8 clicked");
        break;
      case 9:
        if(this.xTurn)
        {
          this.button9Text = "X";
          this.xTurn = false;
          this.button9Clicked = true;
          this.turns++;
        }
        else
        {
          this.button9Text = "O";
          this.xTurn = true;
          this.button9Clicked = true;
          this.turns++;
        }

        console.log("button 9 clicked");
        break;
    }
    this.checkWinner();
  }

  checkWinner(): void {
    this.checkIfXWins();
    this.checkIfOWins();
  }

  checkIfXWins(): void {
    if(this.turns < 5) return;
    if(this.turns === 9) this.endGame("C");
    if
    (
      this.button1Text === "X" && this.button2Text === "X" && this.button3Text === "X" ||
      this.button4Text === "X" && this.button5Text === "X" && this.button6Text === "X" ||
      this.button7Text === "X" && this.button8Text === "X" && this.button9Text === "X" ||
      this.button1Text === "X" && this.button4Text === "X" && this.button7Text === "X" ||
      this.button2Text === "X" && this.button5Text === "X" && this.button8Text === "X" ||
      this.button3Text === "X" && this.button6Text === "X" && this.button9Text === "X" ||
      this.button1Text === "X" && this.button5Text === "X" && this.button9Text === "X" ||
      this.button3Text === "X" && this.button5Text === "X" && this.button7Text === "X"
    )
    {
      this.endGame("X");
    }
  }

  checkIfOWins(): void {
    if(this.turns < 5) return;

    if
    (
      this.button1Text === "O" && this.button2Text === "O" && this.button3Text === "O" ||
      this.button4Text === "O" && this.button5Text === "O" && this.button6Text === "O" ||
      this.button7Text === "O" && this.button8Text === "O" && this.button9Text === "O" ||
      this.button1Text === "O" && this.button4Text === "O" && this.button7Text === "O" ||
      this.button2Text === "O" && this.button5Text === "O" && this.button8Text === "O" ||
      this.button3Text === "O" && this.button6Text === "O" && this.button9Text === "O" ||
      this.button1Text === "O" && this.button5Text === "O" && this.button9Text === "O" ||
      this.button3Text === "O" && this.button5Text === "O" && this.button7Text === "O"
    )
    {
      this.endGame("O");
    }
  }

  endGame(winner): void
  {
    this.button1Clicked = true;
    this.button2Clicked = true;
    this.button3Clicked = true;
    this.button4Clicked = true;
    this.button5Clicked = true;
    this.button6Clicked = true;
    this.button7Clicked = true;
    this.button8Clicked = true;
    this.button9Clicked = true;

    if(winner === "X")
    {
      this.winnerLabel = "X Wins!";
    }
    else if (winner === "O")
    {
      this.winnerLabel = "O Wins!";
    }
    else {
      this.winnerLabel = "Tie game!";
    }
  }

  reset(): void
  {
    this.button1Text = '';
    this.button2Text = '';
    this.button3Text = '';
    this.button4Text = '';
    this.button5Text = '';
    this.button6Text = '';
    this.button7Text = '';
    this.button8Text = '';
    this.button9Text = '';

    this.button1Clicked = false;
    this.button2Clicked = false;
    this.button3Clicked = false;
    this.button4Clicked = false;
    this.button5Clicked = false;
    this.button6Clicked = false;
    this.button7Clicked = false;
    this.button8Clicked = false;
    this.button9Clicked = false;

    this.turns = 0;

    this.xTurn = true;

    this.winnerLabel = '';
  }
}
