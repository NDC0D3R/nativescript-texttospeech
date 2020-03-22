import { Page } from 'tns-core-modules/ui/page';
import { Observable } from 'tns-core-modules/data/observable';
import { isIOS } from 'tns-core-modules/platform';
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';

export class HelloWorldModel extends Observable {
  public speakText: string;
  private _SpeechSynthesizer: TNSTextToSpeech;

  constructor(mainPage: Page) {
    super();
    console.log('start super');

    this.speakText =
      'Hello and welcome to Native Script. Hope you enjoy the power.';
    this._SpeechSynthesizer = new TNSTextToSpeech() as TNSTextToSpeech;
    this._SpeechSynthesizer.speak({ text: '' });
  }

  public speakThis() {
    console.log('start speakThis');

    alert("Tapped " + 'speakThis' + " times!");
    const opts: SpeakOptions = {
      text: this.get('speakText'),
      speakRate: isIOS ? 0.45 : 0.45,
      finishedCallback: () => {
        alert('Finished Speaking :)');
      }
    };
    console.log('opts', opts);
    this._SpeechSynthesizer.speak(opts);
  }

  public byebyeTextToSpeech() {
    this._SpeechSynthesizer.destroy();
    console.log('destroyed');
  }

  public pauseSynthesizer() {
    this._SpeechSynthesizer.pause();
    console.log('paused speech');
  }

  public resumeSynthesizer() {
    this._SpeechSynthesizer.resume();
    console.log('resumed speech');
  }
}
