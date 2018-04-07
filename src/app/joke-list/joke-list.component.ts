import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, QueryList, ViewChildren, ElementRef, ContentChild, ContentChildren } from '@angular/core';
import {Joke} from "../joke"
import { JokeComponent } from '../joke/joke.component'

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements AfterViewInit, AfterContentInit, OnInit {

  @ViewChild (JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;

  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
    //noinspection TypeScriptUnresolvedVariable
    this.headerEl.nativeElement.textContent = "Best Joke Test";
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }



  constructor() {
    // console.log(`new - jokeViewChild is ${this.jokeViewChild}`)
    // this.jokes = [
    //   new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
    //   new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
    //   new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    // ];
  }

  ngOnInit() {
  }

  // jokes: Joke[];
  // jokes: Joke[] = [];

  jokes: Joke[] = [
      new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
    ];


  addJoke() {
      this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
    }
  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }

  deleteJoke() {
    this.jokes = [];
  }

  // deleteJoke(joke) {
  //   let indexToDelete = this.jokes.indexOf(joke);
  //   if (indexToDelete !== -1) {
  //     this.jokes.splice(indexToDelete,1);
  //   }
  // }
}
