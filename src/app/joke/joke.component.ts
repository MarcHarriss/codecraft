import {Joke} from "../joke"
import {
  Component,
    Directive,
    Renderer,
    HostListener,
    HostBinding,
    ElementRef,
    NgModule,
    Input,
    Output,
    EventEmitter
} from '@angular/core';


@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent // implements OnInit,
                                    // OnInit,
                                    // DoCheck,
                                    // AfterContentInit,
                                    // AfterContentChecked,
                                    // AfterViewInit,
                                    // AfterViewChecked,
                                    // OnDestroy
                                    {

  constructor() { }

  ngOnChanges() {
      console.log(`ngOnChanges - data is ${this.data}`);
    }
    ngOnInit() {
      console.log(`ngOnInit  - data is ${this.data}`);
    }
    ngDoCheck() {
      console.log("ngDoCheck")
    }
    ngAfterContentInit() {
      console.log("ngAfterContentInit");
    }
    ngAfterContentChecked() {
      console.log("ngAfterContentChecked");
    }
    ngAfterViewInit() {
      console.log("ngAfterViewInit");
    }
    ngAfterViewChecked() {
      console.log("ngAfterViewChecked");
    }
    ngOnDestroy() {
      console.log("ngOnDestroy");
    }


  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }
}

@Directive({
  selector: "[ccCardHover]"
})
export class CardHoverDirective {
  @HostBinding('class.border-primary') private ishovering: boolean;

  @Input('ccCardHover') object: {
    querySelector: '.card-block'
  };

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.object.querySelector);
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.object.querySelector);
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }
}
