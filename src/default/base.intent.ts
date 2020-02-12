import {
    DialogflowConversation,
    MediaObject,
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
      name: 'Demi portion',
      url: '"https://cdns-preview-8.dzcdn.net/stream/c-804d4dcfd35a1ab0d093ffd4b8a1a169-3.mp3",',
      description: 'Mon dico vol.5',
      icon: new Image({
        url: 'https://cdns-images.dzcdn.net/images/cover/eb2d6a1268f8f6fef01e8b1cc01bc829/56x56-000000-80-0-0.jpg',
        alt: 'Album la bonne école',
      }),
    }));
  };
