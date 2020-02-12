import {
    DialogflowConversation,
    MediaObject,
    Suggestions,
    Image,
  } from 'actions-on-google'
import { messages } from '../constants';

export const helpIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.help);    
} 

export const welcomeIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.welcome);    
}

export const byeIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.goodbye);    
}

export const weshIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.wesh);
}
export const SongIntent  = (conv: DialogflowConversation) => {
    if (!conv.surface.capabilities
      .has('actions.capability.MEDIA_RESPONSE_AUDIO')) {
        conv.ask('Sorry, this device does not support audio playback.');
        conv.ask('Which response would you like to see next?');
        return;
    }
    conv.ask('This is a media response example.');
    conv.ask(new MediaObject({
      name: 'Jazz in Paris',
      url: 'https://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3',
      description: 'A funky Jazz tune',
      icon: new Image({
        url: 'https://storage.googleapis.com/automotive-media/album_art.jpg',
        alt: 'Album cover of an ocean view',
      }),
    }));
    conv.ask(new Suggestions(['Basic Card', 'List',
      'Carousel', 'Browsing Carousel']));
  };
