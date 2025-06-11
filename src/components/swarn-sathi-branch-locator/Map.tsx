"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "./Map.css";

const DEFAULT_CENTER = { lat: 22.8, lng: 88.43795 };
const DEFAULT_ZOOM = 9;

interface Location {
  lat: number;
  lng: number;
  name: string;
  address: string;
  description?: string;
  image?: string;
}

interface MapProps {
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
}

const Map = ({
  defaultCenter = DEFAULT_CENTER,
  defaultZoom = DEFAULT_ZOOM,
}: MapProps) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

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

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const initMap = async () => {
      try {
        const L = (await import("leaflet")).default;
        await import("leaflet/dist/leaflet.css");

        // Create custom marker icon
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div class="marker-pin"></div>
            <div class="marker-pulse"></div>
          `,
          iconSize: [30, 42],
          iconAnchor: [15, 42],
          popupAnchor: [0, -42]
        });

        // Initialize map
        mapRef.current = L.map(mapContainerRef.current).setView(
          [defaultCenter.lat, defaultCenter.lng],
          defaultZoom
        );

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);

        // Add markers for each location
        locations.forEach((location) => {
          const marker = L.marker([location.lat, location.lng], { icon: customIcon })
            .addTo(mapRef.current)
            .bindPopup(`
              <div class="custom-info-window">
                ${location.description ? `<img src="${location.description}" alt="${location.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; margin-right: 8px;">` : ''}
                <div>
                  <h3>${location.name}</h3>
                  <p>${location.address}</p>
                  <a href="https://www.openstreetmap.org/?mlat=${location.lat}&mlon=${location.lng}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline; font-weight: bold;">
                    View on OpenStreetMap
                  </a>
                </div>
              </div>
            `);

          marker.on("click", () => {
            setSelectedLocation(location);
          });
        });

        // Fit bounds to show all markers
        if (locations.length > 0) {
          const bounds = L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng]));
          mapRef.current.fitBounds(bounds, { padding: [50, 50] });
        }
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [defaultCenter, defaultZoom, locations]);

  if (loading) {
    return <div className="text-center py-4">Loading store locations...</div>;
  }

  return (
    <div
      ref={mapContainerRef}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    />
  );
};

// Export with dynamic import to prevent SSR issues
export default dynamic(() => Promise.resolve(Map), {
  ssr: false,
  loading: () => <div className="text-center py-4">Loading map...</div>,
});
