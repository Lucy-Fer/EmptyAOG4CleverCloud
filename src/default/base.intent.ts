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
    conv.ask('Ok voici une chanson.');
    conv.ask(new MediaObject({
      name: 'Demi Portion',
      url: 'https://cdns-preview-8.dzcdn.net/stream/c-804d4dcfd35a1ab0d093ffd4b8a1a169-3.mp3',
      description: 'Mon dico vol.5',
      icon: new Image({
        url: 'https://cdns-images.dzcdn.net/images/artist/7cf7a95fae65143e4aac76a1a9e68280/500x500-000000-80-0-0.jpg',
        alt: 'Album La bonne école',
      }),
    }));
    conv.ask(new Suggestions(['Basic Card', 'List',
      'Carousel', 'Browsing Carousel']));
      const mediaStatus = conv.arguments.get('MEDIA_STATUS');
      let response = 'Unknown media status received.';
      if (mediaStatus && mediaStatus.status === 'FINISHED') {
        response = 'Hope you enjoyed the tune!';
      }
      conv.ask(response);
      conv.ask('Which response would you like to see next?');
  };
  export const Song2Intent  = (conv: DialogflowConversation) => {
    if (!conv.surface.capabilities
      .has('actions.capability.MEDIA_RESPONSE_AUDIO')) {
        conv.ask('Sorry, this device does not support audio playback.');
        conv.ask('Which response would you like to see next?');
        return;
    }
    conv.ask('Ok voici une chanson.');
    conv.ask(new MediaObject({
      name: 'Therapie TAXI',
      url: 'https://cdns-preview-c.dzcdn.net/stream/c-c16a5ee3f2dfc10a8f64948d2d14b676-3.mp3',
      description: 'Salope',
      icon: new Image({
        url: 'https://e-cdns-images.dzcdn.net/images/cover/0bb30d5a22e0fa69e169f8bdaa448dcd/500x500-000000-80-0-0.jpg',
        alt: 'Album Hit sale',
      }),
    }));
    conv.ask(new Suggestions(['Basic Card', 'List',
      'Carousel', 'Browsing Carousel']));
  };
