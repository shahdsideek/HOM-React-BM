import React from 'react'
import GoogleMapReact from 'google-map-react'


const defaultProps = {
  center: {
    lat: -37.809020,
    lng: 145.006470,
  },
  zoom: 14,
}

const AnyReactComponent = ({ text }) => <div className="map-symbol">{text}</div>

const GoogleMap = () => (
  <div style={{ height: '631.44px', width: '40%',max_width:'40%' ,position:'absolute', top:'30em', left:'6em',padding:'0 0 30px 0'}}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyACxxZVOnO6wmqzfToYDd6oEvcjQDZXIK0' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={-37.809020}
        lng={145.006470}
        text={'⧪'}

      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
