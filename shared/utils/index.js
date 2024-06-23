export const capitalize = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : ''
  }
  
  export const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;
  
  export const sortSectionOrder = (sections = {}) => {
    if (isEmpty(sections)) return sections;
  
    const sortable = []
    const sortedSections = {};
  
    // Create an array of section objects
    for (const section in sections) {
      sortable.push({
        sectionName: section,
        ...sections[section],
      })
    }
  
    // Sort the array by the sortOrder property
    sortable.sort((a, b) => {
      return a.sortOrder - b.sortOrder
    })
  
    // Convert the sorted array back to an object
    sortable.forEach((section) => {
      sortedSections[section.sectionName] = section
    })
  
    return sortedSections
  }
  
  export const fontPairs = {
    startup: [
      {
        family: "Open Sans",
        weights: [400, 600, 700],
      },
      {
        family: "Raleway",
        weights: [400, 600, 700, 900],
      },
    ],
    edge: [
      {
        family: "Montserrat",
        weights: [400, 600, 700, 900],
      },
      {
        family: "Oswald",
        weights: [400, 600, 700],
      },
    ],
    funk: [
      {
        family: "Sniglet",
        weights: [400, 600, 700, 900],
      },
      {
        family: "Cabin",
        weights: [400, 600, 700, 900],
      },
    ],
    emerson: [
      {
        family: "Lato",
        weights: [400, 600, 700, 900],
      },
      {
        family: "Merriweather",
        weights: [400, 600, 700, 900],
      },
    ],
    spectacle: [
      {
        family: "Playfair+Display",
        weights: [400, 600, 700, 900],
      },
      {
        family: "Raleway",
        weights: [400, 600, 700, 900],
      },
    ],
    marker: [
      {
        family: "Permanent+Marker",
        weights: [400, 600, 700, 900],
      },
      {
        family: "Open+Sans",
        weights: [400, 600, 700, 900],
      },
    ],
    dynamic: [
      {
        family: "Roboto",
        weights: [400, 600, 700, 900],
      },
      {
        family: "Nunito",
        weights: [400, 600, 700, 900],
      },
    ],
    remote: [
      {
        family: "IBM+Plex+Sans+Condensed",
        weights: [400, 600, 700, 900],
      },
      {
        family: "IBM+Plex+Sans",
        weights: [400, 600, 700, 900],
      },
    ],
    media: [
      {
        family: "Rubik",
        weights: [400, 600, 700, 900],
      },
      {
        family: "Roboto+Mono",
        weights: [400, 600, 700, 900],
      },
    ],
    nightly: [
      {
        family: "Playfair+Display",
        weights: [400, 600, 700, 900],
      },
      {
        family: "Source+Sans+Pro",
        weights: [400, 600, 700, 900],
      },
    ],
  };
  