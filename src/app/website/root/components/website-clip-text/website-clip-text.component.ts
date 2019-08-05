import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  style,
  animate,
  AnimationBuilder,
  AnimationPlayer
} from '@angular/animations';
import { timer, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'website-clip-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './website-clip-text.component.html',
  styleUrls: ['./website-clip-text.component.scss']
})
export class WebsiteClipTextComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('textContainer', { static: false }) textContainer: QueryList<
    ElementRef
  >;
  @ViewChild('wordsWrapper', { static: false }) wordsWrapper: ElementRef;
  @ViewChildren('htmlTextLines') htmlTextLines: QueryList<ElementRef>;

  textLines: string[];

  animationOptions: any;
  animationPlayer: AnimationPlayer;

  timer$: Observable<number>;
  subTimer: Subscription;

  constructor(private animationBuilder: AnimationBuilder) {}

  ngOnInit() {
    this.textLines = [
      'Engineer',
      'Developer',
      'Freelance',
      'Code Teacher',
      'IT Coach',
      'Gamer'
    ];

    this.animationOptions = {
      animationDelay: 0,
      revealDuration: 800
    };
    this.timer$ = timer(this.animationOptions.animationDelay);
  }

  ngAfterViewInit() {
    // Initialise clip text animation
    this.animateTextLine();
  }

  ngOnDestroy() {
    this.animationPlayer.pause();
    this.subTimer.unsubscribe();
  }

  private animateTextLine(): void {
    const newWidth = this.wordsWrapper.nativeElement.offsetWidth + 10 + 'px';
    this.wordsWrapper.nativeElement.style.width = newWidth;

    // Trigger animation
    this.subTimer = this.timer$.subscribe(() => {
      this.hideTextLine();
    });
    /*
        setTimeout(() => {
            this.hideTextLine();
        }, this.animationOptions.animationDelay);
        */
  }

  private hideTextLine() {
    const textLine: ElementRef = this.findVisibleTextLine();
    const nextTextLine: ElementRef = this.takeNext(textLine);

    const myAnimation = this.animationBuilder.build([
      style('*'),
      animate(this.animationOptions.revealDuration, style({ width: '2px' }))
    ]);

    // use the returned factory object to create a player
    this.animationPlayer = myAnimation.create(
      this.wordsWrapper.nativeElement,
      {}
    );
    this.animationPlayer.onDone(() => {
      this.switchTextLine(textLine, nextTextLine);
      this.showTextLine(nextTextLine);
    });

    this.animationPlayer.play();
  }

  private findVisibleTextLine(): ElementRef {
    return this.htmlTextLines.find(textLine => {
      return textLine.nativeElement.classList.contains('is-visible');
    });
  }

  private takeNext(textLine: ElementRef): ElementRef {
    const htmlTextLinesArr = this.htmlTextLines.toArray();
    for (let i = 0; i < htmlTextLinesArr.length; i++) {
      const htmlTextLine = htmlTextLinesArr[i];
      if (htmlTextLine.nativeElement.id === textLine.nativeElement.id) {
        if (i === this.htmlTextLines.length - 1) {
          return htmlTextLinesArr[0];
        } else {
          return htmlTextLinesArr[++i];
        }
      }
    }
  }

  private showTextLine(textLine: ElementRef): void {
    const myAnimation = this.animationBuilder.build([
      style('*'),
      animate(
        this.animationOptions.revealDuration,
        style({ width: textLine.nativeElement.offsetWidth + 10 + 'px' })
      )
    ]);

    // use the returned factory object to create a player
    this.animationPlayer = myAnimation.create(
      this.wordsWrapper.nativeElement,
      {}
    );
    this.animationPlayer.onDone(() => {
      setTimeout(() => {
        this.hideTextLine();
      }, this.animationOptions.revealDuration);
    });

    this.animationPlayer.play();
  }

  private switchTextLine(
    oldTextLine: ElementRef,
    newTextLine: ElementRef
  ): void {
    oldTextLine.nativeElement.classList.remove('is-visible');
    oldTextLine.nativeElement.classList.add('is-hidden');
    newTextLine.nativeElement.classList.remove('is-hidden');
    newTextLine.nativeElement.classList.add('is-visible');
  }
}
