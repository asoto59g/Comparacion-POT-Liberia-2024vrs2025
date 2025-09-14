var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Zonificacion2024_1 = new ol.format.GeoJSON();
var features_Zonificacion2024_1 = format_Zonificacion2024_1.readFeatures(json_Zonificacion2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonificacion2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonificacion2024_1.addFeatures(features_Zonificacion2024_1);
var lyr_Zonificacion2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonificacion2024_1, 
                style: style_Zonificacion2024_1,
                popuplayertitle: 'Zonificacion 2024',
                interactive: true,
    title: 'Zonificacion 2024<br />\
    <img src="styles/legend/Zonificacion2024_1_0.png" /> T1<br />\
    <img src="styles/legend/Zonificacion2024_1_1.png" /> T2<br />\
    <img src="styles/legend/Zonificacion2024_1_2.png" /> T3<br />\
    <img src="styles/legend/Zonificacion2024_1_3.png" /> T4<br />\
    <img src="styles/legend/Zonificacion2024_1_4.png" /> T5<br />\
    <img src="styles/legend/Zonificacion2024_1_5.png" /> T6<br />\
    <img src="styles/legend/Zonificacion2024_1_6.png" /> ZE1<br />\
    <img src="styles/legend/Zonificacion2024_1_7.png" /> ZE2<br />\
    <img src="styles/legend/Zonificacion2024_1_8.png" /> ZE3<br />\
    <img src="styles/legend/Zonificacion2024_1_9.png" /> ZE4<br />\
    <img src="styles/legend/Zonificacion2024_1_10.png" /> ZE5<br />' });
var format_Zonificacion2025Oficial_2 = new ol.format.GeoJSON();
var features_Zonificacion2025Oficial_2 = format_Zonificacion2025Oficial_2.readFeatures(json_Zonificacion2025Oficial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonificacion2025Oficial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonificacion2025Oficial_2.addFeatures(features_Zonificacion2025Oficial_2);
var lyr_Zonificacion2025Oficial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonificacion2025Oficial_2, 
                style: style_Zonificacion2025Oficial_2,
                popuplayertitle: 'Zonificacion 2025 Oficial',
                interactive: true,
    title: 'Zonificacion 2025 Oficial<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_0.png" /> R1 Zona de Conservación y Turismo Costero<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_1.png" /> R2 Zona Agroforestal y Turismo de Montaña<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_2.png" /> R3 Zona de Producción Agrícola e Integración Comunitaria<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_3.png" /> R4 Zona de Manejo Agroecológico y Sustentable<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_4.png" /> T3 Zona Suburbana<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_5.png" /> T4 Zona Urbana<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_6.png" /> T5 Zona Centro Urbano<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_7.png" /> T6 Zona Núcleo Urbano<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_8.png" /> Zona Especial  Institucional<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_9.png" /> Zona Especial Académica<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_10.png" /> Zona Especial Aeroportuaria<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_11.png" /> Zona Especial Histórica<br />\
    <img src="styles/legend/Zonificacion2025Oficial_2_12.png" /> <todos los demás valores><br />' });
var format_CatsaCoyolarAhogados_3 = new ol.format.GeoJSON();
var features_CatsaCoyolarAhogados_3 = format_CatsaCoyolarAhogados_3.readFeatures(json_CatsaCoyolarAhogados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatsaCoyolarAhogados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatsaCoyolarAhogados_3.addFeatures(features_CatsaCoyolarAhogados_3);
var lyr_CatsaCoyolarAhogados_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CatsaCoyolarAhogados_3, 
                style: style_CatsaCoyolarAhogados_3,
                popuplayertitle: 'Catsa-Coyolar-Ahogados',
                interactive: true,
                title: '<img src="styles/legend/CatsaCoyolarAhogados_3.png" /> Catsa-Coyolar-Ahogados'
            });
var format_CicloviasPOTLiberia2025_4 = new ol.format.GeoJSON();
var features_CicloviasPOTLiberia2025_4 = format_CicloviasPOTLiberia2025_4.readFeatures(json_CicloviasPOTLiberia2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CicloviasPOTLiberia2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CicloviasPOTLiberia2025_4.addFeatures(features_CicloviasPOTLiberia2025_4);
var lyr_CicloviasPOTLiberia2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CicloviasPOTLiberia2025_4, 
                style: style_CicloviasPOTLiberia2025_4,
                popuplayertitle: 'Ciclovias POT Liberia 2025',
                interactive: true,
                title: '<img src="styles/legend/CicloviasPOTLiberia2025_4.png" /> Ciclovias POT Liberia 2025'
            });
var format_VialidadPOTLiberia2025_5 = new ol.format.GeoJSON();
var features_VialidadPOTLiberia2025_5 = format_VialidadPOTLiberia2025_5.readFeatures(json_VialidadPOTLiberia2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VialidadPOTLiberia2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VialidadPOTLiberia2025_5.addFeatures(features_VialidadPOTLiberia2025_5);
var lyr_VialidadPOTLiberia2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VialidadPOTLiberia2025_5, 
                style: style_VialidadPOTLiberia2025_5,
                popuplayertitle: 'Vialidad POT Liberia 2025',
                interactive: true,
                title: '<img src="styles/legend/VialidadPOTLiberia2025_5.png" /> Vialidad POT Liberia 2025'
            });
var group_Litopetrofisico = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Litopetrofisico'});
var group_Geodinamicaexterna = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Geodinamica externa'});
var group_Hidrogeologia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hidrogeologia'});
var group_Estladeras = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Est laderas'});
var group_Amenazasnaturales = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Amenazas naturales'});
var group_IFASintegrados = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'IFAS integrados'});
var group_Bioaptitud = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bioaptitud'});
var group_Edafoaptitud = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Edafoaptitud'});
var group_Antroaptitud = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Antroaptitud'});
var group_IFAIntegracion = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'IFA Integracion'});

lyr_googlesatellitehybrid_0.setVisible(true);lyr_Zonificacion2024_1.setVisible(false);lyr_Zonificacion2025Oficial_2.setVisible(true);lyr_CatsaCoyolarAhogados_3.setVisible(true);lyr_CicloviasPOTLiberia2025_4.setVisible(true);lyr_VialidadPOTLiberia2025_5.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_Zonificacion2024_1,lyr_Zonificacion2025Oficial_2,lyr_CatsaCoyolarAhogados_3,lyr_CicloviasPOTLiberia2025_4,lyr_VialidadPOTLiberia2025_5];
lyr_Zonificacion2024_1.set('fieldAliases', {'FID': 'FID', 'TRANSECTO': 'TRANSECTO', 'ETIQUETA': 'ETIQUETA', 'AreaHa': 'AreaHa', });
lyr_Zonificacion2025Oficial_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA_HA': 'AREA_HA', 'TRANSECTO': 'TRANSECTO', 'ID': 'ID', 'ETIQUETA': 'ETIQUETA', 'AREA_M': 'AREA_M', 'AREA_KM': 'AREA_KM', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'largo_manz': 'largo_manz', 'ancho_manz': 'ancho_manz', 'area_lote_': 'area_lote_', 'frente_lot': 'frente_lot', 'cobertura_': 'cobertura_', 'cobertur_1': 'cobertur_1', 'area_verde': 'area_verde', 'altura_bas': 'altura_bas', 'altura_inc': 'altura_inc', 'altura_max': 'altura_max', 'retiro_fro': 'retiro_fro', 'retiro_lat': 'retiro_lat', 'retiro_l_1': 'retiro_l_1', 'retiro_l_2': 'retiro_l_2', 'retiro_pos': 'retiro_pos', 'retiros_ru': 'retiros_ru', 'estacionam': 'estacionam', 'estacion_1': 'estacion_1', 'estacion_2': 'estacion_2', 'estacion_3': 'estacion_3', 'estacion_4': 'estacion_4', 'adosamient': 'adosamient', 'retiro_par': 'retiro_par', 'retiro_via': 'retiro_via', });
lyr_CatsaCoyolarAhogados_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'LongKm': 'LongKm', });
lyr_CicloviasPOTLiberia2025_4.set('fieldAliases', {'id': 'id', 'LongKm': 'LongKm', });
lyr_VialidadPOTLiberia2025_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'Shape__Len': 'Shape__Len', });
lyr_Zonificacion2024_1.set('fieldImages', {'FID': 'TextEdit', 'TRANSECTO': 'TextEdit', 'ETIQUETA': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_Zonificacion2025Oficial_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'AREA_HA': 'TextEdit', 'TRANSECTO': 'TextEdit', 'ID': 'TextEdit', 'ETIQUETA': 'TextEdit', 'AREA_M': 'TextEdit', 'AREA_KM': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'largo_manz': 'TextEdit', 'ancho_manz': 'TextEdit', 'area_lote_': 'TextEdit', 'frente_lot': 'TextEdit', 'cobertura_': 'TextEdit', 'cobertur_1': 'TextEdit', 'area_verde': 'TextEdit', 'altura_bas': 'TextEdit', 'altura_inc': 'TextEdit', 'altura_max': 'TextEdit', 'retiro_fro': 'TextEdit', 'retiro_lat': 'TextEdit', 'retiro_l_1': 'TextEdit', 'retiro_l_2': 'TextEdit', 'retiro_pos': 'TextEdit', 'retiros_ru': 'TextEdit', 'estacionam': 'TextEdit', 'estacion_1': 'TextEdit', 'estacion_2': 'TextEdit', 'estacion_3': 'TextEdit', 'estacion_4': 'TextEdit', 'adosamient': 'TextEdit', 'retiro_par': 'TextEdit', 'retiro_via': 'TextEdit', });
lyr_CatsaCoyolarAhogados_3.set('fieldImages', {'id': '', 'Nombre': '', 'LongKm': '', });
lyr_CicloviasPOTLiberia2025_4.set('fieldImages', {'id': '', 'LongKm': '', });
lyr_VialidadPOTLiberia2025_5.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Name': '', 'Shape__Len': '', });
lyr_Zonificacion2024_1.set('fieldLabels', {'FID': 'no label', 'TRANSECTO': 'no label', 'ETIQUETA': 'no label', 'AreaHa': 'no label', });
lyr_Zonificacion2025Oficial_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'AREA_HA': 'inline label - always visible', 'TRANSECTO': 'inline label - always visible', 'ID': 'inline label - always visible', 'ETIQUETA': 'inline label - always visible', 'AREA_M': 'inline label - always visible', 'AREA_KM': 'inline label - always visible', 'Shape__Are': 'inline label - always visible', 'Shape__Len': 'inline label - always visible', 'largo_manz': 'inline label - always visible', 'ancho_manz': 'inline label - always visible', 'area_lote_': 'inline label - always visible', 'frente_lot': 'inline label - always visible', 'cobertura_': 'inline label - always visible', 'cobertur_1': 'inline label - always visible', 'area_verde': 'inline label - always visible', 'altura_bas': 'inline label - always visible', 'altura_inc': 'inline label - always visible', 'altura_max': 'inline label - always visible', 'retiro_fro': 'inline label - always visible', 'retiro_lat': 'inline label - always visible', 'retiro_l_1': 'inline label - always visible', 'retiro_l_2': 'inline label - always visible', 'retiro_pos': 'inline label - always visible', 'retiros_ru': 'inline label - always visible', 'estacionam': 'inline label - always visible', 'estacion_1': 'inline label - always visible', 'estacion_2': 'inline label - always visible', 'estacion_3': 'inline label - always visible', 'estacion_4': 'inline label - always visible', 'adosamient': 'inline label - always visible', 'retiro_par': 'inline label - always visible', 'retiro_via': 'inline label - always visible', });
lyr_CatsaCoyolarAhogados_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'LongKm': 'no label', });
lyr_CicloviasPOTLiberia2025_4.set('fieldLabels', {'id': 'no label', 'LongKm': 'no label', });
lyr_VialidadPOTLiberia2025_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Name': 'no label', 'Shape__Len': 'no label', });
lyr_VialidadPOTLiberia2025_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});