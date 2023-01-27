import { mapData } from "../../mock data/map-data";
import "./mapTooltipStyles.css";

export default function MapTooltip({ data = mapData.australia }) {
  return (
    <div className="map-tooltip">
      <div className="map-tooltip-relative">
        <img src="au-icon.svg" alt="icon" />
        <p className="map-tooltip-address-1">{data.city}, {data.countryCode}</p>
        <p className="map-tooltip-address-2">
          {data.streetAddress},
          <br />
          {data.zipCode} {data.city.toUpperCase()}
        </p>
        <div className="map-tooltip-thingy"></div>
      </div>
    </div>
  );
}
