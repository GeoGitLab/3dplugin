import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Panel, Button, Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import * as actions from '@mapstore/actions/map';
import { mapTypeSelector } from '@mapstore/selectors/map';
import VolumeCalculator from './components/VolumeCalculator';
import './VolumeCalculatorPlugin.css';

const VolumeCalculatorPlugin = (props) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [polygon, setPolygon] = useState(null);
  const [results, setResults] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);

  const { mapType } = props;

  // Only show in Cesium 3D mode
  if (mapType !== 'cesium') {
    return null;
  }

  const handleDrawPolygon = () => {
    setIsDrawing(true);
    setShowCalculator(true);
  };

  const handleCalculateArea = () => {
    if (polygon) {
      // Calculate area using Turf.js
      const area = calculatePolygonArea(polygon);
      setResults(prev => ({ ...prev, area }));
    }
  };

  const handleExportReset = () => {
    setPolygon(null);
    setResults(null);
    setIsDrawing(false);
    setShowCalculator(false);
  };

  const calculatePolygonArea = (polygonCoords) => {
    // Simple area calculation using Turf.js
    // This would need to be implemented with actual Turf.js import
    return 0; // Placeholder
  };

  return (
    <div className="volume-calculator-plugin">
      <Panel className="volume-calculator-panel">
        <Panel.Heading>
          <Panel.Title>
            <Glyphicon glyph="cog" /> 3D Volume Calculator
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="button-container">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="draw-tooltip">Disegna Poligono 3D e calcola volume</Tooltip>}
            >
              <Button
                bsStyle="primary"
                className="action-button"
                onClick={handleDrawPolygon}
                disabled={isDrawing}
              >
                <Glyphicon glyph="pencil" /> Disegna Poligono
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="area-tooltip">Calcola area del poligono</Tooltip>}
            >
              <Button
                bsStyle="info"
                className="action-button"
                onClick={handleCalculateArea}
                disabled={!polygon}
              >
                <Glyphicon glyph="resize-full" /> Calcola Area
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="reset-tooltip">Esporta/Reset</Tooltip>}
            >
              <Button
                bsStyle="warning"
                className="action-button"
                onClick={handleExportReset}
              >
                <Glyphicon glyph="refresh" /> Reset
              </Button>
            </OverlayTrigger>
          </div>

          {results && (
            <div className="results-container">
              <h5>Risultati:</h5>
              {results.volume && (
                <p><strong>Volume:</strong> {results.volume.toFixed(2)} m³</p>
              )}
              {results.area && (
                <p><strong>Area:</strong> {results.area.toFixed(2)} m²</p>
              )}
            </div>
          )}
        </Panel.Body>
      </Panel>

      {showCalculator && (
        <VolumeCalculator
          isDrawing={isDrawing}
          onPolygonComplete={(poly) => setPolygon(poly)}
          onVolumeCalculated={(volume) => setResults(prev => ({ ...prev, volume }))}
          onClose={() => setShowCalculator(false)}
        />
      )}
    </div>
  );
};

const selector = createSelector(
  [mapTypeSelector],
  (mapType) => ({
    mapType
  })
);

export default connect(selector)(VolumeCalculatorPlugin);