import { useContext } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
// import { CitiesInfosContext } from "../../context/CitiesInfosProvider";
import MapChildren from "./MapChildren";
import { StoreContext } from "../../context/StoreContextProvider";

const MapStores = () => {
	const { coords, setCoords } = useContext(StoreContext);
	console.log(coords);
	// const { coords, setCoords } = useContext(CitiesInfosContext);
	// console.log(data);
	// const x = coords.lat;
	// const y = coords?.lng;
	return (
		<>
			{/* <h3>
				{coords.lat} / {coords.lng}
			</h3> */}
			<MapContainer
				center={[coords.lat, coords.lng]}
				zoom={13}
				scrollWheelZoom={false}
			>
				<MapChildren coords={coords} />
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[coords.lat, coords.lng]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
};

export default MapStores;
