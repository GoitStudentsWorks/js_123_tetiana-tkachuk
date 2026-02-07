/////////
// These are the helper functions for artist-modal.js file
/////////

export function convertMstoMins(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  export function renderActiveYears(data) {
    if (data.intDiedYear === null) {
      return `${data.intFormedYear} - present`;
    }
    return `${data.intFormedYear} - ${data.intDiedYear}`;
  }
  
  export function renderBiography(data) {
    return data.strBiographyEN.split('.').slice(0, 2).join('.') + '.';
  }