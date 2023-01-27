import Badge from "../badge/badge";
import MapTooltip from "../map-tooltip/mapTooltip";
import { mapData } from "../../mock data/map-data";
import "./desktopContactStyles.css";

export default function DesktopContact() {
  return (
    <section className="desktop-contact">
      <div className="n-container">
        <div className="desktop-contact-heading-support-text">
          <div className="desktop-contact-heading-badge">
            <Badge text="Our international front office" outline />
            <h2 className="desktop-contact-heading">
              We’re a distributed team
            </h2>
            <p className="desktop-contact-support-text">
              We have offices and teams all around the world.
            </p>
          </div>
        </div>
      </div>

      <div className="n-container">
        <div className="desktop-contact-mapwrap">
          <div className="desktop-contact-map-size">
            <img src="world map.svg" alt="world map by dots" />
            {(function () {
              const arr = [1,2,3,4,5,6];
              return arr.map((el) => (
                <div className={`desktop-contact-map-marker map-marker-${el}`} key={el}>
                    <img
                      src="map-marker.svg"
                      alt="map marker"
                      className="desktop-contact-map-marker"
                    />
                    <MapTooltip data={mapData.australia}/>
                  </div>
              ))
            })()}

            <div className="desktop-contact-map-marker map-marker-7">
              <img
                src="map-marker.svg"
                alt="map marker"
                className="desktop-contact-map-marker"
              />
              <MapTooltip data={mapData.japan} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
