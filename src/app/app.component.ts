import { Component } from '@angular/core';
declare const PubNub: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-app';
  public pubnubInstance;

  constructor() {
    this.pubnubInstance = new PubNub({
      publishKey: 'pub-c-186b9547-2104-4b52-a808-01d30d7fa245',
      subscribeKey: 'sub-c-f3c3a1be-5566-11e9-8dfa-9a489f8d8569',
      // logVerbosity: true,
      uuid: 'myUniqueUUID'
    });


  }

  initPubnub() {
    this.pubnubInstance.addListener({
      message: (m) => {
        console.log('incoming message', m);
      },
      presence: (p) => {
        console.log('incoming presence', p);
      },
    });
  }

  joinChannel(channel) {
    this.pubnubInstance.subscribe({ channels: [channel], withPresence: true });
  }

  leaveChannel(channel) {
    this.pubnubInstance.unsubscribe({ channels: [channel]});
  }

  resetAll() {
    this.pubnubInstance.unsubscribeAll();
  }
}
