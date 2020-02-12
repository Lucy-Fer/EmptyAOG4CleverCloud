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
      url: 'https://www.deezer.com/album/119527182',
      description: 'Mon dico vol.5',
      icon: new Image({
        url: 'https://cdns-images.dzcdn.net/images/artist/7cf7a95fae65143e4aac76a1a9e68280/500x500-000000-80-0-0.jpg',
        alt: 'Album La bonne école',
      }),
    }));
    conv.ask(new Suggestions(['Basic Card', 'List',
      'Carousel', 'Browsing Carousel']));
  };
