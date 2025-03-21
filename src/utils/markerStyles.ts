// utils/markerStyles.ts
export const highlightMarker = {
    url: "/custom-marker.png",
    scaledSize: new google.maps.Size(50, 50),
    anchor: new google.maps.Point(25, 50),
};

export const defaultMarker = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "#4285F4",
    fillOpacity: 1,
    strokeWeight: 2,
    scale: 8,
};
