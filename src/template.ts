'use strict'
import {
    Image,
    MediaObject,
    Suggestions,
    Confirmation
  } from 'actions-on-google'

  export const mediaPlayer = (title, url, description, image) => {
    return new MediaObject({
        name: title,
        url: url,
        description: description,
        icon: new Image({
          url: image,
          alt: title,
        })
    });
}

export const confirmation = function(message){
    return new Confirmation(message);
  }
  

/**
 * 
 * @param {String Array} suggestions 
 */
export const suggestionsChips = function(suggestions){
    return new Suggestions(suggestions);
}
