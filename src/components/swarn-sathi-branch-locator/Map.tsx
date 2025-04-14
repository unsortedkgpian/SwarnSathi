// // "use client";
// // import "./Map.css";

// // import { useState, useMemo, useCallback, useEffect } from "react";
// // import {
// //     GoogleMap,
// //     LoadScript,
// //     Marker,
// //     InfoWindow,
// //     Polygon,
// //     GoogleMapProps,
// // } from "@react-google-maps/api";
// // // import { MarkerClusterer } from "@googlemaps/markerclusterer";
// // import { MarkerClusterer } from "@react-google-maps/api";

// // interface Location {
// //     lat: number;
// //     lng: number;
// //     title: string;
// //     description?: string;
// //     highlight?: boolean;
// //     highlightColor?: string;
// // }

// // interface MapProps {
// //     locations: Location[];
// //     defaultCenter?: google.maps.LatLngLiteral;
// //     defaultZoom?: number;
// //     highlightRadius?: number;
// // }

// // const DEFAULT_CENTER = { lat: 22.579956, lng: 88.43795 }; // Center of Kolkata
// // const DEFAULT_ZOOM = 10;

// // const Map = ({
// //     locations,
// //     defaultCenter = DEFAULT_CENTER,
// //     defaultZoom = DEFAULT_ZOOM,
// //     highlightRadius = 50000,
// // }: MapProps) => {
// //     const [selectedLocation, setSelectedLocation] = useState<Location | null>(
// //         null
// //     );
// //     const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
// //     const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

// //     useEffect(() => {
// //         if (typeof window !== "undefined" && window.google) {
// //             setIsGoogleLoaded(true);
// //         }
// //     }, []);

// //     const mapStyles = useMemo(
// //         () => ({
// //             height: "100%",
// //             width: "100%",
// //         }),
// //         []
// //     );

// //     const mapOptions = useMemo<GoogleMapProps["options"]>(
// //         () => ({
// //             disableDefaultUI: true,
// //             zoomControl: true,
// //             streetViewControl: false,
// //             mapTypeControl: false,
// //             fullscreenControl: false,
// //             styles: [
// //                 {
// //                     featureType: "poi",
// //                     elementType: "labels",
// //                     stylers: [{ visibility: "off" }],
// //                 },
// //             ],
// //         }),
// //         []
// //     );

// //     const markerIcons = useMemo(() => {
// //         if (!isGoogleLoaded || !window.google) return null; // Ensure google is available

// //         return {
// //             default: {
// //                 path: window.google.maps.SymbolPath.CIRCLE,
// //                 fillColor: "#4285F4",
// //                 fillOpacity: 1,
// //                 strokeWeight: 2,
// //                 scale: 8,
// //             },
// //             highlighted: {
// //                 path: window.google.maps.SymbolPath.CIRCLE,
// //                 fillColor: "#EA4335",
// //                 fillOpacity: 1,
// //                 strokeColor: "#FFFFFF",
// //                 strokeWeight: 2,
// //                 scale: 10,
// //             },
// //         };
// //     }, [isGoogleLoaded]);

// //     const fitMapToMarkers = useCallback(() => {
// //         if (!mapRef || !isGoogleLoaded || locations.length === 0) return;

// //         const bounds = new window.google.maps.LatLngBounds();
// //         locations.forEach((location) => {
// //             bounds.extend(
// //                 new window.google.maps.LatLng(location.lat, location.lng)
// //             );
// //         });

// //         mapRef.fitBounds(bounds);
// //         setTimeout(() => {
// //             if (mapRef.getZoom()! > 15) mapRef.setZoom(15);
// //         }, 500);
// //     }, [mapRef, locations, isGoogleLoaded]);

// //     const handleMapLoad = useCallback(
// //         (map: google.maps.Map) => {
// //             setMapRef(map);
// //             fitMapToMarkers();
// //         },
// //         [fitMapToMarkers]
// //     );

// //     return (
// //         <LoadScript
// //             googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
// //             onLoad={() => setIsGoogleLoaded(true)}
// //             onError={(e) => console.error("Google Maps load error:", e)}
// //         >
// //             <GoogleMap
// //                 mapContainerStyle={mapStyles}
// //                 options={mapOptions}
// //                 zoom={defaultZoom}
// //                 center={defaultCenter}
// //                 onLoad={handleMapLoad}
// //             >
// //                 {isGoogleLoaded && markerIcons && (
// //                     <MarkerClusterer>
// //                         {(clusterer) => (
// //                             <>
// //                                 {locations.map((location, index) => (
// //                                     <Marker
// //                                         key={index}
// //                                         position={{
// //                                             lat: location.lat,
// //                                             lng: location.lng,
// //                                         }}
// //                                         title={location.title}
// //                                         onClick={() =>
// //                                             setSelectedLocation(location)
// //                                         }
// //                                         icon={
// //                                             location.highlight
// //                                                 ? markerIcons.highlighted
// //                                                 : markerIcons.default
// //                                         }
// //                                         clusterer={clusterer}
// //                                         animation={
// //                                             location.highlight
// //                                                 ? window.google.maps.Animation
// //                                                       .BOUNCE
// //                                                 : undefined
// //                                         }
// //                                     >
// //                                         {/* {selectedLocation?.lat ===
// //                                             location.lat && (
// //                                             <InfoWindow
// //                                                 onCloseClick={() =>
// //                                                     setSelectedLocation(null)
// //                                                 }
// //                                                 options={{ maxWidth: 300 }}
// //                                             >
// //                                                 <div className="p-2 text-gray-700">
// //                                                     <h3 className="font-bold text-lg mb-2">
// //                                                         {location.title}
// //                                                     </h3>
// //                                                     {location.description && (
// //                                                         <p className="mb-2">
// //                                                             {
// //                                                                 location.description
// //                                                             }
// //                                                         </p>
// //                                                     )}
// //                                                     <p className="text-sm">
// //                                                         Coordinates:{" "}
// //                                                         {location.lat.toFixed(
// //                                                             4
// //                                                         )}
// //                                                         ,{" "}
// //                                                         {location.lng.toFixed(
// //                                                             4
// //                                                         )}
// //                                                     </p>
// //                                                 </div>
// //                                             </InfoWindow>
// //                                         )} */}
// //                                         {/* {selectedLocation?.lat ===
// //                                             location.lat && (
// //                                             <InfoWindow
// //                                                 onCloseClick={() =>
// //                                                     setSelectedLocation(null)
// //                                                 }
// //                                                 options={{ maxWidth: 250 }}
// //                                             >
// //                                                 <div className="p-2 text-gray-800 w-[220px]">
// //                                                     <h3 className="font-semibold text-lg text-gray-900">
// //                                                         {location.title}
// //                                                     </h3>
// //                                                     {location.description && (
// //                                                         <p className="text-sm text-gray-600 mt-1">
// //                                                             {
// //                                                                 location.description
// //                                                             }
// //                                                         </p>
// //                                                     )}
// //                                                     <div className="mt-2">
// //                                                         <a
// //                                                             href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
// //                                                             target="_blank"
// //                                                             rel="noopener noreferrer"
// //                                                             className="block text-center bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
// //                                                         >
// //                                                             Get Directions
// //                                                         </a>
// //                                                     </div>
// //                                                 </div>
// //                                             </InfoWindow>
// //                                         )} */}

// //                                         {selectedLocation?.lat ===
// //                                             location.lat && (
// //                                             // <InfoWindow
// //                                             //     onCloseClick={() =>
// //                                             //         setSelectedLocation(null)
// //                                             //     }
// //                                             //     options={{
// //                                             //         maxWidth: 250,
// //                                             //         pixelOffset:
// //                                             //             new window.google.maps.Size(
// //                                             //                 0,
// //                                             //                 -40
// //                                             //             ),
// //                                             //     }}
// //                                             // >
// //                                             //     <div
// //                                             //         className=""
// //                                             //         style={{
// //                                             //             overflow: "none",
// //                                             //             width: "200px",
// //                                             //             height: "100px",
// //                                             //         }}
// //                                             //     >
// //                                             //         <h3 className="font-bold text-md text-gray-800">
// //                                             //             {location.title}
// //                                             //         </h3>
// //                                             //         {location.description && (
// //                                             //             <p className="text-xsm text-gray-600">
// //                                             //                 {
// //                                             //                     location.description
// //                                             //                 }
// //                                             //             </p>
// //                                             //         )}
// //                                             //         <a
// //                                             //             href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
// //                                             //             target="_blank"
// //                                             //             rel="noopener noreferrer"
// //                                             //             className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded transition-colors"
// //                                             //         >
// //                                             //             Open in Google Maps
// //                                             //         </a>
// //                                             //     </div>
// //                                             // </InfoWindow>]
// //                                             <InfoWindow
// //                                                 onCloseClick={() =>
// //                                                     setSelectedLocation(null)
// //                                                 }
// //                                                 options={{
// //                                                     maxWidth: 250,
// //                                                     pixelOffset:
// //                                                         new window.google.maps.Size(
// //                                                             0,
// //                                                             -40
// //                                                         ),
// //                                                 }}
// //                                             >
// //                                                 <div className="custom-info-window">
// //                                                     <h3 className="font-bold text-md text-gray-800">
// //                                                         {" "}
// //                                                         {location.title}{" "}
// //                                                     </h3>
// //                                                     {location.description && (
// //                                                         <p className="text-xs text-gray-600">
// //                                                             {" "}
// //                                                             {
// //                                                                 location.description
// //                                                             }{" "}
// //                                                         </p>
// //                                                     )}
// //                                                     <a
// //                                                         href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
// //                                                         target="_blank"
// //                                                         rel="noopener noreferrer"
// //                                                         className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded transition-colors"
// //                                                     >
// //                                                         Open in Google Maps
// //                                                     </a>
// //                                                 </div>
// //                                             </InfoWindow>
// //                                         )}

// //                                         {location.highlight &&
// //                                             window.google?.maps?.geometry && (
// //                                                 <Polygon
// //                                                     paths={[
// //                                                         window.google.maps.geometry.spherical.computeOffset(
// //                                                             new window.google.maps.LatLng(
// //                                                                 location.lat,
// //                                                                 location.lng
// //                                                             ),
// //                                                             highlightRadius,
// //                                                             0
// //                                                         ),
// //                                                     ]}
// //                                                     options={{
// //                                                         fillColor:
// //                                                             location.highlightColor ||
// //                                                             "#FF0000",
// //                                                         fillOpacity: 0.2,
// //                                                         strokeColor:
// //                                                             location.highlightColor ||
// //                                                             "#FF0000",
// //                                                         strokeOpacity: 0.8,
// //                                                         strokeWeight: 2,
// //                                                     }}
// //                                                 />
// //                                             )}
// //                                     </Marker>
// //                                 ))}
// //                             </>
// //                         )}
// //                     </MarkerClusterer>
// //                 )}
// //             </GoogleMap>
// //         </LoadScript>
// //     );
// // };

// // export default Map;

// "use client";
// import "./Map.css";

// import { useState, useMemo, useCallback, useEffect } from "react";
// import {
//     GoogleMap,
//     LoadScript,
//     Marker,
//     InfoWindow,
//     Polygon,
//     GoogleMapProps,
// } from "@react-google-maps/api";
// import { MarkerClusterer } from "@react-google-maps/api";
// import axios from "axios";

// // Interface for the StoreLocation model from backend
// interface StoreLocation {
//     _id: string;
//     name: string;
//     address: string;
//     longitude: number;
//     latitude: number;
//     description?: string;
// }

// interface Location {
//     lat: number;
//     lng: number;
//     title: string;
//     description?: string;
//     highlight?: boolean;
//     highlightColor?: string;
// }

// interface MapProps {
//     locations?: Location[];
//     defaultCenter?: google.maps.LatLngLiteral;
//     defaultZoom?: number;
//     highlightRadius?: number;
// }

// const DEFAULT_CENTER = { lat: 22.579956, lng: 88.43795 }; // Center of Kolkata
// const DEFAULT_ZOOM = 10;

// const Map = ({
//     locations: propLocations,
//     defaultCenter = DEFAULT_CENTER,
//     defaultZoom = DEFAULT_ZOOM,
//     highlightRadius = 50000,
// }: MapProps) => {
//     const [locations, setLocations] = useState<Location[]>(propLocations || []);
//     const [selectedLocation, setSelectedLocation] = useState<Location | null>(
//         null
//     );
//     const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
//     const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Fetch store locations from API if not provided as props
//     useEffect(() => {
//         const fetchLocations = async () => {
//             if (propLocations && propLocations.length > 0) {
//                 setLocations(propLocations);
//                 return;
//             }

//             try {
//                 setIsLoading(true);
//                 const response = await axios.get(
//                     `${process.env.NEXT_PUBLIC_API_URL}/api/store-locations`
//                 );

//                 if (response.data && response.data.success) {
//                     // Convert backend data format to our Location interface
//                     const mappedLocations: Location[] = response.data.data.map(
//                         (store: StoreLocation) => ({
//                             lat: store.latitude,
//                             lng: store.longitude,
//                             title: store.name,
//                             description: store.description || store.address,
//                             highlight: false,
//                         })
//                     );

//                     setLocations(mappedLocations);
//                 }
//             } catch (error) {
//                 console.error("Error fetching store locations:", error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchLocations();
//     }, [propLocations]);

//     useEffect(() => {
//         if (typeof window !== "undefined" && window.google) {
//             setIsGoogleLoaded(true);
//         }
//     }, []);

//     const mapStyles = useMemo(
//         () => ({
//             height: "100%",
//             width: "100%",
//         }),
//         []
//     );

//     const mapOptions = useMemo<GoogleMapProps["options"]>(
//         () => ({
//             disableDefaultUI: true,
//             zoomControl: true,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: false,
//             styles: [
//                 {
//                     featureType: "poi",
//                     elementType: "labels",
//                     stylers: [{ visibility: "off" }],
//                 },
//             ],
//         }),
//         []
//     );

//     const fitMapToMarkers = useCallback(() => {
//         if (!mapRef || !isGoogleLoaded || locations.length === 0) return;

//         const bounds = new window.google.maps.LatLngBounds();
//         locations.forEach((location) => {
//             bounds.extend(
//                 new window.google.maps.LatLng(location.lat, location.lng)
//             );
//         });

//         mapRef.fitBounds(bounds);
//         setTimeout(() => {
//             if (mapRef.getZoom()! > 15) mapRef.setZoom(15);
//         }, 500);
//     }, [mapRef, locations, isGoogleLoaded]);

//     const handleMapLoad = useCallback(
//         (map: google.maps.Map) => {
//             setMapRef(map);
//             fitMapToMarkers();
//         },
//         [fitMapToMarkers]
//     );

//     return (
//         <LoadScript
//             googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
//             onLoad={() => setIsGoogleLoaded(true)}
//             onError={(e) => console.error("Google Maps load error:", e)}
//         >
//             <GoogleMap
//                 mapContainerStyle={mapStyles}
//                 options={mapOptions}
//                 zoom={defaultZoom}
//                 center={defaultCenter}
//                 onLoad={handleMapLoad}
//             >
//                 {isGoogleLoaded && (
//                     <MarkerClusterer>
//                         {(clusterer) => (
//                             <>
//                                 {locations.map((location, index) => (
//                                     <Marker
//                                         key={index}
//                                         position={{
//                                             lat: location.lat,
//                                             lng: location.lng,
//                                         }}
//                                         title={location.title}
//                                         onClick={() =>
//                                             setSelectedLocation(location)
//                                         }
//                                         clusterer={clusterer}
//                                         animation={
//                                             location.highlight
//                                                 ? window.google.maps.Animation
//                                                       .BOUNCE
//                                                 : undefined
//                                         }
//                                     >
//                                         {selectedLocation?.lat ===
//                                             location.lat && (
//                                             <InfoWindow
//                                                 onCloseClick={() =>
//                                                     setSelectedLocation(null)
//                                                 }
//                                                 options={{
//                                                     maxWidth: 250,
//                                                     pixelOffset:
//                                                         new window.google.maps.Size(
//                                                             0,
//                                                             -40
//                                                         ),
//                                                 }}
//                                             >
//                                                 <div className="custom-info-window">
//                                                     <h3 className="font-bold text-md text-gray-800">
//                                                         {location.title}
//                                                     </h3>
//                                                     {location.description && (
//                                                         <p className="text-xs text-gray-600">
//                                                             {
//                                                                 location.description
//                                                             }
//                                                         </p>
//                                                     )}
//                                                     <a
//                                                         href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
//                                                         target="_blank"
//                                                         rel="noopener noreferrer"
//                                                         className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded transition-colors"
//                                                     >
//                                                         Open in Google Maps
//                                                     </a>
//                                                 </div>
//                                             </InfoWindow>
//                                         )}

//                                         {location.highlight &&
//                                             window.google?.maps?.geometry && (
//                                                 <Polygon
//                                                     paths={[
//                                                         window.google.maps.geometry.spherical.computeOffset(
//                                                             new window.google.maps.LatLng(
//                                                                 location.lat,
//                                                                 location.lng
//                                                             ),
//                                                             highlightRadius,
//                                                             0
//                                                         ),
//                                                     ]}
//                                                     options={{
//                                                         fillColor:
//                                                             location.highlightColor ||
//                                                             "#FF0000",
//                                                         fillOpacity: 0.2,
//                                                         strokeColor:
//                                                             location.highlightColor ||
//                                                             "#FF0000",
//                                                         strokeOpacity: 0.8,
//                                                         strokeWeight: 2,
//                                                     }}
//                                                 />
//                                             )}
//                                     </Marker>
//                                 ))}
//                             </>
//                         )}
//                     </MarkerClusterer>
//                 )}
//             </GoogleMap>
//         </LoadScript>
//     );
// };

// export default Map;

import "./Map.css";
import { useState, useMemo, useCallback, useEffect } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
    GoogleMapProps,
    MarkerClusterer,
} from "@react-google-maps/api";

const DEFAULT_CENTER = { lat: 22.8, lng: 88.43795 };
const DEFAULT_ZOOM = 9;

interface Location {
    lat: number;
    lng: number;
    name: string;
    address: string;
    description?: string;
}

interface MapProps {
    defaultCenter?: google.maps.LatLngLiteral;
    defaultZoom?: number;
}

const Map = ({
    defaultCenter = DEFAULT_CENTER,
    defaultZoom = DEFAULT_ZOOM,
}: MapProps) => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(
        null
    );
    const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
    const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
    const [loading, setLoading] = useState(true);

    // Fetch locations from backend
    useEffect(() => {
        const fetchStoreLocations = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/store-locations`
                );
                const data = await response.json();
                setLocations(
                    data.map((loc: any) => ({
                        lat: loc.latitude,
                        lng: loc.longitude,
                        name: loc.name,
                        address: loc.address,
                        description: loc.description,
                    }))
                );
            } catch (error) {
                console.error("Failed to fetch store locations", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStoreLocations();
    }, []);

    const mapStyles = useMemo(
        () => ({
            height: "100%",
            width: "100%",
        }),
        []
    );

    const mapOptions = useMemo<GoogleMapProps["options"]>(
        () => ({
            disableDefaultUI: true,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                },
            ],
        }),
        []
    );

    const fitMapToMarkers = useCallback(() => {
        if (!mapRef || locations.length === 0) return;

        const bounds = new window.google.maps.LatLngBounds();
        locations.forEach((location) => {
            bounds.extend(
                new window.google.maps.LatLng(location.lat, location.lng)
            );
        });

        mapRef.fitBounds(bounds);
        setTimeout(() => {
            if (mapRef.getZoom()! > 15) mapRef.setZoom(15);
        }, 500);
    }, [mapRef, locations]);

    const handleMapLoad = useCallback(
        (map: google.maps.Map) => {
            setMapRef(map);
            fitMapToMarkers();
        },
        [fitMapToMarkers]
    );

    if (loading) {
        return (
            <div className="text-center py-4">Loading store locations...</div>
        );
    }

    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            onLoad={() => setIsGoogleLoaded(true)}
            onError={(e) => console.error("Google Maps load error:", e)}
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                options={mapOptions}
                zoom={defaultZoom}
                center={defaultCenter}
                onLoad={handleMapLoad}
            >
                {isGoogleLoaded && (
                    <MarkerClusterer>
                        {(clusterer) => (
                            <>
                                {locations.map((location, index) => (
                                    <Marker
                                        key={index}
                                        position={{
                                            lat: location.lat,
                                            lng: location.lng,
                                        }}
                                        title={location.name}
                                        onClick={() =>
                                            setSelectedLocation(location)
                                        }
                                        clusterer={clusterer}
                                    >
                                        {selectedLocation?.lat ===
                                            location.lat && (
                                            <InfoWindow
                                                onCloseClick={() =>
                                                    setSelectedLocation(null)
                                                }
                                                options={{ maxWidth: 250 }}
                                            >
                                                <div className="custom-info-window">
                                                    <h3 className="font-bold text-md text-gray-800 mb-2">
                                                        {location.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mb-2">
                                                        {location.address}
                                                    </p>
                                                    {location.description && (
                                                        <p className="text-xs text-gray-500 mb-3">
                                                            {
                                                                location.description
                                                            }
                                                        </p>
                                                    )}
                                                    <a
                                                        href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded transition-colors"
                                                    >
                                                        View in Google Maps
                                                    </a>
                                                </div>
                                            </InfoWindow>
                                        )}
                                    </Marker>
                                ))}
                            </>
                        )}
                    </MarkerClusterer>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
