
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function TrainingsMap() {
  return (
    <MapContainer
      center={[49.4767248,1.0324941]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
      />
      <Marker position={[49.481843,1.0246745]}>
        <Popup>Salle Jesse Owens</Popup>
      </Marker>
      <Marker position={[49.4774231,1.0376002]}>
        <Popup>Gymnase Lesueur</Popup>
      </Marker>
    </MapContainer>
  );
}
