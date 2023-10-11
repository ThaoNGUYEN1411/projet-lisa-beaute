import { useMap } from "react-leaflet";

const MapChildren = ({ coords }) => {
	const map = useMap();
	// console.log(map.getZoom());
	map.setView([coords.lat, coords.lng], map.getZoom());
	return null;
};

export default MapChildren;
