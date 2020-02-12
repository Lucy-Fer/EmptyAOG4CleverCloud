import {
    DialogflowConversation
  } from 'actions-on-google';
  
export const saveDate = (conv: DialogflowConversation, date: String): void => {
    conv.data['date'] = date;
}

export const getDate = (conv: DialogflowConversation, date: String): String => {
    return conv.data['date'];
}